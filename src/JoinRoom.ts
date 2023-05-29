const { regClass, property } = Laya;

import { Parallel } from "./Parallel";
import { Config } from "./Config";
import {Station} from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";
import { Dialog } from "./Dialog";
@regClass()
export class JoinRoom extends Laya.Script {
 
    @property(Laya.Dialog)
    public dialog: Laya.Dialog;


    @property(Laya.TextInput)
    public roomInput: Laya.TextInput;

    
    @property(Laya.Button)
    public closeBtn: Laya.Button;
    @property(Laya.Button)
    public play: Laya.Button;

    constructor() {
        super();
    }

    onAwake(): void {
        this.play.on(Laya.Event.CLICK, this, ()=>{
            let roomId =  this.roomInput.text;
            let room = Station.sfs.getRoomById(Number.parseInt(roomId));
            Station.joinRoom(room)
        });
        this.closeBtn.on(Laya.Event.CLICK, this, () => {
            this.owner.event(Laya.Event.CLOSE);
        });
    }
    
    onDestroy(): void {
        this.removeStationListener();
    }

    addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);

    }
    removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin);
    }

    private onRoomJoin(event: SFS2X.SFSEvent) {
        Laya.Scene.open("dialog/engagement.lh", false, null, Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
            dlg.on(Laya.Event.PLAYED, this, (color:string)=>{
                Dialog.closeAll();
                Laya.Scene.open("partner.ls", true,{"color":color});
            });
            dlg.on(Laya.Event.CLOSE, this, ()=>{
                Station.levelRoom();
                Dialog.closeAll();
            });
        }));
        this.dialog.close();
    }
}