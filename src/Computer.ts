const { regClass, property } = Laya;
import { Performer } from "./Performer";
import * as Player from "./Player";
import { Chess } from "./Chess";

@regClass()
export class Computer extends Performer {

    constructor() {
        super();
    }

    onStart(): void {
        this.owner.on(Player.Event.StateChange, this, this.onStateChange);
    }

    onStateChange() {
        if (this.state != Player.State.Running) {
            return;
        }
        this.startRoll();
    }

    private startRoll() {
        this.owner.event(Player.Event.RollStart, this.owner);
        this.player.startRoll();
        Laya.timer.once(600, this, this.onRollTimeout);
    }

    private onRollTimeout() {
        this.currentDiceNumber = Math.floor(Math.random()* 6);
        this.player.stopRoll(Laya.Handler.create(this,  this.onRollStop));
    }

    private onRollStop() {
        this.owner.event(Player.Event.RollEnd, [this.owner, this.currentDiceNumber]);
        this.player.setDiceNumber(this.currentDiceNumber);
        this.player.reckonChess(this.currentDiceNumber, Laya.Handler.create(this,  (chesses:Laya.Sprite[])=>{
            if (chesses != null) {
                this.owner.event(Player.Event.Choose, [this.owner]);
                let idx = Math.floor(Math.random()* chesses.length);
                this.player.advance(chesses[idx], this.currentDiceNumber,Laya.Handler.create(this,  this.onAdvanceComplete));
            } else {
                this.owner.event(Player.Event.Achieve, null);
            }
        }));
    }

    private onAdvanceComplete(node:Laya.Sprite) {
        let chess = node.getComponent(Chess);
        if (chess.hole == this.player.entry) {
            this.startRoll();
            return;
        }
        this.owner.event(Player.Event.Achieve, node);
    }
}