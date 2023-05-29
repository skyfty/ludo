const { regClass, property } = Laya;
import {Station} from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";
import { Config } from "./Config";

@regClass()
export class SelectColor extends Laya.Script {
    @property(Laya.Button)
    public closeBtn: Laya.Button;

    @property(Laya.Button)
    public play: Laya.Button;

    @property([Laya.CheckBox])
    public colorCheckBox: Laya.CheckBox[] = [];
    private colorIdx: number = -1;

    constructor() {
        super();
    }

    onAwake(): void {
        for(let idx in this.colorCheckBox) {
            this.colorCheckBox[idx].on(Laya.Event.CLICK, this, (event) => {
                this.play.disabled = false;

                for(let idx2 in this.colorCheckBox) {
                    if (this.colorCheckBox[idx2].disabled) {
                        continue;
                    }
                    this.colorCheckBox[idx2].selected = (this.colorCheckBox[idx2] == event.target);
                }

                let roomVars = [];
                if (this.colorIdx != -1) {
                    roomVars.push(new SFS2X.SFSRoomVariable(Config.Colors[this.colorIdx], -1));
                }
                this.colorIdx = Number.parseInt(idx);
                roomVars.push(new SFS2X.SFSRoomVariable(Config.Colors[this.colorIdx], Station.sfs.mySelf.id));
                Station.setRoomVariables(roomVars);
            });
        }
        this.closeBtn.on(Laya.Event.CLICK, this, () => {
            this.owner.event(Laya.Event.CLOSE);
        });
        this.play.on(Laya.Event.CLICK, this, () => {
            let colorName = Config.Colors[this.colorIdx];
            this.owner.event(Laya.Event.PLAYED, [colorName]);
        });
    }

    onStart(): void {
        this.addStationListener();
        this.onRoomUsersUpdate(Station.sfs.lastJoinedRoom);
    }

    onDestroy(): void {
        this.removeStationListener();
    }

    addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_VARIABLES_UPDATE, this.onRoomVariablesUpdate, this);

    }
    removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_VARIABLES_UPDATE, this.onRoomVariablesUpdate);
    }


    onRoomUsersUpdate(room: SFS2X.SFSRoom) {
        let mySelfId = Station.mySelfId();

        let onlineUser: any = {};
        let roomVars = room.getVariables();
        let users = room.getUserList();
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

        for (let checkBoxIdx in this.colorCheckBox) {
            let colorCheckBox = this.colorCheckBox[checkBoxIdx];
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

    onRoomVariablesUpdate(event: SFS2X.SFSEvent) {
        this.onRoomUsersUpdate(event.room);
    }

}