const { regClass, property } = Laya;
import * as Player from "./Player";
import { Medal } from "./Medal";

@regClass()
export class Loser extends Laya.Script {

    @property(Laya.Button)
    public return: Laya.Button;

    @property(Laya.ViewStack)
    public viewStack: Laya.ViewStack;

    constructor() {
        super();
    }
    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    onAwake(): void {
        this.return.on(Laya.Event.CLICK, this, ()=>{
            this.owner.event(Laya.Event.CLOSE);
        });
    }
    onStart(): void {
    }

    public setEarn(winPlayerId: string, numberOfPlayer: number, players: Laya.Sprite[]) {
        this.viewStack.addComponentInstance(new Medal(winPlayerId, numberOfPlayer, players));
    }
}