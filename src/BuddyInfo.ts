const { regClass, property } = Laya;
import { UserInfo } from "./UserInfo";
import { Station } from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";

@regClass()
export class BuddyInfo extends UserInfo {

    @property(Laya.ViewStack)
    public viewStack: Laya.ViewStack;

    
    @property(Laya.Button)
    public addBuddy: Laya.Button;

    constructor() {
        super();
    }

    onAwake(): void {
        super.onAwake();
        this.addStationListener();
        this.addBuddy.on(Laya.Event.CLICK, this, this.onAddBuddy);
    }

    public setProfile(profile:SFS2X.SFSObject) {
        super.setProfile(profile);
        if (Station.sfs.buddyManager.containsBuddy(this.userid.toString())) {
            this.viewStack.visible = false;
        } else {
            this.viewStack.visible = true;
            this.viewStack.selectedIndex = 0;
        }
    }

    private onAddBuddy() {
        var params = new SFS2X.SFSObject();
        params.putInt("id",this.userid);
        Station.sfs.send(new SFS2X.ExtensionRequest("AddRecentBuddyRequest", params));
    }
    
    onDestroy(): void {
        this.removeStationListener();
    }
    public addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
        Station.sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_ADD,  this.onBuddyAddRequest, this);

    }
    public removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
        Station.sfs.removeEventListener(SFS2X.SFSBuddyEvent.BUDDY_ADD,  this.onBuddyAddRequest, this);
    }

    private onBuddyAddRequest(event: SFS2X.SFSEvent){
        this.viewStack.selectedIndex = 1;
    }
    private onExtensionResponse(evtParams: SFS2X.SFSEvent) {
        if ("AddRecentBuddyRequest" == evtParams.cmd) {
            let userid = evtParams.params.getInt("id");
            Station.sfs.send(new SFS2X.AddBuddyRequest(userid.toString()));
        } 
    }
}