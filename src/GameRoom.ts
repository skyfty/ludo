const { regClass, property } = Laya;
import { Parallel } from "./Parallel";
import {Station} from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";

@regClass()
export class GameRoom extends Laya.Script {
    protected colorIdx: number = -1;

    constructor() {
        super();
    }

    onAwake(): void {
        this.addStationListener();
    }
    
    onDestroy(): void {
        this.removeStationListener();
    }

    public addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_ADD, this.onRoomCreated, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, this.onRoomCreationError, this);

    }
    public removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_ADD, this.onRoomCreated, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, this.onRoomCreationError, this);
    }

    onRoomCreated(evtParams: SFS2X.SFSEvent)
    {
        console.log("Room created: " + evtParams.room);
    }

    onRoomCreationError(evtParams: SFS2X.SFSEvent)
    {
        console.log("Room creation failed: " + evtParams.errorMessage);
    }


    protected getRoomInitVariable(isPrivate:boolean) {
        var roomVars = [];
        roomVars.push(new SFS2X.SFSRoomVariable("red", -1));
        roomVars.push(new SFS2X.SFSRoomVariable("green", -1));
        roomVars.push(new SFS2X.SFSRoomVariable("blue", -1));
        roomVars.push(new SFS2X.SFSRoomVariable("yellow", -1));
        roomVars.push(new SFS2X.SFSRoomVariable("private", isPrivate));
        return roomVars;
    }

    protected getRoomSettings(maxUsers:number) {
        var settings = new SFS2X.SFSGameSettings(Station.sfs.mySelf.name + "'s game");
        settings.isPublic = true;
        settings.isGame = true;
        settings.maxVariables = 50;
        settings.maxUsers = maxUsers;
        settings.minPlayersToStartGame = maxUsers;
        settings.leaveLastJoinedRoom = true;
        settings.notifyGameStarted = true;

        return settings;
    }

}