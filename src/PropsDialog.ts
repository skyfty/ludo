const { regClass, property } = Laya;

import { Station } from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";
import { PropsItem } from "./PropsItem";
import { PropsList } from "./PropsList";
import * as Player from "./Player";
import { Profile } from "./Profile";

@regClass()
export class PropsDialog extends  Laya.Dialog{
    public userId:number = null;

    constructor() {
        super();
    }

    onAwake(): void {
        this.on(Player.Event.UseProps, this, this.onUseProps);
        this.addStationListener();
    }

    onUseProps(index: number) {
        if (Profile.getGold() < 10) {
            Laya.Scene.open("dialog/nogold.lh", false);
        } else {
            var params = new SFS2X.SFSObject();
            params.putInt("id",  this.userId);
            params.putInt("prop",  index);
            params.putInt("amount",10);
            Station.sfs.send(new SFS2X.ExtensionRequest("UsePropsRequest", params));
        }
    }

    onOpened(params: any) {
        this.userId =  params.userid;
    }

    onDestroy(): void {
        this.removeStationListener();
    } 

    private onExtensionResponse(evtParams: SFS2X.SFSEvent) {
        if ("UsePropsRequest" == evtParams.cmd) {
            let gold = evtParams.params.get("gold");
            if (gold != null) {
                Profile.setGold(gold)
            }
            this.close();
        } 
    }

    protected addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
    }

    protected removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
    }
}