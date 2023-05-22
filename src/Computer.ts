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
        let chesses = this.player.reckonChess(this.currentDiceNumber);
        if (chesses.length > 0) {
            this.owner.event(Player.Event.Choose, [this.owner]);
            this.player.hopChesses(chesses);
            this.player.deduce(this.currentDiceNumber, chesses, Laya.Handler.create(this, (deduceResult:Player.DeduceResult[])=>{
                Laya.timer.once(500, this, ()=>{
                    this.player.stopChesses(chesses);
                    this.player.advance(deduceResult[0].chess, this.currentDiceNumber,Laya.Handler.create(this,  this.onAdvanceComplete));
                });
            }));
        } else {
            this.owner.event(Player.Event.Achieve, null);
        }
    }

    private onAdvanceComplete(node:Laya.Sprite) {
        let chess = node.getComponent(Chess);
        if (chess.hole == this.player.entry) {
            this.startRoll();
            return;
        }
        this.owner.event(Player.Event.Achieve, node);
        if (this.player.isAllHome()) {
            this.owner.event(Player.Event.Victory);
        }
    }
}