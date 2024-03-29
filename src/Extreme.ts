const { regClass, property } = Laya;
import { Performer } from "./Performer";
import * as Player from "./Player";
import { Chess } from "./Chess";
import { Trade } from "./Trade";
import { Dice } from "./Dice";
import { Route } from "./Route";
import { Room } from "./Room";
import * as SFS2X from "../node_modules/sfs2x-api";
import { Station } from "./Station";

@regClass()
export class Extreme extends Performer {
    private userid:number;

    constructor(userid:number) {
        super();
        this.userid = userid;
    }
    onAwake(): void {
        super.onAwake();
        this.player.level.visible = true;
        this.player.goldSprite.visible = false;
        this.player.trade.getComponent(Trade).props.visible = true;
        this.owner.on(Player.Event.StateChange, this, this.onStateChange);
  
    }

    onStart(): void {
        let trade = this.player.trade.getComponent(Trade);
        trade.avatar.on(Laya.Event.CLICK, this, this.onClickAvatar);
        trade.props.on(Laya.Event.CLICK, this, this.onClickProps);
    }

    onClickProps() {
        let param:any = {
            "userid":this.userid
        };
        Laya.Scene.open("dialog/props.lh", true,param);
    }

    onClickAvatar() {
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
            case Player.Event.UseProps: {
                this.onUseProps(dataObj);
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
                this.player.advance(chesses[i], this.currentDiceNumber,Laya.Handler.create(this,  this.onAdvanceComplete));
                break;
            }
        }
    }

    onGenerateMagic(num:number,type:string) {
        var routeName = Room.getMagicRoute(this.player.color, num);
        let route = this.player.universal.getChildByName(routeName).getComponent(Route);
        console.log(this.player.color + "," + num + "," + routeName + "," + type);
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

    private onRollStop() {
        this.player.trade.getComponent(Dice).setDiceNumber(this.currentDiceNumber);
        let chesses = this.player.reckonChess(this.currentDiceNumber);
        if (chesses.length > 0) {
            this.player.deduce(this.currentDiceNumber, chesses, Laya.Handler.create(this, (deduceResult:any[])=>{
                if (chesses.length == 1) {
                    this.stopChessDecuce(["kick"], deduceResult);
                }  else {
                    this.player.hopChesses(chesses);
                }
            }));
        }
    }
    
    private onUseProps(evtParams: SFS2X.SFSEvent) {
        let prop = evtParams.get("prop");
        let userid = evtParams.get("userid");
        let user = Station.sfs.userManager.getUserByName(userid.toString());
        this.player.showProps(user.id, prop);
    }

}