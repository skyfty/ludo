import { Entry } from "./Entry";
import { Dice } from "./Dice";
import { Origin } from "./Origin";
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

    @property(Origin)
    public origin:Origin;

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

    private onRollTimeout() {
        this.diceRoll.stop();
        this.setDiceNumber(this.currentDiceNumber);

        this.chooseChess(Laya.Handler.create(this, () => {

        }));

        // if (this.chippy.length == 6) {
    
        //     this.departure(this.entry);

        // } else if (this.chippy.length > 1) {
        //     let chess = this.chippy[0].getComponent(Chess);
        //     let stepNumber = this.currentDiceNumber + 1;
        //     chess.step(stepNumber, Laya.Handler.create(this, () => {
        //         console.log("lskjf");
        //     }));
        // }
    }

    private chooseChess(complete: Laya.Handler) {
        
    }

    public cloneNewChess(childNode:Laya.Image) {
        let newChess =  this.chessPrefab.create() as Laya.Sprite;
        newChess.width = childNode.width;
        newChess.height = childNode.height;
        let newChessImage = newChess.getChildByName("Image")as  Laya.Image;
        newChessImage.skin = childNode.skin;
        return newChess;
    }

    
    public departure(destNode:Laya.Sprite) {
        let groove = this.origin.owner.getChildByName("groove") as Laya.Sprite;
        
        let childNode = groove.getChildAt(0) as Laya.Sprite;
        let newChess = this.cloneNewChess(childNode as Laya.Image);
        let newChessHole = newChess.getComponent(Chess);
        newChessHole.hole = destNode;

        let originPoint = groove.localToGlobal(new Laya.Point(childNode.x,childNode.y));
        Laya.stage.addChild(newChess.pos(originPoint.x, originPoint.y));

        let destPoint = this.universal.localToGlobal(new Laya.Point(destNode.x,destNode.y));
        Laya.Tween.to(newChess, { y: destPoint.y, x: destPoint.x }, 700, Laya.Ease.quintInOut, Laya.Handler.create(this, () => {
            this.universal.addChild(newChess.pos(destNode.x, destNode.y));
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