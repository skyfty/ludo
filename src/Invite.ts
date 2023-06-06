const { regClass, property, SoundManager } = Laya;
import { Station } from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";
import { Dialog } from "./Dialog";

@regClass()
export class Invite extends Laya.Scene {
    public numberOfPlayer: number = 2;
    public color: string;

    @property(Laya.Box)
    public item: Laya.Box;

    @property(Laya.ViewStack)
    public viewStack: Laya.ViewStack;

    @property(Laya.Label)
    public clock: Laya.Label;

    
    @property(Laya.Label)
    public roomCode: Laya.Label;

    onAwake(): void {
        this.getChildByName("return").on(Laya.Event.CLICK, this, () => {
            Laya.Scene.open("dialog/endgame.lh", false, null, Laya.Handler.create(this, (dlg: Laya.Dialog) => {
                let view = dlg.getChildByName("view");
                view.getChildByName("okay").on(Laya.Event.CLICK, this, this.endGameRoom);
            }));
        });
        this.addStationListener();
        this.viewStack = this.getChildByName("ViewStack") as Laya.ViewStack;
        this.clock = this.getChildByName("clockbk").getChildByName("clock") as Laya.Label;
        this.roomCode = this.getChildByName("RoomTitle").getChildByName("RoomCode") as Laya.Label;
    }

    onDestroy(): void {
        this.removeStationListener();
    }

    onOpened(param: any) {
        this.color = param.color;
        this.numberOfPlayer = Station.sfs.lastJoinedRoom.maxUsers;
        this.roomCode.text = Station.sfs.lastJoinedRoom.getVariable("RoomCode").value;

        let itemName = this.numberOfPlayer - 2;
        this.viewStack.selectedIndex = itemName;
        this.item = this.viewStack.getChildByName("item" + itemName) as Laya.Box;

        let stateName = Station.getUserStateName(this.color, Station.mySelfId());
        let roomVars: SFS2X.SFSRoomVariable = [];
        roomVars.push(new SFS2X.SFSRoomVariable(stateName, "ready"));
        roomVars.push(new SFS2X.SFSRoomVariable(this.color, Station.mySelfId()));

        Station.sfs.send(new SFS2X.SetRoomVariablesRequest(roomVars));

        Laya.timer.loop(1000, this, () => {
            let timeout = Number.parseInt(this.clock.text) - 1;
            if (timeout <= 0) {
                Laya.timer.clearAll(this);
                Laya.Scene.open("dialog/searchtimeout.lh", false, null, Laya.Handler.create(this, (dlg: Laya.Dialog) => {
                    let view = dlg.getChildByName("view");
                    view.getChildByName("return").on(Laya.Event.CLICK, this,this.endGameRoom);
                }));
            }
            else {
                this.clock.text = timeout.toString();
            }
        });
    }

    private endGameRoom() {
        Dialog.closeAll();
        Station.levelRoom();
        Laya.Scene.open("menu.ls");
    }

    addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_VARIABLES_UPDATE, this.onRoomUpdate, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.onRoomUpdate, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.USER_ENTER_ROOM, this.onRoomUpdate, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.LOGOUT, this.onLogout, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this.onLogout, this);
    }

    removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_VARIABLES_UPDATE, this.onRoomUpdate, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.onRoomUpdate, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.USER_ENTER_ROOM, this.onRoomUpdate, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.LOGOUT, this.onLogout, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this.onLogout, this);
    }


    private stopAllClip(b: boolean) {
        for (let i = 0; i < this.item.numChildren; ++i) {
            let c = this.item.getChildAt(i) as Laya.Clip;
            c.autoPlay = b;
        }
    }


    private onLogout() {
        this.stopAllClip(false);
        Laya.Scene.open("dialog/roomjoinerror.lh", false, null, Laya.Handler.create(this, (dlg: Laya.Dialog) => {
            dlg.getChildByName("view").getChildByName("return").on(Laya.Event.CLICK, () => {
                Dialog.closeAll();
                Laya.Scene.open("menu.ls");
            });
        }));
    }

    onRoomUpdate() {
        this.stopAllClip(true);
        if (Station.sfs.lastJoinedRoom == null) {
            return;
        }
        let users = Station.sfs.lastJoinedRoom.getUserList();
        let cnt = 0;
        let roomVars = Station.sfs.lastJoinedRoom.getVariables();
        for (let i in users) {
            let user = users[i];
            let color = Station.getUserColor(user, roomVars);
            let stateName = Station.getUserStateName(color, user.id);
            if (Station.sfs.lastJoinedRoom.containsVariable(stateName)) {
                let pp = this.item.getChildAt(cnt) as Laya.Clip;
                if (pp != null) {
                    cnt++;
                    pp.autoPlay = false;
                    pp.index = users[i].getVariable("avatar").value;
                }
            }
        }

        if (users.length == this.numberOfPlayer && cnt == users.length) {
            Laya.Scene.open("game.ls", true, { "type": "friend", "number": this.numberOfPlayer,"color": this.color });
        }
    }
}