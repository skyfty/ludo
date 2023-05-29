const { regClass, property,SoundManager } = Laya;
import * as SFS2X from "../node_modules/sfs2x-api";
import { Station } from "./Station";
import { Room } from "./Room";
import { Extreme } from "./Extreme";
import * as Player from "./Player";
import { Performer } from "./Performer";
import { Config } from "./Config";

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
        var params = new SFS2X.SFSObject();
        Station.sfs.send(new SFS2X.ExtensionRequest(Player.Event.Hurl, params));
    }

    onHurlResponse(evtParams: SFS2X.SFSEvent) {
        let num = evtParams.params.get("Number");
        let playerId = evtParams.params.get("UserId");
        let player = this.room.players[playerId];
        Laya.timer.once(900, this, ()=>{
            player.event(Player.Event.Chuck, num);
        });
    }

    onDestroy(): void {
        Station.levelRoom();
        this.removeStationListener();
    }

    private addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, this.onPublicMessage, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.onUserExitRoom, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse,  this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.LOGOUT, this.onUserExitRoom,this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this.onUserExitRoom, this);
    }

    private removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, this.onPublicMessage, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.onUserExitRoom, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.LOGOUT, this.onUserExitRoom, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this.onUserExitRoom, this);
    }

    private onExtensionResponse(evtParams: SFS2X.SFSEvent) {
        if (evtParams.cmd == Player.Event.Hurl) {
            this.onHurlResponse(evtParams);
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

    private onPublicMessage(inEvent: SFS2X.SFSEvent) {
        let event = JSON.parse(inEvent.message);
        switch (event.event) {
            case Player.Event.Achieve: {
                this.room.onAchieve();
                break;
            }
            case Player.Event.Victory: {
                this.room.onVictory();
                break;
            }
            default: {
                if (!inEvent.sender.isItMe) {
                    let player = this.room.players[inEvent.sender.id];
                    if (player != null) {
                        player.getComponent(Extreme).processEvent(event);
                    }
                }
            }
        }
    }
}