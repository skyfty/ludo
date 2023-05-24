const { regClass, property } = Laya;
import { Performer } from "./Performer";
import * as Player from "./Player";
import { Chess } from "./Chess";
import { Trade } from "./Trade";
import { Dice } from "./Dice";

@regClass()
export class Computer extends Performer {

    constructor() {
        super();
    }
    onAwake(): void {
        super.onAwake();
        this.owner.on(Player.Event.StateChange, this, this.onStateChange);
    }
    onStart(): void {
        this.owner.event(Player.Event.StateChange);
    }

    onStateChange() {
        let trade = this.player.trade.getComponent(Trade);
        if (this.state == Player.State.Running) {
            this.startRoll();
        } 
        trade.disabled(this.state != Player.State.Running);
    }

    private startRoll() {
        this.owner.event(Player.Event.RollStart, this.owner);
        let trade = this.player.trade.getComponent(Trade);
        trade.roll();
        Laya.timer.once(900, this, this.onRollTimeout);
    }

    private onRollTimeout() {
        this.currentDiceNumber = Math.floor(Math.random()* 6);
        this.player.trade.getComponent(Dice).stop(Laya.Handler.create(this,  this.onRollStop));
    }

    private onRollStop() {
        this.owner.event(Player.Event.RollEnd, [this.currentDiceNumber]);
        this.player.trade.getComponent(Dice).setDiceNumber(this.currentDiceNumber);

        let chesses = this.player.reckonChess(this.currentDiceNumber);
        if (chesses.length > 0) {
            this.owner.event(Player.Event.Choose, [this.owner]);
            this.player.hopChesses(chesses);
            this.player.deduce(this.currentDiceNumber, chesses, Laya.Handler.create(this, (deduceResult:any[])=>{
                Laya.timer.once(500, this, ()=>{
                    this.stopChessDecuce(["kick"], deduceResult);
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