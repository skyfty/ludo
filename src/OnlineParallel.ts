const { regClass, property } = Laya;
import { GameRoom } from "./GameRoom";
import { Parallel } from "./Parallel"
import * as SFS2X from "../node_modules/sfs2x-api";
import { Station } from "./Station";
import { Config } from "./Config";

@regClass()
export class OnlineParallel extends GameRoom {
    constructor() {
        super();
    }

    onAwake(): void {
        super.onAwake();
        let parallel = this.owner.getComponent(Parallel);
        parallel.play.on(Laya.Event.CLICK, this, this.onPlay);
    }

    onPlay() {
        let parallel = this.owner.getComponent(Parallel) as Parallel;
        
        var roomVars = this.getRoomInitVariable(false);
        var settings = this.getRoomSettings(parallel.numberOfPlayer);
        settings.variables = roomVars;

        var exp = new SFS2X.MatchExpression(SFS2X.RoomProperties.IS_GAME, SFS2X.BoolMatch.EQUALS, true)
        .and(SFS2X.RoomProperties.HAS_FREE_PLAYER_SLOTS, SFS2X.BoolMatch.EQUALS, true)
        .and(SFS2X.RoomProperties.MAX_USERS, SFS2X.NumberMatch.EQUALS, parallel.numberOfPlayer)
        .and("private", SFS2X.BoolMatch.EQUALS, false)
        .and(Config.Colors[this.colorIdx], SFS2X.NumberMatch.EQUALS, -1);

        Station.sfs.send(new SFS2X.QuickJoinOrCreateRoomRequest(exp, ["default"], settings, Station.sfs.lastJoinedRoom));
    }
}