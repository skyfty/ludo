const { regClass, property } = Laya;
import { Station } from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";
import { RanklistItem } from "./RanklistItem";

@regClass()
export class RanklistDialog extends Laya.Script {

    @property(Laya.List)
    public list: Laya.List;
    private ranks: SFS2X.SFSArray = null;

    constructor() {
        super();
    }


    onAwake(): void {
        this.addStationListener();
        this.list.renderHandler = new Laya.Handler(this, this.updateItem);
    }
    onStart(): void {
        Station.sfs.send(new SFS2X.ExtensionRequest("RanklistRequest"));
    }

    onDestroy(): void {
        this.removeStationListener();
    }
    private updateItem(cell: any, index: number): void {
        let data:SFS2X.SFSObject = this.ranks.getSFSObject(index);
        let item = cell.getComponent(RanklistItem) as RanklistItem;
        let avatar =  data.getInt("avatar");
        item.avatar.index =avatar;
        item.nickname.text = data.getUtfString("nickname");
        item.rank.text = data.getInt("rank");
        item.icon.index = Math.min(index,3);
    }

    private onExtensionResponse(evtParams: SFS2X.SFSEvent) {
        if ("RanklistRequest" == evtParams.cmd) {
            this.ranks = evtParams.params.getSFSArray("list");
            var data: Array<SFS2X.SFSObject> = [];
            for (var m: number = 0; m < this.ranks.size(); m++) {
                data.push(this.ranks.getSFSObject(m));
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