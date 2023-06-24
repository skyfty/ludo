const { regClass, property } = Laya;
import { Station } from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";
import { BuddyList } from "./BuddyList";
import { BuddyRecent } from "./BuddyRecent";

@regClass()
export class BuddyDialog extends Laya.Script {

    @property(Laya.ViewStack)
    public viewStack: Laya.ViewStack;

    @property(Laya.Tab)
    public tab: Laya.Tab;

    @property(Laya.Label)
    public buddyCount: Laya.Label;

    
    @property(BuddyList)
    public buddyList: BuddyList;

    @property(BuddyRecent)
    public buddyRecent: BuddyRecent;

    constructor() {
        super();
    }

    onAwake(): void {
        this.tab.selectHandler = new Laya.Handler(this, this.onTabSelected);
        this.viewStack.selectedIndex = 0;
    }
    onStart(): void {
        this.onBuddyListUpdate(null);
        this.addStationListener();
    }
    onDestroy(): void {
        this.removeStationListener();
    }

    public addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_ADD, this.onBuddyListUpdate, this);
        Station.sfs.addEventListener(SFS2X.SFSBuddyEvent.BUDDY_REMOVE, this.onBuddyListUpdate, this);

    }
    public removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSBuddyEvent.BUDDY_ADD, this.onBuddyListUpdate, this);
        Station.sfs.removeEventListener(SFS2X.SFSBuddyEvent.BUDDY_REMOVE, this.onBuddyListUpdate, this);

    }

    private onBuddyListUpdate(event: SFS2X.SFSEvent) {
        this.buddyCount.text = Station.sfs.buddyManager.getBuddyList().length;
    }
    private onTabSelected(index: number) {
        this.viewStack.selectedIndex = index;

    }

}