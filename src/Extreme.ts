const { regClass, property } = Laya;
import { Performer } from "./Performer";
import * as Player from "./Player";
import { Chess } from "./Chess";
import { Trade } from "./Trade";
import { Dice } from "./Dice";
import { Route } from "./Route";
import { Room } from "./Room";
import * as SFS2X from "../node_modules/sfs2x-api";

@regClass()
export class Extreme extends Performer {
    private userid:number;

    constructor(userid:number) {
        super();
        this.userid = userid;
    }
    onAwake(): void {
        super.onAwake();
        this.owner.on(Player.Event.StateChange, this, this.onStateChange);
    }

    onStart(): void {
        this.player.trade.on(Laya.Event.CLICK, this, this.onClickTrade);
    }

    onClickTrade() {
        let param:any = {
            "userid":this.userid
        };
        Laya.Scene.open("dialog/buddyinfo.lh", true,param);
    }

    onStateChange() {
        let trade = this.player.trade.getComponent(Trade);
        if (this.state == Player.State.Running) {
            this.player.defend(false);
        }
        trade.disabled(this.state != Player.State.Running);
    }

    public processEvent(dataObj:SFS2X.SFSObject) {
        switch (dataObj.get("event")) {
            case Player.Event.RollStart: {
                this.player.trade.getComponent(Dice).roll();
                break;
            }
            case Player.Event.RollEnd: {
                this.currentDiceNumber = dataObj.get("num");
                this.player.trade.getComponent(Dice).stop(Laya.Handler.create(this,  this.onRollStop));
                break;
            }
            case Player.Event.Choose: {
                this.onChooseChesses(dataObj.get("name"));
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
            case Player.Event.Rocket: {
                this.onRocket(dataObj.get("name"), dataObj.get("num"));
                break;
            }
            case Player.Event.GenerateMagic: {
                this.onGenerateMagic(dataObj.get("num"), dataObj.get("type"));
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

    onGenerateMagic(num:number,type:string) {
        let route = this.player.universal.getChildByName(Room.getMagicRoute(this.player.color, num)).getComponent(Route);
        route.setMagic({name:type});
    }

    private onRocket(name:string, rand:number) {
        let chess = this.player.getChessInChippy(name);
        this.player.rocket(chess, rand, Laya.Handler.create(this,  this.onAdvanceComplete));
    }

    private onAdvanceComplete(node:Laya.Sprite) {
        let chess = node.getComponent(Chess);
        let route = chess.hole.getComponent(Route);
        if (route.magic != null) {
            route.setMagic(null);
        }
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