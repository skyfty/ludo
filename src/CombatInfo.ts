const { regClass, property } = Laya;
import * as SFS2X from "../node_modules/sfs2x-api";
import { Station } from "./Station";
import { Profile } from "./Profile";
import { CombatWin } from "./CombatWin";
import { CombatLost } from "./CombatLost";

@regClass()
export class CombatInfo extends Laya.Script {
 
    @property(Laya.ViewStack)
    public viewStack: Laya.ViewStack;

    
    @property(CombatWin)
    public win: CombatWin;


    @property(CombatLost)
    public lost: CombatLost;

    
    @property(Laya.Button)
    public returnbtn: Laya.Button;


    constructor() {
        super();
    }

    onAwake(): void {
        this.addStationListener();
        this.returnbtn.on(Laya.Event.CLICK, this, ()=>{
            Laya.Dialog.closeAll();
            Laya.Scene.open("menu.ls");
        });
    }
    
    onDestroy(): void {
        this.removeStationListener();
    }


    private onExtensionResponse(evtParams: SFS2X.SFSEvent) {
        if ("CombatRequest" == evtParams.cmd) {
            if (this.viewStack.selectedIndex == 0) {
                this.win.win.text = evtParams.params.getInt("vscomputer_wins");
                this.win.lost.text =  evtParams.params.getInt("vscomputer_lost");
                this.win.gold.text =  evtParams.params.getInt("earn");
            } else {
                this.lost.win.text =  evtParams.params.getInt("vscomputer_wins");
                this.lost.lost.text =evtParams.params.getInt("vscomputer_lost");
            }
        }
    }

    public addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);

    }

    public removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
    }
    public setProfile(isSelf:number) {
        this.viewStack.selectedIndex =isSelf;
        var params = new SFS2X.SFSObject();
        params.putInt("id", Profile.getUserId());
        params.putInt("victory",isSelf);
        Station.sfs.send(new SFS2X.ExtensionRequest("CombatRequest", params));
    }

}