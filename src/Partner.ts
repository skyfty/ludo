const { regClass, property,SoundManager } = Laya;
import {Station} from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";
import { Config } from "./Config";
import { Dialog } from "./Dialog";

@regClass()
export class Pariner extends Laya.Scene {
    public numberOfPlayer:number = 2;
    public color:string;

    @property(Laya.Box)
    public item: Laya.Box;

    
    @property(Laya.ViewStack)
    public viewStack: Laya.ViewStack;

    
    @property(Laya.TextInput)
    public roomId: Laya.TextInput;
    
    onAwake(): void {
        this.getChildByName("return").on(Laya.Event.CLICK, this, ()=>{
            Laya.Scene.open("dialog/endgame.lh", false, null, Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
                let view = dlg.getChildByName("view");
                view.getChildByName("okay").on(Laya.Event.CLICK, this, ()=>{
                    Dialog.closeAll();
                    Station.levelRoom();
                    Laya.Scene.open("menu.ls");
                });
                view.getChildByName("return").on(Laya.Event.CLICK, dlg, dlg.close);
            }));
        });
        this.addStationListener();

        this.viewStack = this.getChildByName("ViewStack") as Laya.ViewStack;
        this.roomId = this.getChildByName("RoomTitle").getChildByName("RoomId") as Laya.TextInput;

    }

    onDestroy(): void {
        this.removeStationListener();
    }

    onOpened(param: any) {
        this.color = param.color;

        this.roomId.text = Station.sfs.lastJoinedRoom.id;
        this.numberOfPlayer = Station.sfs.lastJoinedRoom.getVariable("MaxUsers").value;

        let itemName = this.numberOfPlayer - 2;
        this.viewStack.selectedIndex = itemName;
        this.item = this.viewStack.getChildByName("item" + itemName) as Laya.Box;

        let stateName = Station.getUserStateName(this.color, Station.mySelfId());
        let roomVars = new SFS2X.SFSRoomVariable(stateName, "ready");
        Station.setRoomVariables([roomVars]);
    }
    
    addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_VARIABLES_UPDATE, this.onRoomVariablesUpdate, this);
    }
    removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_VARIABLES_UPDATE, this.onRoomVariablesUpdate);
    }

    onRoomVariablesUpdate(event: SFS2X.SFSEvent) {
        let users = event.room.getUserList();
        let cnt = 0;
        let roomVars = event.room.getVariables();
        for (let i in users) {
            let user = users[i];
            let color = Station.getUserColor(user, roomVars);
            let stateName = Station.getUserStateName(color, user.id);
            if (event.room.containsVariable(stateName)) {
                let itemClip = this.item.getChildByName(i) as  Laya.Clip;
                itemClip.autoPlay = false;
                cnt++;
            }
        }
        
        if (users.length == this.numberOfPlayer && cnt == users.length) {
            Laya.Scene.open("game.ls", true, { "type": "extreme","number": this.numberOfPlayer });
        }
    }
}