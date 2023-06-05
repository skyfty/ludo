const { regClass, property } = Laya;
import * as Player from "./Player";
import * as SFS2X from "../node_modules/sfs2x-api";
import  {Station} from "./Station";
import { Profile } from "./Profile";

@regClass()
export class Generalize extends Laya.Script {
    constructor(type:string) {
        super();
        this.type = type;
    }

    private type = "";
    private startTime = Date.now();
    
    onAwake(): void {
        this.owner.on(Player.Event.Victory, this, this.onVictory)
    }

    onVictory() {
        var params = new SFS2X.SFSObject();
        params.putInt("id", Profile.getUserId());
        params.putUtfString("type", this.type);
        params.putInt("duration", Date.now() - this.startTime);
        Station.sfs.send(new SFS2X.ExtensionRequest("GeneralizeRequest", params));
    }
}