const { regClass, property } = Laya;
import { Station } from "./Station";
import { Config } from "./Config";
import * as SFS2X from "../node_modules/sfs2x-api";

@regClass()
export class Shelve extends Laya.Script {

    constructor() {
        super();
    }

    onAwake(): void {
        this.addStationListener();
    }

    onDestroy(): void {
        this.removeStationListener();
    }

    private addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.INVITATION, this.onInvitationReceived, this);
    }

    private removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, this.onInvitationReceived, this);
    }

    private onAcceptInvitaion(evtParams: SFS2X.SFSEvent) {
        Laya.Scene.open("dialog/engagement.lh", false, null, Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
            dlg.on(Laya.Event.PLAYED, this, (color:string)=>{
                dlg.close();
                dlg.removeSelf();
                let roomId = evtParams.params.get("RoomId")
                Laya.Scene.open("partner.ls", true,{"color":color,"roomId":roomId});
            });
            dlg.on(Laya.Event.CLOSE, this, ()=>{
                dlg.close();
            });
        }));
    }

    private onInvitationReceived(evtParams: SFS2X.SFSEvent) {
        Laya.Scene.open("dialog/invite.lh", false, null, Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
            let view = dlg.getChildByName("view");
            view.getChildByName("return").on(Laya.Event.CLICK, this, ()=>{
                dlg.close();
                Station.sfs.send(new SFS2X.InvitationReplyRequest(evtParams.invitation, SFS2X.InvitationReply.REFUSE));
            });
            view.getChildByName("okay").on(Laya.Event.CLICK, this, ()=>{
                dlg.close();
                Station.sfs.send(new SFS2X.InvitationReplyRequest(evtParams.invitation, SFS2X.InvitationReply.ACCEPT));
                this.onAcceptInvitaion(evtParams);
            });
        }));
    }
}