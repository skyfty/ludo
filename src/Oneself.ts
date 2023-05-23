const { regClass, property } = Laya;
import { Chess } from "./Chess";
import { Performer } from "./Performer";
import * as Player from "./Player";

@regClass()
export class Oneself extends Performer {
    private isAdvanceing = false;

    constructor() {
        super();
    }
    /**
     * 第一次执行update之前执行，只会执行一次
     */
    onStart(): void {
        this.player.trade.on(Laya.Event.CLICK, this, this.onClickTrade);
    }


    onClickTrade() {
        if (this.state != Player.State.Running || this.isAdvanceing) {
            return;
        }

        this.isAdvanceing = true;
        this.owner.event(Player.Event.RollStart, this.owner);
        this.player.startRoll();
        Laya.timer.once(600, this, this.onRollTimeout);
    }

    private onRollTimeout() {
        this.currentDiceNumber = Math.floor(Math.random()* 6);
        this.player.stopRoll(Laya.Handler.create(this,  this.onRollStop));
    }

    private onRollStop() {
        this.owner.event(Player.Event.RollEnd, [this.currentDiceNumber]);
        this.player.setDiceNumber(this.currentDiceNumber);
        let chesses = this.player.reckonChess(this.currentDiceNumber);
        if (chesses.length > 0) {
            this.player.deduce(this.currentDiceNumber, chesses, Laya.Handler.create(this, ()=>{
                this.onReckonChessComplete(chesses, Laya.Handler.create(this,  this.onChooseChessesComplete));
            }));
        } else {
            this.isAdvanceing = false;
            this.owner.event(Player.Event.Achieve);
        }
    }

    private onChooseChessesComplete(chess:Laya.Sprite) {
        this.owner.event(Player.Event.Choose, [chess.name]);
        this.player.advance(chess, this.currentDiceNumber,Laya.Handler.create(this,  this.onAdvanceComplete));
    }

    private onAdvanceComplete(node:Laya.Sprite) {
        this.isAdvanceing = false;
        let chess = node.getComponent(Chess);
        if (chess.hole == this.player.entry) {
            return;
        }
        this.owner.event(Player.Event.Achieve);
        if (this.player.isAllHome()) {
            this.owner.event(Player.Event.Victory);
        }
    }

    private onReckonMultiChessComplete(chesses:Laya.Sprite[], complete: Laya.Handler) {
        let o:any = "chooseChess";
        for(let i = 0; i < chesses.length; ++i) {
            chesses[i].on(Laya.Event.CLICK, o, ()=>{
                this.player.stopChesses(chesses);
                for(let i = 0; i < chesses.length; ++i) {
                    chesses[i].offAllCaller(o);
                }
                complete.runWith(chesses[i]);
            });
        }
        this.player.hopChesses(chesses);
    }

    private onReckonChessComplete(chesses:Laya.Sprite[], complete: Laya.Handler) {
        if (chesses.length == 1) {
            complete.runWith(chesses[0]);
        } else {
           this.onReckonMultiChessComplete(chesses, complete);
        }
    }

    onDestroy(): void {
        this.player.trade.offAllCaller(this);
    }
}