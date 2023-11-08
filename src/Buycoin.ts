const { regClass, property } = Laya;
import * as SFS2X from "../node_modules/sfs2x-api";
import { BuyItem } from "./BuyItem";
import { Station } from "./Station";
import { Profile } from "./Profile";

@regClass()
export class Buycoin extends Laya.Script {

    @property(Laya.List)
    public list: Laya.List;
    private priceNameList:[];

    @property(Laya.Prefab)
    public goldcoin: Laya.Prefab;

    
    @property(Laya.Sprite)
    public collectPoint: Laya.Sprite;
    private coins: SFS2X.SFSArray = null;

    constructor() {
        super();
    }

    onAwake(): void {
        this.addStationListener();
        this.list.renderHandler = new Laya.Handler(this, this.updateItem);
        this.owner.on(Laya.Event.SELECT, this, this.onSelected);
    }

    onDestroy(): void {
        this.removeStationListener();
    }

    onStart(): void {
        Station.sfs.send(new SFS2X.ExtensionRequest("GetCoinRequest"));
    }

    setCollectPoint(point:Laya.Sprite) {
        this.collectPoint = point;
    }

    public onSelected(index: number){
        let data = this.list.array[index];
        window.flutter_inappwebview.callHandler('buy',data.getUtfString("name")).then(function(result){
            if (result === "0") {
                var params = new SFS2X.SFSObject();
                params.putInt("id", Profile.getUserId());
                params.putInt("amount", data.getInt("amount"));
                params.putInt("selectindex", index);
                Station.sfs.send(new SFS2X.ExtensionRequest("BuyGoldRequest", params));
            } else {

            }
        });
    }


    private updateItem(cell: any, index: number): void {
        if ( this.coins != null) {
            let data:SFS2X.SFSObject = this.coins.getSFSObject(index);
            let item = cell.getComponent(BuyItem) as BuyItem;
            item.index = index;
            item.coin.text = data.getInt("amount").toLocaleString('en-US');
            let name = data.getUtfString("name");
            if (this.priceNameList!= undefined && typeof this.priceNameList[name] !== "undefined") {
                item.price.text = this.priceNameList[name];
            } else {
                item.price.text = data.getDouble("price");
            }
        }
    }

    startGoldCoin(selectindex:number): void {
        let dialog = this.owner as Laya.Dialog;
        let cell = this.list.getCell(selectindex);
        let coinAmount = cell.getComponent(BuyItem).coin;
        let destPointParent = this.collectPoint.parent as Laya.Sprite;
        let destPos = dialog.globalToLocal(destPointParent.localToGlobal(new Laya.Point(this.collectPoint.x,this.collectPoint.y)));
        let amount = 5;
        for (let i = 0; i < amount; ++i) {
            let xpos = coinAmount.x + Math.random() * coinAmount.width;
            let ypos = coinAmount.y +Math.random() * coinAmount.height;
            let coinPos = dialog.globalToLocal(cell.localToGlobal(new Laya.Point(xpos,ypos)));

            let coin = this.goldcoin.create() as Laya.Sprite;
            coin.y = coinPos.y;
            coin.x = coinPos.x;
            dialog.addChild(coin);
            let duration = Math.random() * 200 + 600;
            Laya.Tween.to(coin, { y:destPos.y, x: destPos.x }, duration, Laya.Ease.linearOut, Laya.Handler.create(this, () => {
                coin.removeSelf();
            }));
        }
         Laya.SoundManager.playSound("sounds/jinbi.mp3", 1);
    }


    private onSkus(result2) {
        this.priceNameList = result2;
        this.list.refresh();
    }

    private onExtensionResponse(evtParams: SFS2X.SFSEvent) {
        if ("GetCoinRequest" == evtParams.cmd) {
            this.coins = evtParams.params.getSFSArray("list");
            var skus = [];
            var data: Array<SFS2X.SFSObject> = [];
            for (var m: number = 0; m < this.coins.size(); m++) {
                let item = this.coins.getSFSObject(m);
                data.push(item);
                skus.push(item.getUtfString("name"))
            }
            this.list.array = data;

            if (window.flutter_inappwebview) {
                window.flutter_inappwebview.callHandler('skus', skus).then(this.onSkus.bind(this));
            }
        } else if ("BuyGoldRequest" == evtParams.cmd) {
            let gold = evtParams.params.get("gold");
            if (gold != null) {
                Profile.setGold(gold)
            }
            this.startGoldCoin( evtParams.params.getInt("selectindex"));
        }
    }
    protected addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);

    }

    protected removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
    }
}