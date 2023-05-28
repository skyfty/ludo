const { regClass, property,SoundManager } = Laya;
import {Station} from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";
import { Config } from "./Config";

@regClass()
export class Pariner extends Laya.Scene {
    public numberOfPlayer:number = 2;
    public color:string;

    onAwake(): void {
        this.getChildByName("return").on(Laya.Event.CLICK, this, ()=>{
            Laya.Scene.open("dialog/endgame.lh", false, null, Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
                let view = dlg.getChildByName("view");
                view.getChildByName("okay").on(Laya.Event.CLICK, this, ()=>{
                    dlg.close();
                    Station.levelRoom();
                    Laya.Scene.open("menu.ls");
                });
                view.getChildByName("return").on(Laya.Event.CLICK, dlg, dlg.close);
            }));
        });
        this.addStationListener();
    }

    onDestroy(): void {
        this.removeStationListener();
    }

    onOpened(param: any) {
        this.color = param.color;
        let room:SFS2X.SFSRoom = Station.sfs.getRoomById(param.roomId);
        Station.joinRoom(room);
    }
    
    addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_VARIABLES_UPDATE, this.onRoomVariablesUpdate, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);
    }
    removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_VARIABLES_UPDATE, this.onRoomVariablesUpdate);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin);
    }

    private onRoomJoin(event: SFS2X.SFSEvent) {
        this.numberOfPlayer = Station.sfs.lastJoinedRoom.getVariable("MaxUsers").value;
        let stateName = Station.getUserStateName(this.color, Station.mySelfId());
        let roomVars = new SFS2X.SFSRoomVariable(stateName, "ready");
        Station.setRoomVariables([roomVars]);
    }

    onRoomVariablesUpdate(event: SFS2X.SFSEvent) {
        let users = event.room.getUserList();
        if (users.length == this.numberOfPlayer) {
            let cnt = 0;
            let roomVars = event.room.getVariables();
            for (let i in users) {
                let user = users[i];
                let color = Station.getUserColor(user, roomVars);
                let stateName = Station.getUserStateName(color, user.id);
                if (event.room.containsVariable(stateName)) {
                    cnt++;
                }
            }
            if (cnt == users.length) {
                Laya.Scene.open("game.ls", true, { "type": "extreme","number": this.numberOfPlayer });
            }
        }
    }
}