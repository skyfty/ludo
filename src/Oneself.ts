const { regClass, property } = Laya;
import { Performer } from "./Performer";
import { Chess } from "./Chess";

@regClass()
export class Oneself extends Performer {

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
        this.player.startRoll();
        Laya.timer.once(100, this, this.onRollTimeout);
    }

    private onRollTimeout() {
        this.currentDiceNumber = 5;// Math.floor(Math.random()* 6);
        this.player.stopRoll(Laya.Handler.create(this,  this.onRollStop));
    }

    private onRollStop() {
        this.player.setDiceNumber(this.currentDiceNumber);
        this.reckonChess(this.currentDiceNumber, Laya.Handler.create(this,  (chesses:Laya.Sprite[])=>{
            if (chesses == null) {
                
            } else {
                this.onReckonChessComplete(chesses, Laya.Handler.create(this,  this.onChooseChessesComplete));
            }
        }));
    }

    private onChooseChessesComplete(chess:Laya.Sprite) {
        this.advance(chess, this.currentDiceNumber, Laya.Handler.create(this, this.onAdvanceComplete));
    }

    private onAdvanceComplete(chess:Laya.Sprite) {

    }

    private onReckonChessComplete(chesses:Laya.Sprite[], complete: Laya.Handler) {
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

    onDestroy(): void {
        this.player.trade.offAllCaller(this);
    }
}