const { regClass, property } = Laya;
import * as SFS2X from "../node_modules/sfs2x-api";
import { UserInfo } from "./UserInfo";

@regClass()
export class StatisticsInfo extends UserInfo {

    @property(Laya.ProgressBar)
    public levelProcess: Laya.ProgressBar;
 
    constructor() {
        super();
    }

    public setProfile(profile:SFS2X.SFSObject) {
        super.setProfile(profile);
        let rank = profile.getInt("rank");
        this.level.text = Math.floor(rank / 100).toString();
        let processValue = rank % 100;
        this.levelProcess.value = processValue / 100;
    }

}