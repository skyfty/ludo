const { regClass, property } = Laya;
import { Station } from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";
import { TrimCoinItem } from "./TrimCoinItem";
import { TrimConfig } from "./TrimConfig";
import { Profile } from "./Profile";

@regClass()
export class TrimCoinsList extends Laya.Script {

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
        this.list.array = TrimConfig.Coins;
    }

    onDestroy(): void {
        this.removeStationListener();
    }

    public addStationListener() {

    }
    public removeStationListener() {

    }

    public onBuddyRemoved(evtParams: SFS2X.SFSEvent)
    {
        console.log("This buddy was removed: " + evtParams.buddy.name);
    }

    private updateItem(cell: any, index: number): void {
        let data = this.list.array[index];
        let item = cell.getComponent(TrimCoinItem) as TrimCoinItem;
        Laya.loader.load("resources/images/trims/" +data.image, Laya.Loader.IMAGE).then((res: Laya.Texture) => {
            item.image.texture = res;
            item.gold.text = data.gold.toString();
        });
        item.setState(Profile.getGold() < data.gold);
        item.viewStack.selectedIndex = 0;
        item.index = index;

    }


}