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
        Station.sfs.addEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, this.onPublicMessage, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.onUserExitRoom, this);
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
        Station.sfs.removeEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, this.onPublicMessage);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.onUserExitRoom, this.onUserExitRoom);
    }

    private onUserExitRoom(inEvent: SFS2X.SFSEvent) {
        Laya.Scene.open("menu.ls");
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