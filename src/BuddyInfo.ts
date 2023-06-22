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
		Station.sfs.send(new SFS2X.AddBuddyRequest(this.userid.toString()));
    }
    
    onDestroy(): void {
        this.removeStationListener();
    }
    public addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_ADD,  this.onBuddyAddRequest, this);

    }
    public removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSBuddyEvent.BUDDY_ADD,  this.onBuddyAddRequest, this);
    }

    private onBuddyAddRequest(event: SFS2X.SFSEvent){
        this.viewStack.selectedIndex = 1;
    }
}