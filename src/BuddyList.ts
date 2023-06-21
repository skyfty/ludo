const { regClass, property } = Laya;
import { Station } from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";
import { BuddyItem } from "./BuddyItem";

@regClass()
export class BuddyList extends Laya.Script {

    @property(Laya.List)
    public list: Laya.List;

    constructor() {
        super();
    }

    onAwake(): void {
        this.list.renderHandler = new Laya.Handler(this, this.updateItem);
    }

    onStart(): void {
        this.addStationListener();
        this.onBuddyListUpdate(null);
    }

    onDestroy(): void {
        this.removeStationListener();
    }

    public addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_ONLINE_STATE_CHANGE, this.onBuddyListUpdate, this);
        Station.sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_VARIABLES_UPDATE, this.onBuddyListUpdate, this);
        Station.sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_ADD, this.onBuddyListUpdate, this);
        Station.sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_REMOVE, this.onBuddyListUpdate, this);
    }
    public removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSBuddyEvent.BUDDY_ONLINE_STATE_CHANGE, this.onBuddyListUpdate, this);
        Station.sfs.removeEventListener(SFS2X.SFSBuddyEvent.BUDDY_VARIABLES_UPDATE, this.onBuddyListUpdate, this);
        Station.sfs.removeEventListener(SFS2X.SFSBuddyEvent.BUDDY_ADD, this.onBuddyListUpdate, this);
        Station.sfs.removeEventListener(SFS2X.SFSBuddyEvent.BUDDY_REMOVE, this.onBuddyListUpdate, this);
    }

    private updateItem(cell: any, index: number): void {
        let data = this.list.array[index];
        let item = cell.getComponent(BuddyItem) as BuddyItem;
        // let avatar =  data.getInt("avatar");
        // item.avatar.index =avatar;
        item.nickname.text =this.getBuddyDisplayName(data);
    }

    private getBuddyDisplayName(buddy:SFS2X.Buddy) {
        if (buddy.nickName != null && buddy.nickName != "")
            return buddy.nickName;
        else
            return buddy.name;
    }
    
    private onBuddyListUpdate(event: SFS2X.SFSEvent) {
        this.list.array =  Station.sfs.buddyManager.getBuddyList();
    }
}