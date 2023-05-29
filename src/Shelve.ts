const { regClass, property } = Laya;
import { Station } from "./Station";
import { Config } from "./Config";
import * as SFS2X from "../node_modules/sfs2x-api";
import { Invite } from "./Invite";

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
        Station.sfs.removeEventListener(SFS2X.SFSEvent.INVITATION, this.onInvitationReceived, this);
    }

    private onInvitationReceived(evtParams: SFS2X.SFSEvent) {
        Laya.Scene.open("dialog/invite.lh", false, null, Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
            dlg.addComponentInstance(new Invite(evtParams.invitation));
        }));
    }
}