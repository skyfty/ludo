const { regClass, property,SoundManager } = Laya;
import * as SFS2X from "../node_modules/sfs2x-api";
import { Station } from "./Station";
import { Room } from "./Room";
import { Extreme } from "./Extreme";
import * as Player from "./Player";
import { Config } from "./Config";
import { Profile } from "./Profile";
import { Reward } from "./Reward";
import { Loser } from "./Loser";
import { Trade } from "./Trade";

@regClass()
export class Online extends Laya.Script {
    room: Room;
    param: any;

    constructor(param: any) {
        super();
        this.param = param;
        this.addStationListener();
    }

    onAwake(): void {
        this.room = this.owner.getComponent(Room);
        this.owner.on(Player.Event.Hurl, this, this.onHurl);
        this.owner.on(Player.Event.Achieve, this.room, this.room.onAchieve);
        this.owner.on(Player.Event.Victory, this.room, this.room.onVictory);
        this.owner.on(Player.Event.CountdownStop, this, this.onCountdownStop);
        this.owner.on(Player.Event.Countdown, this, this.onCountdown);
        this.room.chitchat.visible = true;
    }

    
    onCountdown(trade:Trade, reason:string) {
        if (reason == Player.Event.Hurl) {
            trade.startCountdown(Config.TIMEOUT_CHUNK, reason);
        }else if (reason == Player.Event.Choose) {
            trade.startCountdown(Config.TIMEOUT_CHOOSE_CHESS, reason);
        }
    }
    onCountdownStop(trade:Trade) {
        trade.stopCountdown();
    }

    private playerColorFind(colorName: string) {
        let playerIdx = this.room.playerOrder.findIndex((order) => {
            return order.color === colorName;
        });
        return playerIdx != -1;
    }

    onStart(): void {
        let idx = Config.Colors.findIndex((colorName:string)=>{
            return this.playerColorFind(colorName);
        });
        if (idx != -1) {
            this.room.startGame(Config.Colors[idx]);
        }
    }

    onHurl(player:Laya.Sprite) {
        let num = 5;//Math.floor(Math.random() * 6);
;
        player.event(Player.Event.Hurl, num);

        return;
        var params = new SFS2X.SFSObject();
        Station.sfs.send(new SFS2X.ExtensionRequest(Player.Event.Hurl, params));
    }

    onDestroy(): void {
        Station.levelRoom();
        this.removeStationListener();
    }

    private addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.onUserExitRoom, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.LOGOUT, this.onUserExitRoom,this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this.onUserExitRoom, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.OBJECT_MESSAGE, this.onObjectMessage, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.MODERATOR_MESSAGE, this.onModeratorMessage, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, this.onPublicMessage, this);

    }

    private removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.onUserExitRoom, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.LOGOUT, this.onUserExitRoom, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this.onUserExitRoom, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.OBJECT_MESSAGE, this.onObjectMessage, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.MODERATOR_MESSAGE, this.onModeratorMessage, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, this.onPublicMessage, this);
    }


    onPublicMessage(evtParams: SFS2X.SFSEvent) {
        let player = this.room.players[evtParams.sender.id];
        if (player != null) {
            player.getComponent(Player.Player).messageBubble.show(evtParams.message);
        }
    }
  
    private onExtensionResponse(evtParams: SFS2X.SFSEvent) {
        if (Player.Event.Hurl == evtParams.cmd) {
            let num = evtParams.params.get("number");
            let playerid = evtParams.params.get("playerid");
            Laya.timer.once(900, this, ()=>{
                this.room.players[playerid].event(Player.Event.Hurl, num);
            });
        }
    }

    private onWinner(evtParam: SFS2X.SFSEvents) {
        Profile.setGold(evtParam.data.get("amount"));
        let reward = this.room.reward.create() as Laya.Sprite;
        let earn = evtParam.data.get("earn");
        let winPlayerId = evtParam.data.get("winner");
        reward.getComponent(Reward).setEarn(winPlayerId, earn,this.room.numberOfPlayer, this.room.players);
        reward.on(Laya.Event.CLOSE, this, ()=>{
             this.quitRoomGame();
        });
        this.owner.addChild(reward);
    }

    private onLoser(evtParam: SFS2X.SFSEvents) {
        let winPlayerId = evtParam.data.get("winner");
        Profile.setGold(evtParam.data.get("amount"));
        let loser = this.room.loser.create() as Laya.Sprite;
        loser.getComponent(Loser).setEarn(winPlayerId,this.room.numberOfPlayer, this.room.players);
        loser.on(Laya.Event.CLOSE, this, ()=>{
             this.quitRoomGame();
        });
        this.owner.addChild(loser);
    }

    private onModeratorMessage(evtParam: SFS2X.SFSEvents) {
        if (evtParam.message =="Winner") {
            this.onWinner(evtParam);
        }else if (evtParam.message =="Loser") {
            this.onLoser(evtParam);
         }
    }

    private onUserExitRoom(inEvent: SFS2X.SFSEvent) {
        if (!this.room.isVictory) {
            Laya.Scene.open("dialog/exitroom.lh", false, null, Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
                let view = dlg.getChildByName("view");
                view.getChildByName("okay").on(Laya.Event.CLICK, this, ()=>{
                    this.quitRoomGame();
                });
            }));
        }
        this.room.setPlayersToIdle();
        this.removeStationListener();
    }

    private quitRoomGame() {
        Station.levelRoom();
        Laya.Dialog.closeAll();
        Laya.Scene.open("menu.ls");
    }

    private onObjectMessage(evtParams: SFS2X.SFSEvent) {
        var dataObj:SFS2X.SFSObject  = evtParams.message;
        switch (dataObj.get("event")) {
            case Player.Event.Achieve: {
                this.room.onAchieve();
                break;
            }
            case Player.Event.Victory: {
                this.room.onVictory();
                break;
            }
            default: {
                let player = this.room.players[evtParams.sender.id];
                if (player != null) {
                    player.getComponent(Extreme).processEvent(dataObj);
                }
            }
        }
    }
}