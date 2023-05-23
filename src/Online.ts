const { regClass, property } = Laya;
import * as SFS2X from "../node_modules/sfs2x-api";
import * as Station from "./Station";
import * as Player from "./Player";

@regClass()
export class Online extends Laya.Script {
    station:Station.Station = null;

    constructor(st:Station.Station) {
        super();
        this.station = st;
        this.station.sfs.addEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, this.onPublicMessage, this);
        this.station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_VARIABLES_UPDATE, this.onRoomVariablesUpdate, this);
        this.station.sfs.addEventListener(SFS2X.SFSEvent.USER_VARIABLES_UPDATE, this.onUserVariablesUpdate, this);
    }

    onStart(): void {

    }

    private onPublicMessage(event: SFS2X.SFSEvent) {
        console.log(event);
        var userVar = new SFS2X.SFSUserVariable("nick", 23);

        // var isSent = this.sfs.send(new SFS2X.SetUserVariablesRequest([userVar]));
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

    private onUserVariablesUpdate(event: SFS2X.SFSEvent) {
        console.log(event);

        // Check if the 'nick' variable was set/updated
        // if (event.changedVars.indexOf("nick") > -1)
        // {
        // 	// For code simplicity we rebuild the full userlist instead of just editing the specific item
        // 	populateUsersList();
        // }
    }
}