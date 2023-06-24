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
        Station.sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_ONLINE_STATE_CHANGE, this.onBuddyListUpdate, this);

    }
    public removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSBuddyEvent.BUDDY_ONLINE_STATE_CHANGE, this.onBuddyListUpdate, this);
        Station.sfs.removeEventListener(SFS2X.SFSBuddyEvent.BUDDY_VARIABLES_UPDATE, this.onBuddyListUpdate, this);
        Station.sfs.removeEventListener(SFS2X.SFSBuddyEvent.BUDDY_ADD, this.onBuddyListUpdate, this);
        Station.sfs.removeEventListener(SFS2X.SFSBuddyEvent.BUDDY_REMOVE, this.onBuddyListUpdate, this);
        Station.sfs.removeEventListener(SFS2X.SFSBuddyEvent.BUDDY_ONLINE_STATE_CHANGE, this.onBuddyListUpdate, this);

    }

    public onBuddyRemoved(evtParams: SFS2X.SFSEvent)
    {
        console.log("This buddy was removed: " + evtParams.buddy.name);
    }
    private updateItem(cell: any, index: number): void {
        let data = this.list.array[index];
        let item = cell.getComponent(BuddyItem) as BuddyItem;
        let avatar =  data.getVariable(SFS2X.SFSBuddyVariable.OFFLINE_PREFIX + "avatar");
        if (avatar != null) {
            item.avatar.index = avatar.value;
        } else {
            item.avatar.index = 0;
        }
        item.nickname.text =this.getBuddyDisplayName(data);
        item.nickname.color = data.isOnline ? "#fed403":"#878782";

        item.button.on(Laya.Event.CLICK, this, ()=>{
            Station.sfs.send(new SFS2X.RemoveBuddyRequest(data.name));
        });
    }


    private getBuddyDisplayName(buddy:SFS2X.Buddy) {
        if (buddy.nickName != null && buddy.nickName != "")
            return buddy.nickName;
        else
            return buddy.name;
    }
    
    private onBuddyListUpdate(event: SFS2X.SFSEvent) {
        this.list.array =Station.sfs.buddyManager.getOnlineBuddies().concat(Station.sfs.buddyManager.getOfflineBuddies());
    }
}