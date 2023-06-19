const { regClass, property } = Laya;
import { Performer } from "./Performer";
import * as Player from "./Player";
import { Chess } from "./Chess";
import { Trade } from "./Trade";
import { Dice } from "./Dice";
import { Route } from "./Route";

@regClass()
export class Computer extends Performer {

    constructor() {
        super();
    }
    onAwake(): void {
        super.onAwake();
        this.owner.on(Player.Event.StateChange, this, this.onStateChange);
        this.owner.on(Player.Event.Hurl, this, this.onHurl);
    }
    onStart(): void {
    }

    onStateChange() {
        let trade = this.player.trade.getComponent(Trade);
        if (this.state == Player.State.Running) {
            this.startRoll();
            this.player.defend(false);
        } else {
            trade.stop();
        }
        trade.disabled(this.state != Player.State.Running);
    }

    private startRoll() {
        this.owner.event(Player.Event.RollStart, this.owner);
        let trade = this.player.trade.getComponent(Trade);
        trade.roll();
        this.player.room.owner.event(Player.Event.Hurl, [this.owner])
    }

    onHurl(num: number) {
        this.currentDiceNumber = num;
        this.player.trade.getComponent(Dice).stop(Laya.Handler.create(this, this.onRollStop));
    }

    private onRollStop() {
        this.owner.event(Player.Event.RollEnd, [this.currentDiceNumber]);
        this.player.trade.getComponent(Dice).setDiceNumber(this.currentDiceNumber);

        let chesses = this.player.reckonChess(this.currentDiceNumber);
        if (chesses.length > 0) {
            this.owner.event(Player.Event.Choose, [this.owner]);
            this.player.hopChesses(chesses);
            this.player.deduce(this.currentDiceNumber, chesses, Laya.Handler.create(this, (deduceResult: any[]) => {
                Laya.timer.once(500, this, () => {
                    this.stopChessDecuce(["kick"], deduceResult);
                    this.player.stopChesses(chesses);
                    this.player.advance(deduceResult[0].chess, this.currentDiceNumber, Laya.Handler.create(this, this.onAdvanceComplete));
                });
            }));
        } else {
            this.owner.event(Player.Event.Achieve, null);
        }
    }

    private rocket(node: Laya.Sprite) {
        let num = Math.floor(Math.random() * 6) + 1;
        this.player.rocket(node, num, Laya.Handler.create(this, this.onAdvanceComplete));
    }

    private onAdvanceComplete(node: Laya.Sprite) {
        let chess = node.getComponent(Chess);
        let route = chess.hole.getComponent(Route);
        let isPlusMagic = false;
        if (route.magic != null) {
            switch (route.magic.name) {
                case "rocket": {
                    this.player.generateMagic(route.magic.name);
                    route.setMagic(null);
                    return this.rocket(node);
                }
                case "plus": {
                    isPlusMagic = true;
                    this.player.generateMagic(route.magic.name);
                    route.setMagic(null);
                    this.player.plusAni(chess.hole);
                    break;
                }
            }
        }

        if (chess.hole == this.player.entry || isPlusMagic) {
            this.startRoll();
        } else {
            this.owner.event(Player.Event.Achieve, node);
            if (this.player.isAllHome()) {
                this.owner.event(Player.Event.Victory, [this.owner]);
            }
        }
    }
}