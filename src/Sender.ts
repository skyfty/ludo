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
        this.owner.on(Player.Event.Rocket, this, this.onRocket)
        this.owner.on(Player.Event.GenerateMagic, this, this.onGenerateMagic)

    }

    onAchieve() {
        var params = new SFS2X.SFSObject();
        params.putUtfString("event", Player.Event.Achieve);
        Station.sfs.send(new SFS2X.ExtensionRequest("EventRequest", params, Station.sfs.lastJoinedRoom));
    }
    onVictory() {
        var params = new SFS2X.SFSObject();
        params.putUtfString("event", Player.Event.Victory);
        Station.sfs.send(new SFS2X.ExtensionRequest("EventRequest", params, Station.sfs.lastJoinedRoom));
    }
    onChoose(name:string) {
        var params = new SFS2X.SFSObject();
        params.putUtfString("event", Player.Event.Choose);
        params.putUtfString("name", name);
        Station.sfs.send(new SFS2X.ExtensionRequest("EventRequest", params, Station.sfs.lastJoinedRoom));
    }

    onGenerateMagic(num:number,type:string) {
        var dataObj = new SFS2X.SFSObject();
        dataObj.putUtfString("event", Player.Event.GenerateMagic);
        dataObj.putInt("num", num);
        dataObj.putUtfString("type", type);
        Station.sfs.send(new SFS2X.ExtensionRequest("EventRequest", dataObj, Station.sfs.lastJoinedRoom));
    }
    onRocket(name:string,num:number) {
        var dataObj = new SFS2X.SFSObject();
        dataObj.putUtfString("event", Player.Event.Rocket);
        dataObj.putInt("num", num);
        dataObj.putUtfString("name", name);
        Station.sfs.send(new SFS2X.ExtensionRequest("EventRequest", dataObj, Station.sfs.lastJoinedRoom));
    }

    onRollEnd(num:number) {
        var dataObj = new SFS2X.SFSObject();
        dataObj.putUtfString("event", Player.Event.RollEnd);
        dataObj.putInt("num", num);
        Station.sfs.send(new SFS2X.ExtensionRequest("EventRequest", dataObj, Station.sfs.lastJoinedRoom));
    }
    
    onRollStart() {  
        var dataObj = new SFS2X.SFSObject();
        dataObj.putUtfString("event", Player.Event.RollStart);
        Station.sfs.send(new SFS2X.ExtensionRequest("EventRequest", dataObj, Station.sfs.lastJoinedRoom));
    }

}