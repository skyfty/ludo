const { regClass, property } = Laya;
import { GameRoom } from "./GameRoom";
import { Parallel } from "./Parallel";
import { Config } from "./Config";
import * as SFS2X from "../node_modules/sfs2x-api";
import { Station } from "./Station";

@regClass()
export class CreateRoom extends GameRoom {

    constructor() {
        super();
    }

    onAwake(): void {
        super.onAwake();
        let parallel = this.owner.getComponent(Parallel);
        parallel.viewStack.selectedIndex = 0;

        let play = parallel.viewStack.getChildByName("item0") as Laya.Button;
        play.on(Laya.Event.CLICK, this, this.onCreateRoom);
    }

    protected addStationListener() {
        super.addStationListener();
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);

    }
    protected removeStationListener() {
        super.removeStationListener();
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);
    }

    private onRoomJoin(event: SFS2X.SFSEvent) {
        Laya.Dialog.closeAll();
        Laya.Scene.open("partner.ls", true,{"color":Config.Colors[this.colorIdx]});
    }
    
    onCreateRoom() {
        let parallel = this.owner.getComponent(Parallel) as Parallel;
        var roomVars = this.getRoomInitVariable(true);
        var settings = this.getRoomSettings(parallel.numberOfPlayer);
        settings.variables = roomVars;
        Station.sfs.send(new SFS2X.CreateSFSGameRequest(settings));
    }
}