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
}