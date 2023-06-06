const { regClass, property } = Laya;
import * as SFS2X from "../node_modules/sfs2x-api";
import { BuyItem } from "./BuyItem";
import { Station } from "./Station";

@regClass()
export class Buycoin extends Laya.Script {

    @property(Laya.List)
    public list: Laya.List;

    private coins: SFS2X.SFSArray = null;

    constructor() {
        super();
    }

    onAwake(): void {
        this.addStationListener();
        this.list.renderHandler = new Laya.Handler(this, this.updateItem);
        this.list.selectHandler = new Laya.Handler(this, this.onSelectItem);
    }

    onDestroy(): void {
        this.removeStationListener();
    }

    onStart(): void {
        Station.sfs.send(new SFS2X.ExtensionRequest("GetCoinRequest"));
    }

    private onSelectItem(idx:number) {
        let item = this.list.getItem(idx);
    }

    private updateItem(cell: any, index: number): void {
        if ( this.coins != null) {
            let data:SFS2X.SFSObject = this.coins.getSFSObject(index);
            let item = cell.getComponent(BuyItem) as BuyItem;
            item.coin.text =data.getInt("amount").toLocaleString('en-US');
            item.price.text =data.getDouble("price");
        }
    }

    private onExtensionResponse(evtParams: SFS2X.SFSEvent) {
        if ("GetCoinRequest" == evtParams.cmd) {
            this.coins = evtParams.params.getSFSArray("list");
            var data: Array<SFS2X.SFSObject> = [];
            for (var m: number = 0; m < this.coins.size(); m++) {
                data.push(this.coins.getSFSObject(m));
            }
            this.list.array = data;
        }
    }
    protected addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);

    }

    protected removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
    }
}