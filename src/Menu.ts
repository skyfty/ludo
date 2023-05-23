
const { regClass, property } = Laya;
import * as Station from "./Station";
import { Parallel } from "./Parallel";
import * as SFS2X from "../node_modules/sfs2x-api";

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
        Laya.Scene.open("game.ls", false, {  "type": "computer", "number":2 });
    }
    
    onChallengeExtreme() {
        let st = this.owner.getComponent(Station.Station) as Station.Station;
        st.join(st.desks[0]);
    }

    onSettings() {
       
    }

    onParallelDialogShow(dlg:Laya.Dialog) {
        let st = this.owner.getComponent(Station.Station) as Station.Station;   
        let parallel = dlg.getComponent(Parallel);  
        parallel.station = st;   
        dlg.on(Laya.Event.CLOSE,this, ()=>{
            Laya.Scene.open("game.ls", false, { "type": "extreme", "station": st });
        });
        parallel.listen();
    }

    onJoinExtreme() {
        Laya.Scene.open("dialog/parallel.lh", false, null, Laya.Handler.create(this, this.onParallelDialogShow));
    }

    onExitExtreme() {
    }
    onExtremeError() {
        Laya.Scene.open("game.ls", false, { "text": "没有勾选项，请先勾选" });
    }
}