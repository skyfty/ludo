const { regClass, property } = Laya;
import * as Player from "./Player";
import * as SFS2X from "../node_modules/sfs2x-api";
import  {Station} from "./Station";
@regClass()
export class Sender extends Laya.Script {
    
    constructor() {
        super();
    }

    onAwake(): void {
        this.owner.on(Player.Event.RollStart, this, this.onRollStart);
        this.owner.on(Player.Event.RollEnd, this, this.onRollEnd)
        this.owner.on(Player.Event.Choose, this, this.onChoose)
        this.owner.on(Player.Event.Achieve, this, this.onAchieve)
        this.owner.on(Player.Event.Victory, this, this.onVictory)
    }

    onAchieve() {
        var dataObj = new SFS2X.SFSObject();
        dataObj.putUtfString("event", Player.Event.Achieve);
        Station.sfs.send(new SFS2X.ObjectMessageRequest(dataObj));
    }
    onVictory() {
        var dataObj = new SFS2X.SFSObject();
        dataObj.putUtfString("event", Player.Event.Victory);
        Station.sfs.send(new SFS2X.ObjectMessageRequest(dataObj));

    }
    onChoose(name:string) {
        var dataObj = new SFS2X.SFSObject();
        dataObj.putUtfString("event", Player.Event.Choose);
        dataObj.putUtfString("name", name);
        Station.sfs.send(new SFS2X.ObjectMessageRequest(dataObj));

    }

    onRollEnd(num:number) {
        var dataObj = new SFS2X.SFSObject();
        dataObj.putUtfString("event", Player.Event.RollEnd);
        dataObj.putInt("num", num);
        Station.sfs.send(new SFS2X.ObjectMessageRequest(dataObj));

    }
    
    onRollStart() {  
        var dataObj = new SFS2X.SFSObject();
        dataObj.putUtfString("event", Player.Event.RollStart);
        Station.sfs.send(new SFS2X.ObjectMessageRequest(dataObj));
    }

}