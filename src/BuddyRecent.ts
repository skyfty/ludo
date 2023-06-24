const { regClass, property } = Laya;
import { Station } from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";
import { BuddyItem } from "./BuddyItem";

@regClass()
export class BuddyRecent extends Laya.Script {
    @property(Laya.List)
    public list: Laya.List;

    constructor() {
        super();
    }


    onAwake(): void {
        this.addStationListener();
        this.list.renderHandler = new Laya.Handler(this, this.updateItem);
    }

    onStart(): void {
        this.getRecentList();
    }

    getRecentList():void {
        var params = new SFS2X.SFSObject();
        Station.sfs.send(new SFS2X.ExtensionRequest("GetRecentRequest", params));
    }

    onDestroy(): void {
        this.removeStationListener();
    }

    private updateItem(cell: any, index: number): void {
        let data = this.list.array[index];
        let item = cell.getComponent(BuddyItem) as BuddyItem;
        let avatar =  data.getInt("avatar");
        item.avatar.index = avatar != null ? avatar:0;
        item.nickname.text = data.getUtfString("nickname");
        
        item.button.on(Laya.Event.CLICK, this, ()=>{
            var params = new SFS2X.SFSObject();
            params.putInt("id", data.getInt("id"));
            Station.sfs.send(new SFS2X.ExtensionRequest("AddRecentBuddyRequest", params));
        });
    }

    
    public addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);

    }
    public removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);

    }
    
    private onExtensionResponse(evtParams: SFS2X.SFSEvent) {
        if ("GetRecentRequest" == evtParams.cmd) {
            let recentUsers = evtParams.params.getSFSArray("list");
            let data: Array<SFS2X.SFSObject> = [];
            for (var m: number = 0; m < recentUsers.size(); m++) {
                data.push(recentUsers.getSFSObject(m));
            }
            this.list.array = data;
        } else  if ("AddRecentBuddyRequest" == evtParams.cmd) {
            let userid = evtParams.params.getInt("id");
            Station.sfs.send(new SFS2X.AddBuddyRequest(userid.toString()));
            this.getRecentList();
        } 
    }
}