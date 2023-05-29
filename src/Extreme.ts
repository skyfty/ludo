const { regClass, property } = Laya;
import { Performer } from "./Performer";
import * as Player from "./Player";
import { Chess } from "./Chess";
import { Trade } from "./Trade";
import { Dice } from "./Dice";

@regClass()
export class Extreme extends Performer {
    constructor() {
        super();
    }
    onAwake(): void {
        super.onAwake();
        this.owner.on(Player.Event.StateChange, this, this.onStateChange);
    }

    onStart(): void {
    }

    onStateChange() {
        let trade = this.player.trade.getComponent(Trade);
        trade.disabled(this.state != Player.State.Running);
    }

    public processEvent(inEvent:any) {
        switch (inEvent.event) {
            case Player.Event.RollStart: {
                this.player.trade.getComponent(Dice).roll();
                break;
            }
            case Player.Event.RollEnd: {
                this.currentDiceNumber = inEvent.num;
                this.player.trade.getComponent(Dice).stop(Laya.Handler.create(this,  this.onRollStop));
                break;
            }
            case Player.Event.Choose: {
                this.onChooseChesses(inEvent.name);
                break;
            }
            case Player.Event.Achieve: {
                this.owner.event(Player.Event.Achieve);
                break;
            }
            case Player.Event.Victory: {
                this.owner.event(Player.Event.Victory);
                break;
            }
        }
    }

    private onChooseChesses(name:string) {
        let chesses = this.player.reckonChess(this.currentDiceNumber);
        this.player.stopChesses(chesses);
        this.player.deduce(this.currentDiceNumber, chesses, Laya.Handler.create(this, (deduceResult:any[])=>{
            this.stopChessDecuce(["kick"], deduceResult);
        }));
        for(let i = 0; i < chesses.length; ++i) {
            if(name ==  chesses[i].name) {
                this.onChooseChessesComplete(chesses[i]);
                break;
            }
        }
    }

    private onAdvanceComplete(node:Laya.Sprite) {
        let chess = node.getComponent(Chess);
    }

    private onChooseChessesComplete(chess:Laya.Sprite) {
        this.player.advance(chess, this.currentDiceNumber,Laya.Handler.create(this,  this.onAdvanceComplete));
    }

    private onRollStop() {
        this.player.trade.getComponent(Dice).setDiceNumber(this.currentDiceNumber);
        let chesses = this.player.reckonChess(this.currentDiceNumber);
        if (chesses.length > 0) {
            this.player.deduce(this.currentDiceNumber, chesses, Laya.Handler.create(this, (deduceResult:any[])=>{
                if (chesses.length == 1) {
                    this.stopChessDecuce(["kick"], deduceResult);
                } 
                this.onReckonChessComplete(chesses, Laya.Handler.create(this,  this.onChooseChessesComplete));
            }));
        }
    }

    private onReckonChessComplete(chesses:Laya.Sprite[], complete: Laya.Handler) {
        if (chesses.length == 1) {
            complete.runWith(chesses[0]);
        } else {
            this.player.hopChesses(chesses);
        }
    }
}