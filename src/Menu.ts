
const { regClass, property,SoundManager } = Laya;
import { CheckinDialog } from "./CheckinDialog";
import { ComputerParallel } from "./ComputerParallel";
import { OnlineParallel } from "./OnlineParallel";
import { Profile } from "./Profile";

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

    @property(Laya.Sprite)
    public ranklist: Laya.Sprite;

    
    @property(Laya.Sprite)
    public checkin: Laya.Sprite;

    @property(Laya.Sprite)
    public level: Laya.Sprite;
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
            Laya.Scene.open("dialog/buycoin.lh", true);
        });
        this.ranklist.on(Laya.Event.CLICK, this, ()=>{
            Laya.Scene.open("dialog/ranklist.lh", true);
        });

        
        this.checkin.on(Laya.Event.CLICK, this, ()=>{
            Laya.Scene.open("dialog/checkin.lh", true, null, Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
                dlg.getComponent(CheckinDialog).checkinListRequest(this.goldcoin);
            }));
        });

        this.level.on(Laya.Event.CLICK, this, ()=>{
            let param:any = {
                "userid":Profile.getUserId()
            };
            Laya.Scene.open("dialog/statistics.lh", true,param);
        });
    }

    onStart(): void {
        Laya.SoundManager.musicMuted =Laya.LocalStorage.getItem("musicMuted") == "on";
        Laya.SoundManager.soundMuted =Laya.LocalStorage.getItem("soundMuted") == "on";
        SoundManager.playMusic("sounds/menu.mp3", 0);
    }
    
    onAvatarClick() {
        Laya.Scene.open("dialog/profile.lh", true);
    }
    
    onChallengeFriend() {
        Laya.Scene.open("dialog/chamber.lh", true);
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
        Laya.Scene.open("dialog/settings.lh", false, null);
    }

}