const { regClass, property } = Laya;
import { Chess } from "./Chess";
import { Performer } from "./Performer";
import * as Player from "./Player";
import { Trade } from "./Trade";
import { Dice } from "./Dice";

@regClass()
export class Oneself extends Performer {
    private isAdvanceing = false;

    constructor() {
        super();
    }

    onAwake(): void {
        super.onAwake();
        this.owner.on(Player.Event.StateChange, this, this.onStateChange);
        this.owner.on(Player.Event.Chuck, this, this.onChuck);
    }
    /**
     * 第一次执行update之前执行，只会执行一次
     */
    onStart(): void {
        this.player.trade.on(Laya.Event.CLICK, this, this.onClickTrade);
    }

    onStateChange(state:Player.State) {
        let trade = this.player.trade.getComponent(Trade);
        if (this.state != Player.State.Running) {
            trade.stop();
        } else {
            trade.becareful();
        }
        trade.disabled(this.state != Player.State.Running);
    }
    
    onChuck(num:number) {
        this.currentDiceNumber = num;
        this.player.trade.getComponent(Dice).stop(Laya.Handler.create(this,  this.onRollStop));
    }

    onClickTrade() {
        if (this.state != Player.State.Running || this.isAdvanceing) {
            return;
        }
        this.isAdvanceing = true;
        this.owner.event(Player.Event.RollStart, this.owner);
        let trade = this.player.trade.getComponent(Trade);
        trade.stop();
        Laya.timer.once(100, this, ()=>{
            trade.roll();
            this.player.room.owner.event(Player.Event.Hurl, [this.owner])
        });
    }

    private onRollStop() {
        this.owner.event(Player.Event.RollEnd, [this.currentDiceNumber]);
        this.player.trade.getComponent(Dice).setDiceNumber(this.currentDiceNumber);

        let chesses = this.player.reckonChess(this.currentDiceNumber);
        if (chesses.length > 0) {
            this.player.deduce(this.currentDiceNumber, chesses, Laya.Handler.create(this, (deduceResult:any[])=>{
                this.onReckonChessComplete(chesses, Laya.Handler.create(this,  (chess:Laya.Sprite)=>{
                    this.stopChessDecuce(["kick"], deduceResult);
                    this.onChooseChessesComplete(chess);
                }));
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
        if (this.player.isAllHome()) {            
            this.owner.event(Player.Event.Victory);
        } else {
            if (chess.hole == this.player.entry) {
                this.player.trade.getComponent(Trade).becareful();
            } else {
                this.owner.event(Player.Event.Achieve);
            }
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