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

    private onTabSelected(index: number) {
        this.viewStack.selectedIndex = index;
        if (index == 0) {
            this.buddyList.addStationListener();
            this.buddyRecent.removeStationListener();
        } else {
            this.buddyRecent.addStationListener();
            this.buddyList.removeStationListener();
        }
    }

}