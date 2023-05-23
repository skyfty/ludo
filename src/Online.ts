const { regClass, property } = Laya;
import * as SFS2X from "../node_modules/sfs2x-api";
import * as Station from "./Station";
import { Room } from "./Room";
import { Extreme } from "./Extreme";

@regClass()
export class Online extends Laya.Script {
    station: Station.Station = null;
    room: Room;

    constructor(st: Station.Station) {
        super();
        this.station = st;
        this.station.sfs.addEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, this.onPublicMessage, this);
        // this.station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_VARIABLES_UPDATE, this.onRoomVariablesUpdate, this);
        // this.station.sfs.addEventListener(SFS2X.SFSEvent.USER_VARIABLES_UPDATE, this.onUserVariablesUpdate, this);
    }

    onAwake(): void {
        this.room = this.owner.getComponent(Room);
    }

    private onPublicMessage(inEvent: SFS2X.SFSEvent) {
        console.log(inEvent);

        if (inEvent.sender.isItMe) {
            return;
        }
        let event = JSON.parse( inEvent.message);

        let player = this.room.players[inEvent.sender.id];
        if (player != null) {
            player.getComponent(Extreme).processEvent(event);
        }

        // var sender = (event.sender.isItMe ? "You" : event.sender.name);
        // var nick = event.sender.getVariable("nick");
        // var aka = (!event.sender.isItMe && nick != null ? " (aka '" + nick.value + "')" : "");
        // writeToChatArea("<b>" + sender + aka + " said:</b><br/>" + event.message);
    }

    private onRoomVariablesUpdate(event: SFS2X.SFSEvent) {
        console.log(event);

        // Check if the 'topic' variable was set/updated
        // if (event.changedVars.indexOf("topic") > -1)
        // {
        // 	var deleted = !event.room.containsVariable("topic");
        // 	showRoomTopic(event.room, deleted);
        // }
    }



    // private onEventResponse(inEvent: SFS2X.SFSEvent) {
    //     let player = this.room.players[inEvent.user.id];
    //     if (player != null) {
    //         player.getComponent(Extreme).processEvent(inEvent);
    //     }
    // }

    // private onUserVariablesUpdate(inEvent: SFS2X.SFSEvent) {
    //     if (inEvent.user.isItMe) {
    //         return;
    //     }
    //     if (inEvent.changedVars.indexOf("event") > -1) {
    //         this.onEventResponse(inEvent);
    //     }
    // }
}