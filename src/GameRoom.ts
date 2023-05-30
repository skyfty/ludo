const { regClass, property } = Laya;
import { Parallel } from "./Parallel";
import { Config } from "./Config";
import {Station} from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";

@regClass()
export class GameRoom extends Laya.Script {
    protected colorIdx: number = -1;

    constructor() {
        super();
    }

    onAwake(): void {
        let parallel = this.owner.getComponent(Parallel);
        parallel.play.disabled = true;

        parallel.closeBtn.on(Laya.Event.CLICK, this, () => {
            Laya.Dialog.closeAll();
        });

        for (let idx in parallel.colorCheckBox) {
            parallel.colorCheckBox[idx].on(Laya.Event.CLICK, this, () => {
                parallel.play.disabled = false;
                this.colorIdx = Number.parseInt(idx);
            });
        }
    }
    
    onStart(): void {
        this.addStationListener();
    }

    onDestroy(): void {
        this.removeStationListener();
    }

    addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_ADD, this.onRoomCreated, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, this.onRoomCreationError, this);

    }
    removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);
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

    private onRoomJoin(event: SFS2X.SFSEvent) {
        Laya.Dialog.closeAll();
        Laya.Scene.open("partner.ls", true,{"color":Config.Colors[this.colorIdx]});
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