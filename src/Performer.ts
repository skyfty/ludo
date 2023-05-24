const { regClass, property } = Laya;
import * as Player from "./Player";


@regClass()
export class Performer extends Laya.Script {
    protected currentDiceNumber = 0;
    protected player:Player.Player;
    protected state:Player.State = Player.State.Idle;

    constructor() {
        super();
    }

    onAwake(): void {
        let node = this.owner as Laya.Sprite;
        this.player = node.getComponent(Player.Player);
        node.visible = true;
    }

    public setState(state:Player.State): void {
        this.state = state;
        this.owner.event(Player.Event.StateChange, [state]);
    }

    protected stopChessDecuce(reasons:string[], deduceResult:any[]) {
        for(let idx in deduceResult) {
            let dr = deduceResult[idx];
            if (reasons.indexOf(dr.reason) != -1) {
                dr.kicks.map((c:any)=>{
                    c.stop();
                });
            }
        }
    }
}