const { regClass, property } = Laya;
import { Station } from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";
import { TrimLevelList } from "./TrimLevelList";
import { TrimCoinsList } from "./TrimCoinsList";

@regClass()
export class TrimDialog extends Laya.Script {

    @property(Laya.ViewStack)
    public viewStack: Laya.ViewStack;

    @property(Laya.Tab)
    public tab: Laya.Tab;


    @property(TrimLevelList)
    public trimLevelList: TrimLevelList;

    @property(TrimCoinsList)
    public trimCoinsList: TrimCoinsList;

    constructor() {
        super();
    }

    onAwake(): void {
        this.tab.selectHandler = new Laya.Handler(this, this.onTabSelected);
        this.viewStack.selectedIndex = 0;
    }
    onStart(): void {
        this.addStationListener();
    }
    onDestroy(): void {
        this.removeStationListener();
    }

    public addStationListener() {

    }
    public removeStationListener() {

    }

    private onTabSelected(index: number) {
        this.viewStack.selectedIndex = index;

    }

}