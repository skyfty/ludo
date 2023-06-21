const { regClass, property } = Laya;
import { Station } from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";
import { BuddyItem } from "./BuddyItem";

@regClass()
export class BuddyList extends Laya.Script {

    @property(Laya.List)
    public list: Laya.List;
    private buddies: SFS2X.SFSArray = null;

    constructor() {
        super();
    }

    onAwake(): void {
        this.addStationListener();
        this.list.renderHandler = new Laya.Handler(this, this.updateItem);
    }

    onStart(): void {
        
        // Initialize the Buddy List system
        Station.sfs.send(new SFS2X.InitBuddyListRequest());
    }

    onDestroy(): void {
        this.removeStationListener();
    }

    public addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_LIST_INIT, this.onBuddyListInit, this);
        Station.sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_ERROR, this.onBuddyError, this);
        Station.sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_ONLINE_STATE_CHANGE, this.onBuddyListUpdate, this);
        Station.sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_VARIABLES_UPDATE, this.onBuddyListUpdate, this);
        Station.sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_ADD, this.onBuddyListUpdate, this);
        Station.sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_REMOVE, this.onBuddyListUpdate, this);

    }
    public removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSBuddyEvent.BUDDY_LIST_INIT, this.onBuddyListInit, this);
        Station.sfs.removeEventListener(SFS2X.SFSBuddyEvent.BUDDY_ERROR, this.onBuddyError, this);
        Station.sfs.removeEventListener(SFS2X.SFSBuddyEvent.BUDDY_ONLINE_STATE_CHANGE, this.onBuddyListUpdate, this);
        Station.sfs.removeEventListener(SFS2X.SFSBuddyEvent.BUDDY_VARIABLES_UPDATE, this.onBuddyListUpdate, this);
        Station.sfs.removeEventListener(SFS2X.SFSBuddyEvent.BUDDY_ADD, this.onBuddyListUpdate, this);
        Station.sfs.removeEventListener(SFS2X.SFSBuddyEvent.BUDDY_REMOVE, this.onBuddyListUpdate, this);
    }

    private updateItem(cell: any, index: number): void {
        let data:SFS2X.SFSObject = this.buddies.getSFSObject(index);
        let item = cell.getComponent(BuddyItem) as BuddyItem;
        let avatar =  data.getInt("avatar");
        item.avatar.index =avatar;
        item.nickname.text =this.getBuddyDisplayName(data);
        item.icon.index = Math.min(index,3);
    }

    
    private getBuddyDisplayName(buddy:SFS2X.Buddy) {
        if (buddy.nickName != null && buddy.nickName != "")
            return buddy.nickName;
        else
            return buddy.name;
    }
    
    /**
     * Build buddies list.
     */
    private onBuddyListUpdate(event: SFS2X.SFSEvent) {
        this.buddies =  Station.sfs.buddyManager.getBuddyList();
        var data: Array<SFS2X.SFSObject> = [];
        for (var m: number = 0; m < this.buddies.size(); m++) {
            data.push(this.buddies.getSFSObject(m));
        }
        this.list.array = data;
    
    }

    private onBuddyMessage(event: SFS2X.SFSEvent) {
    
    }

    private onBuddyListInit(event: SFS2X.SFSEvent) {
  
        this.onBuddyListUpdate(event);
    }

    private onBuddyError(event: SFS2X.SFSEvent) {
    }
}