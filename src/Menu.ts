
const { regClass, property, SoundManager } = Laya;
import { CheckinDialog } from "./CheckinDialog";
import { ComputerParallel } from "./ComputerParallel";
import { OnlineParallel } from "./OnlineParallel";
import { Profile } from "./Profile";
import { Buycoin } from "./Buycoin";
import { Station } from "./Station";
import { Config } from "./Config";

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

    // ggg4() {


    //     let MagicMap:any[] = [];
    //     for(let i = 0; i < 30; ++i) {
    //         let makeup:any = {};

    //             let ranext:number[] = [];
    //             for(let j = 0; j < 3; j++) {
    //                 let num  = this.ggg222(ranext);
    //                 makeup[num] = {
    //                     name: "rocket",
    //                     clip: 2
    
    //                 };
    //             }
    //             for(let j = 0; j < 3; j++) {
    //                 let num  = this.ggg222(ranext);
    //                 makeup[num] = {
    //                     name: "defender",
    //                     clip: 0
    
    //                 };
    //             }
    //             for(let j = 0; j < 3; j++) {
    //                 let num  = this.ggg222(ranext);
    //                 makeup[num] = {
    //                     name: "plus",
    //                     clip: 1
    
    //                 };
    //             }

    //             MagicMap.push({"makeup":makeup});

                
    //     }

    //     console.log(JSON.stringify(MagicMap));
    // }

    // ggg222( ranext:number[]) {
    //     let num  = 0;
    //     while(true) {

    //         num =Math.floor(Math.random() * Config.NUMBER_UNIVERSAL_HOLD);
    //         if (num == 0 || num == 8 ||num == 13 ||num == 21 ||num == 26 ||num == 34 || num == 39 || num == 47 || ranext.indexOf(num) != -1 ) {
    //             continue;
    //         }
    //         else {
    //             ranext.push(num);
    //             break;
    //         }
    //     }
    //     return num;
    // }

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