const { regClass, property,SoundManager } = Laya;
import {Station} from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";

@regClass()
export class Pariner extends Laya.Scene {
    public numberOfPlayer:number = 2;

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
        this.numberOfPlayer = param.number;
    }
    
    addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_VARIABLES_UPDATE, this.onRoomVariablesUpdate, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomVariablesUpdate, this);
    }
    removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_VARIABLES_UPDATE, this.onRoomVariablesUpdate);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomVariablesUpdate);
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
                SoundManager.stopMusic();
                Laya.Scene.open("game.ls", true, { "type": "extreme","number": this.numberOfPlayer });
            }
        }
    }
}