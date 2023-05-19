import { Entry } from "./Entry";
import { Dice } from "./Dice";
import { Groove } from "./Groove";
import { Chess } from "./Chess";


const { regClass, property } = Laya;

@regClass()
export class Player extends Laya.Script {
    //declare owner : Laya.Sprite3D;

    @property(Laya.Sprite)
    public entry:Laya.Sprite;

    @property(Laya.Clip)
    public diceRoll:Laya.Clip;

    @property(Laya.Clip)
    public diceDefault:Laya.Clip;

    @property(Laya.Sprite)
    public groove:Laya.Sprite;

    @property(Laya.Sprite)
    public universal:Laya.Sprite;

    
    @property(Laya.Sprite)
    public personal:Laya.Sprite;

    
    @property(Laya.Prefab)
    public chessPrefab:Laya.Prefab;

    private currentDiceNumber = 0;

    private chippy: Laya.Sprite[] = [];

    constructor() {
        super();
    }

    /**
     * 鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
     */
    onMouseClick(): void {
        this.startRoll();
    }

    private setDiceNumber(idx:number) {
        this.diceDefault.visible = true;
        this.diceRoll.visible = false;
        this.diceDefault.index = idx;
    }


    private scaleChessInHole() {
        for(let i = 0;i < this.chippy.length - 1;++i) {
            let child = this.chippy[i] as Laya.Sprite;
            let childChess = child.getComponent(Chess) as Chess;
            for(let j = i + 1;j < this.chippy.length;++j) {
                let nextChild = this.chippy[j] as Laya.Sprite;
                let nextChildChess = nextChild.getComponent(Chess) as Chess;
                if (childChess.hole == nextChildChess.hole) {
                    child.scale(0.5, 0.5);
                    nextChild.scale(0.5, 0.5);
                }
            }
        }
    }


    private onChessForwordComplete(node:Laya.Sprite) {
        this.scaleChessInHole();
    }

    private forwordChess(node:Laya.Sprite,stepNumber:number) {
        let chess = node.getComponent(Chess) as Chess;
        chess.step(stepNumber, Laya.Handler.create(this, () => {
            this.onChessForwordComplete(node);
        }));
    }

    private onRollTimeout() {
        this.diceRoll.stop();
        this.currentDiceNumber = 5;
        this.setDiceNumber(this.currentDiceNumber);

        if (this.currentDiceNumber != 5 && this.chippy.length > 0) {
            let setpNumber = this.currentDiceNumber + 1;
            if (this.chippy.length > 1) {
                this.chooseChess(this.chippy, Laya.Handler.create(this, (chess:Laya.Sprite) => {
                    this.forwordChess(chess,setpNumber);
                }));
            } else {
                this.forwordChess(this.chippy[0], setpNumber);
            }
        } else if (this.currentDiceNumber == 5) {
            let chesses:Laya.Sprite[] = [];
            chesses = chesses.concat(this.chippy);
    
            for(let i = 0;i < this.groove.numChildren;++i) {
                let child = this.groove.getChildAt(i) as Laya.Sprite;
                if (child.visible) {
                    chesses.push(child);
                }
            }
            this.chooseChess(chesses, Laya.Handler.create(this, (chess:Laya.Sprite) => {
                if (this.chippy.indexOf(chess) != -1) {
                    this.forwordChess(chess, this.currentDiceNumber + 1);
                } else {
                    this.departure(chess);
                }
            }));
        }
    }

    private chooseChess(chesses:Laya.Sprite[], complete: Laya.Handler) {
        let o:any = "chooseChess";
        for(let i = 0; i < chesses.length; ++i) {
            chesses[i].getComponent(Chess).hop();
            chesses[i].on(Laya.Event.CLICK, o, ()=>{
                for(let i = 0; i < chesses.length; ++i) {
                    chesses[i].getComponent(Chess).stop();
                    chesses[i].offAllCaller(o);
                }
                complete.runWith(chesses[i]);
            });
        }
    }

    public cloneNewChess(childNode:Laya.Image) {
        let newChess =  this.chessPrefab.create() as Laya.Sprite;
        newChess.width = childNode.width;
        newChess.height = childNode.height;
        let newChessImage = newChess.getComponent(Chess);
        newChessImage.hole = this.entry;
        newChessImage.image.skin = childNode.getComponent(Chess).image.skin;
        return newChess;
    }

    
    public departure(childNode:Laya.Sprite) {
        let newChess = this.cloneNewChess(childNode as Laya.Image);

        let originPoint = this.groove.localToGlobal(new Laya.Point(childNode.x,childNode.y));
        Laya.stage.addChild(newChess.pos(originPoint.x, originPoint.y));

        let destPoint = this.universal.localToGlobal(new Laya.Point(this.entry.x,this.entry.y));
        
        Laya.Tween.to(newChess, { y: destPoint.y, x: destPoint.x }, 600, Laya.Ease.quintInOut, Laya.Handler.create(this, () => {
            this.universal.addChild(newChess.pos(this.entry.x, this.entry.y));
        }));
        childNode.visible = false;
        this.chippy.push(newChess);
    }

    public startRoll() {
        this.currentDiceNumber =  Math.floor(Math.random()* 6);
        this.diceDefault.visible = false;
        this.diceRoll.visible = true;
        this.diceRoll.play(0, -1);
        Laya.timer.once(100, this, this.onRollTimeout);
    }
}