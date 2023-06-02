const { regClass, property,SoundManager } = Laya;
import * as SFS2X from "../node_modules/sfs2x-api";
import { Station } from "./Station";
import { Room } from "./Room";
import { Extreme } from "./Extreme";
import * as Player from "./Player";
import { Config } from "./Config";
import { Profile } from "./Profile";

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
        player.event(Player.Event.Chuck, 5);

        // var params = new SFS2X.SFSObject();
        // Station.sfs.send(new SFS2X.ExtensionRequest("Hurl", params));
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

    }

    private removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.onUserExitRoom, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.LOGOUT, this.onUserExitRoom, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this.onUserExitRoom, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.OBJECT_MESSAGE, this.onObjectMessage, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.MODERATOR_MESSAGE, this.onModeratorMessage, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
    }

  
    private onExtensionResponse(evtParams: SFS2X.SFSEvent) {
        if ("Hurl" == evtParams.cmd) {
            let num = evtParams.params.get("number");
            let playerid = evtParams.params.get("playerid");
            Laya.timer.once(900, this, ()=>{
                this.room.players[playerid].event(Player.Event.Chuck, num);
            });
        }
    }

    private onModeratorMessage(evtParam: SFS2X.SFSEvents) {
        if (evtParam.message =="Winner") {
           var earn = evtParam.data.get("earn");
           Profile.setGold(evtParam.data.get("amount"));
        }else if (evtParam.message =="Loser") {
            var pay = evtParam.data.get("pay");
            Profile.setGold(evtParam.data.get("amount"));
         }
    }

    private onUserExitRoom(inEvent: SFS2X.SFSEvent) {
        Laya.Scene.open("dialog/exitroom.lh", false, null, Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
            let view = dlg.getChildByName("view");
            view.getChildByName("okay").on(Laya.Event.CLICK, this, ()=>{
                Laya.Dialog.closeAll();
                Laya.Scene.open("menu.ls");
            });
        }));
        this.room.setPlayersToIdle();
        this.removeStationListener();
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