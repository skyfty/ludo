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
           
    }
    onVictory() {
           
    }
    onChoose() {
           
    }

    onRollEnd(numOfDice:number) {
        var numOfDice = new SFS2X.SFSUserVariable("num", numOfDice);
        var event = new SFS2X.SFSUserVariable("event", Player.Event.RollEnd);
        this.station.sfs.send(new SFS2X.SetUserVariablesRequest([event, numOfDice])); 
    }
    
    onRollStart() {
        var event = new SFS2X.SFSUserVariable("event", Player.Event.RollStart);
        this.station.sfs.send(new SFS2X.SetUserVariablesRequest([event]));    
    }

}