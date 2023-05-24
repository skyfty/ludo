
const { regClass, property } = Laya;
import * as Station from "./Station";
import { ComputerParallel } from "./ComputerParallel";
import { OnlineParallel } from "./OnlineParallel";

@regClass()
export class Menu extends Laya.Script {
    @property(Laya.Button)
    public challengeComputer: Laya.Button;

    @property(Laya.Button)
    public challengeExtreme: Laya.Button;

    @property(Laya.Button)
    public settings: Laya.Button;

    @property(Laya.Prefab)
    public parallel:Laya.Prefab;

    constructor() {
        super();
    }

    onAwake(): void {
        this.challengeComputer.on(Laya.Event.CLICK, this, this.onChallengeComputer);
        this.challengeExtreme.on(Laya.Event.CLICK, this, this.onChallengeExtreme);
        this.settings.on(Laya.Event.CLICK, this, this.onSettings);

        this.owner.on(Station.Event.Join, this, this.onJoinExtreme);
        this.owner.on(Station.Event.Exit, this, this.onExitExtreme);
        this.owner.on(Station.Event.Error, this, this.onExtremeError);
    }
    onChallengeComputer() {
        Laya.Scene.open("dialog/parallel.lh", false, null, Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
            dlg.addComponentInstance(new ComputerParallel());
            dlg.on(Laya.Event.PLAYED,this, (color:string, num:number)=>{
                dlg.close();
                Laya.Scene.open("game.ls", false, { "type": "computer", "color": color,"number":num });
            });
        }));
    }
    
    onChallengeExtreme() {
        Laya.Scene.open("dialog/parallel.lh", false, null, Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
            let st = this.owner.getComponent(Station.Station) as Station.Station;   
            dlg.addComponentInstance(new OnlineParallel(st));
            dlg.on(Laya.Event.PLAYED,this, (color:string, num:number)=>{
                dlg.close();
                Laya.Scene.open("game.ls", false, { "type": "extreme", "color": color,"number":num, "station": st  });
            });
        }));
    }

    onSettings() {
       
    }

    onJoinExtreme() {
    }

    onExitExtreme() {
    }
    onExtremeError() {
    }
}