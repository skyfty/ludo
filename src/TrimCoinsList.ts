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
    public trims:string[] = [];

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
        var params = new SFS2X.SFSObject();
        Station.sfs.send(new SFS2X.ExtensionRequest("GetTrimRequest", params));
    }

    onDestroy(): void {
        this.removeStationListener();
    }


    public addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);

    }
    public removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
    }

    
    private onExtensionResponse(evtParams: SFS2X.SFSEvent) {
        if ("GetTrimRequest" == evtParams.cmd) {
            let trims = evtParams.params.getSFSArray("list");
            for (var m: number = 0; m < trims.size(); m++) {
                let trim = trims.getSFSObject(m);
                this.trims.push(trim.getUtfString("fund"))
            }
            this.list.refresh();
        } else  if ("BuyTrimRequest" == evtParams.cmd) {
            let gold = evtParams.params.get("gold");
            if (gold != null) {
                Profile.setGold(gold)
            }
            this.trims.push(evtParams.params.getUtfString("fund"))
            this.list.refresh();
        } 
    }

    public onBuy(index: number){
        let data = this.list.array[index];
        if (Profile.getGold() < data.gold) {
            Laya.Scene.open("dialog/nogold.lh", false);
        } else {
            var params = new SFS2X.SFSObject();
            params.putInt("amount", data.gold);
            params.putUtfString("type", "frame");
            params.putUtfString("fund", data.image);
            Station.sfs.send(new SFS2X.ExtensionRequest("BuyTrimRequest", params));
        }
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
        item.viewStack.selectedIndex = (this.trims.indexOf(data.image) != -1 ? 1:0);
        item.index = index;
        item.selectBox.selected = (data.image == Profile.getTrim());
    }

}