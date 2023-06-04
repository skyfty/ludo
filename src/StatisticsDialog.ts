const { regClass, property } = Laya;
import { Profile } from "./Profile";

import * as SFS2X from "../node_modules/sfs2x-api";
import { Station } from "./Station";
import { StatisticsInfo } from "./StatisticsInfo";

@regClass()
export class StatisticsDialog extends Laya.Dialog {
 
    constructor() {
        super();
    }

    onAwake(): void {
        this.addStationListener();
    }
    
    onDestroy(): void {
        this.removeStationListener();
    }

    onOpened(param: any) {
       var params = new SFS2X.SFSObject();
       params.putInt("id",  param.userid);
       Station.sfs.send(new SFS2X.ExtensionRequest("GetProfileRequest", params));
    }

    private onExtensionResponse(evtParams: SFS2X.SFSEvent) {
        if ("GetProfileRequest" == evtParams.cmd) {
            this.getComponent(StatisticsInfo).setProfile(evtParams.params);
        }
    }
    public addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);

    }

    public removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
    }

}