const { regClass, property } = Laya;
import { GameRoom } from "./GameRoom";
import { Parallel } from "./Parallel";
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
        parallel.play.on(Laya.Event.CLICK, this, this.onCreateRoom);
    }

    onCreateRoom() {
        let parallel = this.owner.getComponent(Parallel) as Parallel;
        var roomVars = this.getRoomInitVariable(true);
        var settings = this.getRoomSettings(parallel.numberOfPlayer);
        settings.variables = roomVars;
        Station.sfs.send(new SFS2X.CreateSFSGameRequest(settings));
    }
}