const { regClass, property } = Laya;
import { Config } from "./Config";
import { Parallel } from "./Parallel";
import * as Station from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";

@regClass()
export class OnlineParallel extends Laya.Script {

    private station: Station.Station;
    private colorIdx: number = -1;

    public numberOfPlayer:number = 2;

    constructor(station: Station.Station) {
        super();
        this.station = station;
    }

    onAwake(): void {
        let parallel = this.owner.getComponent(Parallel);
        parallel.play4pBtn.disabled = true;
        parallel.play.on(Laya.Event.CLICK, this, this.onPlay);

        parallel.closeBtn.on(Laya.Event.CLICK, this, () => {
            this.station.levelRoom();
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
                roomVars.push(new SFS2X.SFSRoomVariable(Config.Colors[this.colorIdx], this.station.sfs.mySelf.id));
                this.station.setRoomVariables(roomVars);
            });
        }
    }

    onStart(): void {
        this.addStationListener();
        this.station.joinRoom();
    }

    onDestroy(): void {
        this.removeStationListener();
    }

    addStationListener() {
        this.station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_VARIABLES_UPDATE, this.onRoomVariablesUpdate, this);
        this.station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);
        this.station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onRoomJoinError, this);
    }
    removeStationListener() {
        this.station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_VARIABLES_UPDATE, this.onRoomVariablesUpdate);
        this.station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin);
        this.station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onRoomJoinError);
    }

    onPlay() {
        let parallel = this.owner.getComponent(Parallel);
        parallel.play.disabled = true;
        for (let idx in parallel.colorCheckBox) {
            parallel.colorCheckBox[idx].disabled = true;
        }
        let stateName = this.station.getUserStateName(Config.Colors[this.colorIdx], this.station.mySelfId());
        let roomVars = new SFS2X.SFSRoomVariable(stateName, "ready");
        this.station.setRoomVariables([roomVars]);
    }

    onRoomVariablesUpdate(event: SFS2X.SFSEvent) {
        let users = event.room.getUserList();
        if (users.length == this.numberOfPlayer) {
            let cnt = 0;
            let roomVars = event.room.getVariables();
            for (let i in users) {
                let user = users[i];
                let color = this.station.getUserColor(user, roomVars);
                let stateName = this.station.getUserStateName(color, user.id);
                if (event.room.containsVariable(stateName)) {
                    cnt++;
                }
            }
            if (cnt == users.length) {
                this.owner.event(Laya.Event.PLAYED, [this.numberOfPlayer]);
            }
        }
        this.updateColorCheckBox(event.room);
    }
    
    updateColorCheckBox(room: SFS2X.SFSRoom) {
        let parallel = this.owner.getComponent(Parallel);
        let mySelfId = this.station.mySelfId();

        let onlineUser: any = {};
        let roomVars = room.getVariables();
        let users = room.getUserList();
        for (let rvidx in roomVars) {
            let rv = roomVars[rvidx];
            if (rv.isNull) {
                continue;
            }
            if (rv.value != -1) {
                let user = this.station.getOnlineUser(rv.value, users);
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

    onRoomJoinError(event: SFS2X.SFSEvent) {

    }

    onRoomJoin(event: SFS2X.SFSEvent) {
        this.updateColorCheckBox(event.room);
    }
}