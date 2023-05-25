const { regClass, property } = Laya;
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
        this.addSmartFoxListener();
    }

    onAwake(): void {
        this.room = this.owner.getComponent(Room);
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

    onDestroy(): void {
        Station.levelRoom();
        this.removeSmartFoxListener();
    }

    private addSmartFoxListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, this.onPublicMessage, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.onUserExitRoom, this);
    }

    private removeSmartFoxListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, this.onPublicMessage);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.onUserExitRoom);
    }

    private onUserExitRoom(inEvent: SFS2X.SFSEvent) {
        Laya.Scene.open("dialog/exitroom.lh", false, null, Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
            let view = dlg.getChildByName("view");
            view.getChildByName("okay").on(Laya.Event.CLICK, this, ()=>{
                dlg.close();
                Laya.Scene.open("menu.ls");
            });
        }));
        this.removeSmartFoxListener();
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