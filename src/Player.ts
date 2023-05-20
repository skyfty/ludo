import { Chess } from "./Chess";
import { Door } from "./Door";

const { regClass, property } = Laya;

@regClass()
export class Player extends Laya.Script {
    //declare owner : Laya.Sprite3D;

    @property(Laya.Sprite)
    public entry:Laya.Sprite;

    @property(Laya.Sprite)
    public door:Laya.Sprite;

    @property(Laya.Clip)
    public diceRoll:Laya.Clip;

    @property(Laya.Clip)
    public diceDefault:Laya.Clip;

    @property(Laya.Sprite)
    public groove:Laya.Sprite;

    @property(Laya.Sprite)
    public universal:Laya.Sprite;
    public numberUniversalHold:number;

    @property(Laya.Sprite)
    public trade:Laya.Sprite;
    
    @property(Laya.Sprite)
    public personal:Laya.Sprite;
    public numberPersonalHold:number;

    @property(Laya.Prefab)
    public chessPrefab:Laya.Prefab;

    constructor() {
        super();
    }
    onAwake(): void {
        this.numberUniversalHold = this.universal.numChildren;
        this.numberPersonalHold = this.personal.numChildren;
    }
    public setDiceNumber(idx:number) {
        this.diceDefault.visible = true;
        this.diceRoll.visible = false;
        this.diceDefault.index = idx;
    }

    private scaleChessInHole() {
        // for(let i = 0;i < this.chippy.length - 1;++i) {
        //     let child = this.chippy[i] as Laya.Sprite;
        //     let childChess = child.getComponent(Chess) as Chess;
        //     for(let j = i + 1;j < this.chippy.length;++j) {
        //         let nextChild = this.chippy[j] as Laya.Sprite;
        //         let nextChildChess = nextChild.getComponent(Chess) as Chess;
        //         if (childChess.hole == nextChildChess.hole) {
        //             child.scale(0.5, 0.5);
        //             nextChild.scale(0.5, 0.5);
        //         }
        //     }
        // }
    }

    private onChessForwordComplete(node:Laya.Sprite) {
        this.scaleChessInHole();
    }

    public forwordChess(node:Laya.Sprite,stepNumber:number, complete: Laya.Handler) {
        let chess = node.getComponent(Chess) as Chess;
        chess.step(stepNumber, 1, Laya.Handler.create(this, () => {
            this.onChessForwordComplete(node);
            complete.runWith(node);
        }));
    }

    public startRoll() {
        this.diceDefault.visible = false;
        this.diceRoll.visible = true;
        this.diceRoll.play(0, -1);
    }

    public stopRoll(complete: Laya.Handler) {
        this.diceRoll.stop();
        complete.run();
    }

    
    public hopChesses(chesses:Laya.Sprite[]):void {
        for(let i = 0; i < chesses.length; ++i) {
            chesses[i].getComponent(Chess).hop();
        }
    }

    public stopChesses(chesses:Laya.Sprite[]) {
        for(let i = 0; i < chesses.length; ++i) {
            chesses[i].getComponent(Chess).stop();
        }
    }

}