const { regClass, property } = Laya;
import { Station } from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";
import { Profile } from "./Profile";

export class Gold {
    public static reason(reason:string) {
        var params = new SFS2X.SFSObject();
        params.putUtfString("reason", reason);
        params.putInt("id", Profile.getUserId());
        Station.sfs.send(new SFS2X.ExtensionRequest("Gold", params));
    }
}