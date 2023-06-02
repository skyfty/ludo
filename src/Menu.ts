
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

    @property(Laya.Box)
    public avatar: Laya.Box;

    @property(Laya.Sprite)
    public goldcoin: Laya.Sprite;

    constructor() {
        super();
    }

    onAwake(): void {
        this.challengeComputer.on(Laya.Event.CLICK, this, this.onChallengeComputer);
        this.challengeExtreme.on(Laya.Event.CLICK, this, this.onChallengeExtreme);
        this.challengeFriend.on(Laya.Event.CLICK, this, this.onChallengeFriend);
        this.settings.on(Laya.Event.CLICK, this, this.onSettings);
        this.avatar.on(Laya.Event.CLICK, this, this.onAvatarClick);
        this.goldcoin.on(Laya.Event.CLICK, this, ()=>{
            Laya.Scene.open("dialog/buycoin.lh", false);
        });
    }

    onStart(): void {
        Laya.SoundManager.musicMuted =Laya.LocalStorage.getItem("musicMuted") == "on";
        Laya.SoundManager.soundMuted =Laya.LocalStorage.getItem("soundMuted") == "on";
        SoundManager.playMusic("sounds/menu.mp3", 0);

        
    }
    onAvatarClick() {
        Laya.Scene.open("dialog/profile.lh", false);
    }
    
    onChallengeFriend() {
        Laya.Scene.open("dialog/chamber.lh", false);
    }
    
    onChallengeComputer() {
        this.openParallelDlg(Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
            dlg.addComponentInstance(new ComputerParallel());
        }));
    }
    
    onChallengeExtreme() {
        this.openParallelDlg( Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
            dlg.addComponentInstance(new OnlineParallel());
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