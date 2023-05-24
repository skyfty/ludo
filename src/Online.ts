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
    }

    onAwake(): void {
        this.room = this.owner.getComponent(Room);
    }

    onDestroy(): void {
        this.station.levelRoom();
        this.station.sfs.removeEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, this.onPublicMessage);

    }
    private onPublicMessage(inEvent: SFS2X.SFSEvent) {
        if (inEvent.sender.isItMe) {
            return;
        }
        let event = JSON.parse( inEvent.message);
        let player = this.room.players[inEvent.sender.id];
        if (player != null) {
            player.getComponent(Extreme).processEvent(event);
        }
    }
}