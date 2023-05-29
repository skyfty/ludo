const { regClass, property } = Laya;
import { Parallel } from "./Parallel";
import { Config } from "./Config";
import {Station} from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";

@regClass()
export class CreateRoom extends Laya.Script {
    private colorIdx: number = -1;

    @property(Laya.Dialog)
    public dialog: Laya.Dialog;

    constructor() {
        super();
    }

    onAwake(): void {
        let parallel = this.owner.getComponent(Parallel);
        parallel.play.disabled = true;
        parallel.play.on(Laya.Event.CLICK, this, this.onCreateRoom);

        parallel.closeBtn.on(Laya.Event.CLICK, this, () => {
            this.dialog.close();
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
        Station.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse,  this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);

    }
    removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);
    }

    private onRoomJoin(event: SFS2X.SFSEvent) {
        Laya.Dialog.closeAll();
        Laya.Scene.open("partner.ls", true,{"color":Config.Colors[this.colorIdx]});
    }

    private onExtensionResponse(evtParams: SFS2X.SFSEvent) {
        if (evtParams.cmd == "CreateRoom") {
            let roomId = evtParams.params.get("RoomId");
            Station.joinRoom(Station.sfs.getRoomById(roomId))
        }
    }

    onCreateRoom() {
        var params = new SFS2X.SFSObject();
        params.putUtfString("Color", Config.Colors[this.colorIdx]);
        let parallel = this.owner.getComponent(Parallel) as Parallel;
        params.putInt("MaxUsers", parallel.numberOfPlayer);
        Station.sfs.send(new SFS2X.ExtensionRequest("CreateRoom", params));
    }
}