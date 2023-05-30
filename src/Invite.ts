const { regClass, property } = Laya;
import * as SFS2X from "../node_modules/sfs2x-api";
import { Station } from "./Station";

@regClass()
export class Invite extends Laya.Script {

    private invite:SFS2X.SFSInvitation = null;

    constructor(invite:SFS2X.SFSInvitation) {
        super();
        this.invite = invite;
    }

    onAwake(): void {
        let view = this.owner.getChildByName("view");
        view.getChildByName("return").on(Laya.Event.CLICK, this, ()=>{
            Laya.Dialog.closeAll();
            Station.sfs.send(new SFS2X.InvitationReplyRequest(this.invite, SFS2X.InvitationReply.REFUSE));
        });
        view.getChildByName("okay").on(Laya.Event.CLICK, this, ()=>{
            Station.sfs.send(new SFS2X.InvitationReplyRequest(this.invite, SFS2X.InvitationReply.ACCEPT));
        });
        this.addStationListener();
    }

    onDestroy(): void {
        this.removeStationListener();
    }
    
    private addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);
    }

    private removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);
    }

    private onRoomJoin(evtParams: SFS2X.SFSEvent) {
        Laya.Dialog.closeAll();
        Laya.Scene.open("dialog/selectcolor.lh", false, null, Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
            dlg.on(Laya.Event.PLAYED, this, (color:string)=>{
                Laya.Dialog.closeAll();
                Laya.Scene.open("partner.ls", true,{"color":color});
            });
            dlg.on(Laya.Event.CLOSE, this, ()=>{
                Laya.Dialog.closeAll();
                Station.levelRoom();
            });
        }));
    }
}