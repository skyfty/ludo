const { regClass, property } = Laya;
import { Chess } from "./Chess";
import { Performer } from "./Performer";
import * as Player from "./Player";
import { Trade } from "./Trade";
import { Dice } from "./Dice";
import { Route } from "./Route";

@regClass()
export class Oneself extends Performer {
    private isAdvanceing = false;
    private dicecount:number[] = [];

    constructor() {
        super();
    }

    onAwake(): void {
        super.onAwake();
        this.player.level.visible = true;
        this.player.goldSprite.visible = true;
        this.owner.on(Player.Event.StateChange, this, this.onStateChange);
        this.owner.on(Player.Event.Hurl, this, this.onHurl);
    }

    onStart(): void {
        this.player.trade.on(Laya.Event.CLICK, this, this.onClickTrade);
        this.player.trade.on(Player.Event.CountdownStop, this, this.onCountdownStop);
        this.player.trade.on(Player.Event.Rocket, this, this.onRocket);


    }

    onRocket(reason: string) {
        
    }

    onCountdownStop(reason: string) {
        if (reason == Player.Event.Hurl) {
            this.player.trade.event(Laya.Event.CLICK);
        } else {
            this.infer(this.currentDiceNumber, Laya.Handler.create(this, (chesses: any[], complete: Laya.Handler) => {
                this.player.stopChesses(chesses);
                complete.runWith(chesses[0]);
            }));
        }
    }

    onStateChange(state: Player.State) {
        let trade = this.player.trade.getComponent(Trade);
        if (this.state != Player.State.Running) {
            trade.stop();
        } else {
            this.player.room.owner.event(Player.Event.Countdown, [trade, Player.Event.Hurl])
            trade.becareful();
            this.player.defend(false);
        }
        trade.disabled(this.state != Player.State.Running);
    }

    onHurl(num: number) {
        if (num == 5) {
            this.dicecount.push(num);
        }
        this.currentDiceNumber = num;
        this.player.trade.getComponent(Dice).stop(Laya.Handler.create(this, this.onRollStop));
    }

    onClickTrade() {
        if (this.state != Player.State.Running || this.isAdvanceing) {
            return;
        }
        this.isAdvanceing = true;
        this.owner.event(Player.Event.RollStart, this.owner);
        let trade = this.player.trade.getComponent(Trade);
        trade.stop();
        this.player.room.owner.event(Player.Event.CountdownStop, [trade])

        Laya.timer.once(100, this, () => {
            trade.roll();
            this.player.room.owner.event(Player.Event.Hurl, [this.owner])
        });
    }

    private onRollStop() {
        this.owner.event(Player.Event.RollEnd, [this.currentDiceNumber]);
        this.player.trade.getComponent(Dice).setDiceNumber(this.currentDiceNumber);
        this.infer(this.currentDiceNumber, Laya.Handler.create(this, (chesses: any[], complete: Laya.Handler) => {
            this.onReckonChessComplete(chesses, complete);
        }));
    }

    private infer(diceNumber: number, complete: Laya.Handler) {
        let chesses = this.player.reckonChess(diceNumber);
        if (chesses.length > 0) {
            this.player.deduce(diceNumber, chesses, Laya.Handler.create(this, (deduceResult: any[]) => {
                complete.runWith([chesses, Laya.Handler.create(this, (chess: Laya.Sprite) => {
                    this.stopChessDecuce(["kick"], deduceResult);
                    this.onChooseChessesComplete(chess);
                })]);
            }));
        } else {
            this.isAdvanceing = false;
            this.owner.event(Player.Event.Achieve);
        }
    }

    private onChooseChessesComplete(chess: Laya.Sprite) {
        this.owner.event(Player.Event.Choose, [chess.name]);
        this.player.advance(chess, this.currentDiceNumber, Laya.Handler.create(this, this.onAdvanceComplete));
    }

    private rocket(node: Laya.Sprite) {
        let num = Math.floor(Math.random() * 6) + 1;
        this.owner.event(Player.Event.Rocket,[node.name, num]);
        this.player.rocket(node, num, Laya.Handler.create(this, this.onAdvanceComplete));
    }

    private onAdvanceComplete(node: Laya.Sprite) {
        this.isAdvanceing = false;
        let chess = node.getComponent(Chess);
        if (this.player.isAllHome()) {
            this.owner.event(Player.Event.Victory, [this.owner]);
        } else {
            let route = chess.hole.getComponent(Route);
            let trade = this.player.trade.getComponent(Trade);
            let isPlusMagic = false;
            if (route.magic != null) {
                switch(route.magic.name) {
                    case "rocket": {
                        this.player.generateMagic(route.magic.name);
                        route.setMagic(null);
                        Laya.SoundManager.playSound("sounds/sou.mp3", 1);
                        return this.rocket(node);
                    }
                    case "plus": {
                        isPlusMagic = true;
                        this.player.generateMagic(route.magic.name);
                        route.setMagic(null);
                        this.player.plusAni(chess.hole);
                        Laya.SoundManager.playSound("sounds/plus.mp3", 1);
                        break;
                    }
                }
            }
            if (chess.hole == this.player.entry || isPlusMagic) {
                trade.becareful();
                this.player.room.owner.event(Player.Event.Countdown, [trade,Player.Event.Hurl])
            } else {
                this.owner.event(Player.Event.Achieve);
            }
        }
    }


    private onReckonMultiChessComplete(chesses: Laya.Sprite[], complete: Laya.Handler) {
        let trade = this.player.trade.getComponent(Trade);
        let chooseChess: any = Player.Event.Choose;
        for (let i = 0; i < chesses.length; ++i) {
            chesses[i].on(Laya.Event.CLICK, chooseChess, () => {
                this.player.stopChesses(chesses);
                trade.stopCountdown();
                for (let i = 0; i < chesses.length; ++i) {
                    chesses[i].offAllCaller(chooseChess);
                }
                complete.runWith(chesses[i]);
            });
        }
        this.player.hopChesses(chesses);
        this.player.room.owner.event(Player.Event.Countdown, [trade, chooseChess])
    }

    private onReckonChessComplete(chesses: Laya.Sprite[], complete: Laya.Handler) {
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