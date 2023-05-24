const { regClass, property } = Laya;
import * as Player from "./Player";
import * as SFS2X from "../node_modules/sfs2x-api";
import * as Station from "./Station";
@regClass()
export class Sender extends Laya.Script {
    
    station:Station.Station = null;

    constructor(st:Station.Station) {
        super();
        this.station = st;
    }

    onAwake(): void {
        this.owner.on(Player.Event.RollStart, this, this.onRollStart);
        this.owner.on(Player.Event.RollEnd, this, this.onRollEnd)
        this.owner.on(Player.Event.Choose, this, this.onChoose)
        this.owner.on(Player.Event.Achieve, this, this.onAchieve)
        this.owner.on(Player.Event.Victory, this, this.onVictory)
    }

    onAchieve() {
        let event = {
            "event":Player.Event.Achieve
        }; 
        this.station.sfs.send(new SFS2X.PublicMessageRequest(JSON.stringify(event)));
    }
    onVictory() {
        let event = {
            "event":Player.Event.Victory
        }; 
        this.station.sfs.send(new SFS2X.PublicMessageRequest(JSON.stringify(event)));

    }
    onChoose(name:string) {
        let event = {
            "event":Player.Event.Choose,
            "name":name
        }; 
        this.station.sfs.send(new SFS2X.PublicMessageRequest(JSON.stringify(event)));

    }

    onRollEnd(num:number) {
        let event = {
            "event":Player.Event.RollEnd,
            "num":num
        }; 
        this.station.sfs.send(new SFS2X.PublicMessageRequest(JSON.stringify(event)));
    }
    
    onRollStart() {  
        let event = {
            "event":Player.Event.RollStart
        }; 
        this.station.sfs.send(new SFS2X.PublicMessageRequest(JSON.stringify(event)));
    }

}