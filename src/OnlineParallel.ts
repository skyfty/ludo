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
                let roomVars = [];
                if (this.colorIdx != -1) {
                    roomVars.push(new SFS2X.SFSRoomVariable(Config.Colors[this.colorIdx], -1));
                }
                this.colorIdx = Number.parseInt(idx);
                roomVars.push(new SFS2X.SFSRoomVariable(Config.Colors[this.colorIdx], Station.sfs.mySelf.id));
                Station.setRoomVariables(roomVars);
            });
        }
    }

    onStart(): void {
        this.addStationListener();
        Station.joinRoom();
    }

    onDestroy(): void {
        this.removeStationListener();
    }

    addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_VARIABLES_UPDATE, this.onRoomVariablesUpdate, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomVariablesUpdate, this);
    }
    removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_VARIABLES_UPDATE, this.onRoomVariablesUpdate);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomVariablesUpdate);
    }

    onPlay() {
        this.removeStationListener();
        let stateName = Station.getUserStateName(Config.Colors[this.colorIdx], Station.mySelfId());
        let roomVars = new SFS2X.SFSRoomVariable(stateName, "ready");
        Station.setRoomVariables([roomVars]);
        this.owner.event(Laya.Event.PLAYED, [this.numberOfPlayer]);
    }

    onRoomVariablesUpdate(event: SFS2X.SFSEvent) {
        let parallel = this.owner.getComponent(Parallel);
        let mySelfId = Station.mySelfId();

        let onlineUser: any = {};
        let roomVars = event.room.getVariables();
        let users = event.room.getUserList();
        for (let rvidx in roomVars) {
            let rv = roomVars[rvidx];
            if (rv.isNull) {
                continue;
            }
            if (rv.value != -1) {
                let user = Station.getOnlineUser(rv.value, users);
                if (user != null) {
                    onlineUser[rv.name] = {
                        "id": user.id,
                        "selected": true,
                        "disabled": (user.id != mySelfId)
                    };
                }
            }
        }

        for (let checkBoxIdx in parallel.colorCheckBox) {
            let colorCheckBox = parallel.colorCheckBox[checkBoxIdx];
            let colorName = Config.Colors[checkBoxIdx];
            let userInfo = onlineUser[colorName];
            if (userInfo) {
                colorCheckBox.selected = userInfo.selected;
                colorCheckBox.disabled = userInfo.disabled;
            } else {
                colorCheckBox.selected = colorCheckBox.disabled = false;
            }
        }
    }
}