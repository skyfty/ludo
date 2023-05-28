const { regClass, property } = Laya;
import { Config } from "./Config";
import { Parallel } from "./Parallel";
import {Station} from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";

@regClass()
export class OnlineParallel extends Laya.Script {

    private colorIdx: number = -1;
    public numberOfPlayer:number = 2;

    constructor() {
        super();
    }

    onAwake(): void {
        let parallel = this.owner.getComponent(Parallel);
        parallel.play4pBtn.disabled = true;
        parallel.play.on(Laya.Event.CLICK, this, this.onPlay);

        parallel.closeBtn.on(Laya.Event.CLICK, this, () => {
            Station.levelRoom();
            this.owner.event(Laya.Event.CLOSE);
            this.owner.removeSelf();
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

    }
    removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
    }

    private onExtensionResponse(evtParams: SFS2X.SFSEvent) {
        if (evtParams.cmd == "Challenge") {
            let responseParams = evtParams.params;
            let roomId = responseParams.get("RoomId")
            this.owner.event(Laya.Event.PLAYED, [Config.Colors[this.colorIdx], roomId]);
        }
    }

    onPlay() {
        var params = new SFS2X.SFSObject();
        params.putUtfString("Color", Config.Colors[this.colorIdx]);
        params.putInt("MaxUsers", 2);
        Station.sfs.send(new SFS2X.ExtensionRequest("Challenge", params));
    }

}