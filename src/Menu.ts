
const { regClass, property, SoundManager } = Laya;
import { CheckinDialog } from "./CheckinDialog";
import { ComputerParallel } from "./ComputerParallel";
import { OnlineParallel } from "./OnlineParallel";
import { Profile } from "./Profile";
import { Buycoin } from "./Buycoin";
import { Station } from "./Station";
import { Config } from "./Config";
import i18n from "../node_modules/roddeh-i18n";

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

    
    @property(Laya.Button)
    public buddy: Laya.Button;

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

    
    @property(Laya.Sprite)
    public trims: Laya.Sprite;

    constructor() {
        super();
    }

    onAwake(): void {
        this.challengeComputer.on(Laya.Event.CLICK, this, this.onChallengeComputer);
        this.challengeExtreme.on(Laya.Event.CLICK, this, this.onChallengeExtreme);
        this.challengeFriend.on(Laya.Event.CLICK, this, this.onChallengeFriend);
        this.settings.on(Laya.Event.CLICK, this, this.onSettings);
        this.avatar.on(Laya.Event.CLICK, this, this.onAvatarClick);
        this.goldcoin.on(Laya.Event.CLICK, this, () => {
            if (Station.isUnconnected()) {
                Laya.Scene.open("dialog/nonet.lh");
            } else {
                Laya.Scene.open("dialog/buycoin.lh", true, null, Laya.Handler.create(this, (dlg: Laya.Dialog) => {
                    dlg.getComponent(Buycoin).setCollectPoint(this.goldcoin);
                }));
            }
        });
        this.ranklist.on(Laya.Event.CLICK, this, () => {
            if (Station.isUnconnected()) {
                Laya.Scene.open("dialog/nonet.lh");
            } else {
                Laya.Scene.open("dialog/ranklist.lh", true);
            }
        });

        this.trims.on(Laya.Event.CLICK, this, () => {
            if (Station.isUnconnected()) {
                Laya.Scene.open("dialog/nonet.lh");
            } else {
                Laya.Scene.open("dialog/trims.lh", true);
            }
        });

        this.checkin.on(Laya.Event.CLICK, this, () => {
            if (Station.isUnconnected()) {
                Laya.Scene.open("dialog/nonet.lh");
            } else {
                Laya.Scene.open("dialog/checkin.lh", true, null, Laya.Handler.create(this, (dlg: Laya.Dialog) => {
                    dlg.getComponent(CheckinDialog).checkinListRequest(this.goldcoin);
                }));
            }
        });

        this.level.on(Laya.Event.CLICK, this, () => {
            let param: any = {
                "userid": Profile.getUserId()
            };
            Laya.Scene.open("dialog/statistics.lh", true, param);
        });

        this.buddy.on(Laya.Event.CLICK, this, ()=>{
            if (Station.isUnconnected()) {
                Laya.Scene.open("dialog/nonet.lh");
            } else {
                Laya.Scene.open("dialog/buddy.lh", true);
            }
        });
    }
    onStart(): void {
        Laya.SoundManager.musicMuted = Laya.LocalStorage.getItem("musicMuted") == "on";
        Laya.SoundManager.soundMuted = Laya.LocalStorage.getItem("soundMuted") == "on";
        SoundManager.playMusic("sounds/menu.mp3", 0);
    }

    onAvatarClick() {
        Laya.Scene.open("dialog/profile.lh", true);
    }

    onChallengeFriend() {
        if (Station.isUnconnected()) {
            Laya.Scene.open("dialog/nonet.lh");
        } else {
            Laya.Scene.open("dialog/chamber.lh", true);
        }
    }

    onChallengeComputer() {
        this.openParallelDlg(Laya.Handler.create(this, (dlg: Laya.Dialog) => {
            dlg.addComponentInstance(new ComputerParallel());
        }));
    }

    onChallengeExtreme() {
        this.openParallelDlg(Laya.Handler.create(this, (dlg: Laya.Dialog) => {
            dlg.addComponentInstance(new OnlineParallel());
        }));
    }

    openParallelDlg(complete: Laya.Handler) {
        if (Station.isUnconnected()) {
            Laya.Scene.open("dialog/nonet.lh");
        } else {
            Laya.Scene.open("dialog/parallel.lh", false, null, complete);
        }
    }

    onSettings() {
        Laya.Scene.open("dialog/settings.lh", false, null);
    }

}