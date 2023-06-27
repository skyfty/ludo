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
        this.owner.on(Laya.Event.SELECT, this, this.onSelected);
        this.owner.on("Buy", this, this.onBuy);
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

    public onBuy(index: number){
        let data = this.list.array[index];
      
        
    }
    public onSelected(index: number){
        let data = this.list.array[index];
        Profile.setTrim(data.image);
        this.list.refresh();
    }

    private updateItem(cell: any, index: number): void {
        let data = this.list.array[index];
        let item = cell.getComponent(TrimCoinItem) as TrimCoinItem;
        item.gold.text = data.gold.toString();
        item.image.skin = Profile.getTrimImage(data.image);
        item.setState(Profile.getGold() < data.gold);
        item.viewStack.selectedIndex = 0;
        item.index = index;
        item.selectBox.selected = (data.image == Profile.getTrim());
    }


}