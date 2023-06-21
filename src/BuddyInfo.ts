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
        this.viewStack.selectedIndex = 0;
        this.addBuddy.on(Laya.Event.CLICK, this, this.onAddBuddy);
    }

    private onAddBuddy() {
		Station.sfs.send(new SFS2X.AddBuddyRequest(this.name.text));
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