
const { regClass, property,SoundManager } = Laya;
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
        this.parallel.on(Station.Event.LoginError, this, this.onLoginError);
    }

    onStart(): void {
        SoundManager.playMusic("sounds/menu.mp3", 1);
    }

    onLoginError() {
        
    }

    onChallengeComputer() {
        SoundManager.playSound("sounds/click.mp3", 1);
        this.openParallelDlg(Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
            dlg.addComponentInstance(new ComputerParallel());
            dlg.on(Laya.Event.PLAYED,this, (color:string, num:number)=>{
                dlg.close();
                SoundManager.stopMusic();
                Laya.Scene.open("game.ls", true, { "type": "computer", "color": color,"number":num });
            });
        }));
    }
    
    onChallengeExtreme() {
        SoundManager.playSound("sounds/click.mp3", 1);
        this.openParallelDlg( Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
            dlg.addComponentInstance(new OnlineParallel());
            dlg.on(Laya.Event.PLAYED,this, (num:number)=>{
                dlg.close();
                SoundManager.stopMusic();
                Laya.Scene.open("game.ls", true, { "type": "extreme",number: num });
            });
            dlg.on(Laya.Event.CLOSE,this, (num:number)=>{
                dlg.close();
            });
        }));
    }

    openParallelDlg(complete: Laya.Handler) {
        Laya.Scene.open("dialog/parallel.lh", false, null, complete);
    }

    onSettings() {
       
    }

}