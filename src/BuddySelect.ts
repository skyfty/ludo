const { regClass, property } = Laya;
import { Station } from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";
import { BuddyList } from "./BuddyList";
import { BuddyRecent } from "./BuddyRecent";
import { BuddyItem } from "./BuddyItem";

@regClass()
export class BuddySelect extends Laya.Script {

    @property(Laya.Label)
    public buddyCount: Laya.Label;

    @property(Laya.List)
    public list: Laya.List;

    constructor() {
        super();
    }

    onAwake(): void {
        this.list.renderHandler = new Laya.Handler(this, this.updateItem);
    }
    onStart(): void {
        this.onBuddyListUpdate(null);
        this.addStationListener();
    }
    onDestroy(): void {
        this.removeStationListener();
    }

    public addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_ONLINE_STATE_CHANGE, this.onBuddyListUpdate, this);

    }
    public removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSBuddyEvent.BUDDY_ONLINE_STATE_CHANGE, this.onBuddyListUpdate, this);
    }

    private onBuddyListUpdate(event: SFS2X.SFSEvent) {
        this.list.array = Station.sfs.buddyManager.getOnlineBuddies();
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
        item.nickname.text =(data.nickName != null && data.nickName != "") ? data.nickName:data.name;

        item.button.on(Laya.Event.CLICK, this, ()=>{

        });
    }


}