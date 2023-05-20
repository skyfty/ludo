const { regClass, property } = Laya;
import { Player } from "./Player";
import { Groove } from "./Groove";

@regClass()
export abstract  class Performer extends Laya.Script {
    protected player:Player;
    protected currentDiceNumber = 0;
    protected chippy: Laya.Sprite[] = [];

    constructor() {
        super();
    }

    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    onAwake(): void {
        this.player = this.owner.getComponent(Player);
    }

    protected reckonChess(diceNumber:number, complete: Laya.Handler): void {
        if (diceNumber != 5 && this.chippy.length > 0) {
            if (this.chippy.length > 1) {
                complete.runWith([this.chippy]);
            } else {
                complete.runWith([new Array(this.chippy[0])]);
            }
        } else if (diceNumber == 5) {
            let chesses:Laya.Sprite[] = [];
            chesses = chesses.concat(this.chippy);
            for(let i = 0;i < this.player.groove.numChildren;++i) {
                chesses.push(this.player.groove.getChildAt(i) as Laya.Sprite);
            }
            complete.runWith([chesses]);
        }
        else
        {
            complete.runWith(null);
        }
    }

    protected advance(chess:Laya.Sprite, diceNumber:number, complete: Laya.Handler) {
        if (this.chippy.indexOf(chess) != -1) {
            this.player.forwordChess(chess, diceNumber + 1, complete);
        } else {
            this.player.forwordChess(chess, 1, new Laya.Handler(this, ()=>{
                this.chippy.push(chess);
                complete.runWith(chess);
            }));
        }
    }

}