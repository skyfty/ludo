
const { regClass, property,SoundManager } = Laya;
import { ComputerParallel } from "./ComputerParallel";
import { OnlineParallel } from "./OnlineParallel";

@regClass()
export class Menu extends Laya.Script {
    @property(Laya.Button)
    public challengeComputer: Laya.Button;

    @property(Laya.Button)
    public challengeExtreme: Laya.Button;

    @property(Laya.Button)
    public challengeFriend: Laya.Button;

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
        this.challengeFriend.on(Laya.Event.CLICK, this, this.onChallengeFriend);
        this.settings.on(Laya.Event.CLICK, this, this.onSettings);
    }

    onStart(): void {
        Laya.SoundManager.musicMuted =Laya.LocalStorage.getItem("musicMuted") == "on";
        Laya.SoundManager.soundMuted =Laya.LocalStorage.getItem("soundMuted") == "on";
        SoundManager.playMusic("sounds/menu.mp3", 0);
    }
    onChallengeFriend() {
        Laya.Scene.open("dialog/chamber.lh", false);
    }
    
    onChallengeComputer() {
        this.openParallelDlg(Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
            dlg.addComponentInstance(new ComputerParallel());
            dlg.on(Laya.Event.PLAYED,this, (color:string, num:number)=>{
                dlg.close();
                Laya.Scene.open("game.ls", true, { "type": "computer", "color": color,"number":num });
            });
        }));
    }
    
    onChallengeExtreme() {
        this.openParallelDlg( Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
            dlg.addComponentInstance(new OnlineParallel());
            dlg.on(Laya.Event.PLAYED,this, (color:string, roomId:number)=>{
                dlg.close();
                dlg.removeSelf();
                Laya.Scene.open("partner.ls", true,{"color":color});
            });
            dlg.on(Laya.Event.CLOSE,dlg, dlg.close);
        }));
    }

    openParallelDlg(complete: Laya.Handler) {
        Laya.Scene.open("dialog/parallel.lh", false, null, complete);
    }

    onSettings() {
        Laya.Scene.open("dialog/settings.lh", false, null, Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
            dlg.getChildByName("return").on(Laya.Event.CLICK, dlg, dlg.close);
        }));
    }

}