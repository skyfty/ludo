const { regClass, property } = Laya;

import { Station } from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";
import { CheckinItem } from "./CheckinItem";
import { Profile } from "./Profile";
import i18n from "../node_modules/roddeh-i18n";
import { Cause } from "./Cause";


@regClass()
export class CheckinDialog extends Laya.Script {

    @property(Laya.List)
    public list: Laya.List;
    private checklist: SFS2X.SFSArray = null;

    @property(Laya.Prefab)
    public goldcoin: Laya.Prefab;

    
    @property(Laya.Sprite)
    public collectPoint: Laya.Sprite;

    constructor() {
        super();
    }

    onAwake(): void {
        this.addStationListener();
        this.list.renderHandler = new Laya.Handler(this, this.updateItem);
    }

    checkinListRequest(point:Laya.Sprite) {
        this.collectPoint = point;
        Station.sfs.send(new SFS2X.ExtensionRequest("CheckinListRequest"));
    }

    onDestroy(): void {
        this.removeStationListener();
    }
    private updateItem(cell: any, index: number): void {
        let data: SFS2X.SFSObject = this.checklist.getSFSObject(index);
        let item = cell.getComponent(CheckinItem) as CheckinItem;
        item.gold.text = data.getInt("gold");
        item.day.text = i18n('Day %n', data.getInt("day"));
        item.gold.text = data.getInt("gold");
        let checkinDay = Profile.getCheckinDay();
        if (index < checkinDay) {
            item.mark.visible = true;
        } else {
            item.mark.visible = false;
            if (index == checkinDay) {
                cell.on(Laya.Event.CLICK, this, this.onCheckin);
            }
        }
    }
    onCheckin() {
        var params = new SFS2X.SFSObject();
        params.putInt("id", Profile.getUserId());
        Station.sfs.send(new SFS2X.ExtensionRequest("CheckinRequest", params));

    }

    private onExtensionResponse(evtParams: SFS2X.SFSEvent) {
        if ("CheckinListRequest" == evtParams.cmd) {
            this.checklist = evtParams.params.getSFSArray("list");
            var data: Array<SFS2X.SFSObject> = [];
            for (var m: number = 0; m < this.checklist.size(); m++) {
                data.push(this.checklist.getSFSObject(m));
            }
            this.list.array = data;
        } else if ("CheckinRequest" == evtParams.cmd) {
            let checkinday = evtParams.params.get("checkinday");
            let gold = evtParams.params.get("gold");
            if (gold != null) {
                Profile.setGold(gold)
            }
            let reword = evtParams.params.get("reword");
            if (reword != null) {
                this.startGoldCoin();
            }
            Profile.setCheckinDay(checkinday);
            this.list.refresh();
        }
    }

    startGoldCoin(): void {
        let dialog = this.owner as Laya.Dialog;
        let cell = this.list.getCell(Profile.getCheckinDay());
        let destPointParent = this.collectPoint.parent as Laya.Sprite;
        let destPos = dialog.globalToLocal(destPointParent.localToGlobal(new Laya.Point(this.collectPoint.x,this.collectPoint.y)));
        let amount = 10;
        for (let i = 0; i < amount; ++i) {
            let coin = this.goldcoin.create() as Laya.Sprite;
            let xpos = cell.x + Math.random() * cell.width;
            let ypos = cell.y +Math.random() * cell.height;

            let coinPos = dialog.globalToLocal(this.list.localToGlobal(new Laya.Point(xpos,ypos)));
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

    protected addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);

    }

    protected removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
    }
}