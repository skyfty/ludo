const { regClass, property } = Laya;
import {Station} from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";
import { Config } from "./Config";

@regClass()
export class Engagement extends Laya.Script {
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
                for(let idx2 in this.colorCheckBox) {
                    if (this.colorCheckBox[idx2].disabled) {
                        continue;
                    }
                    this.colorCheckBox[idx2].selected = (this.colorCheckBox[idx2] == event.target);
                }
                this.play.disabled = false;
                this.colorIdx = Number.parseInt(idx);

                let roomVars = [];
                if (this.colorIdx != -1) {
                    roomVars.push(new SFS2X.SFSRoomVariable(Config.Colors[this.colorIdx], -1));
                }
                roomVars.push(new SFS2X.SFSRoomVariable(Config.Colors[this.colorIdx], Station.sfs.mySelf.id));
                Station.setRoomVariables(roomVars);
            });
        }
        this.closeBtn.on(Laya.Event.CLICK, this, () => {
            this.owner.event(Laya.Event.CLOSE);
        });
    }

    onStart(): void {
        this.addStationListener();
        Station.joinRoom();
    }

    onDestroy(): void {
        this.removeStationListener();
        Station.levelRoom();
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
        this.owner.event(Laya.Event.PLAYED, {"color":Config.Colors[this.colorIdx]});
    }

    onRoomVariablesUpdate(event: SFS2X.SFSEvent) {
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

}