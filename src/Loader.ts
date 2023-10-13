import { Config } from "./Config";

const { regClass, property } = Laya;

@regClass()
export class Loader extends Laya.Script {

    @property(Laya.ProgressBar)
    public progress: Laya.ProgressBar;

    onAwake(): void {
        let language = Laya.LocalStorage.getItem("language");
        if (language == null) {
            Laya.LocalStorage.setItem("language", navigator.language.split("-")[0].toLowerCase());
        }
        Laya.loader.load(
            [
                "resources/images/menubk.png",
                "resources/images/logo.png",
                "resources/images/progress.png",
                "resources/images/progress$bar.png"
            ]
        ).then(() => {
            let resArr: Array<any> = [
                "resources/images/2p.png",
                "resources/images/3p.png",
                "resources/images/4p.png",
                "resources/images/backgr.png",
                "resources/images/bluebk.png",
                "resources/images/bluebtn.png",
                "resources/images/blue_arrow.png",
                "resources/images/border.png",
                "resources/images/btnback2.png",
                "resources/images/button.png",
                "resources/images/checkbox.png",
                "resources/images/clock.png",
                "resources/images/coldcoin2.png",
                "resources/images/crown.png",
                "resources/images/current_arrow.png",
                "resources/images/dice.png",
                "resources/images/dice_roll.png",
                "resources/images/enterroomcode.png",
                "resources/images/glodcoin.png",
                "resources/images/greenbutton.png",
                "resources/images/green_arrow.png",
                "resources/images/logo.png",
                "resources/images/Ludo_board.png",
                "resources/images/manger.png",
                "resources/images/menubk.png",
                "resources/images/menu_avatar.png",
                "resources/images/menu_setting.png",
                "resources/images/menu_title_bk.png",
                "resources/images/music_checkbox.png",
                "resources/images/onlinemultiplayer.png",
                "resources/images/pawns_red.png",
                "resources/images/pawns_yellow.png",
                "resources/images/pawns_blue.png",
                "resources/images/pawns_green.png",
                "resources/images/play2.png",
                "resources/images/playwithfriends.png",
                "resources/images/plusbtn.png",
                "resources/images/ppback.png",
                "resources/images/progress$bar.png",
                "resources/images/progress.png",
                "resources/images/puddle.png",
                "resources/images/reduce.png",
                "resources/images/red_arrow.png",
                "resources/images/return.png",
                "resources/images/sack.png",
                "resources/images/selectplayers.png",
                "resources/images/selectprofilepicture.png",
                "resources/images/selectyourcolor.png",
                "resources/images/settings.png",
                "resources/images/shoe.png",
                "resources/images/sound_checkbox.png",
                "resources/images/star.png",
                "resources/images/tab.png",
                "resources/images/titlecoin.png",
                "resources/images/twinkle_star.png",
                "resources/images/userav.png",
                "resources/images/vs.png",
                "resources/images/vscomputer.png",
                "resources/images/win.png",
                "resources/images/winner.png",
                "resources/images/yellow_arrow.png",
                "resources/images/jinguang.png",
                "resources/images/sandglass.png",
                "resources/images/airplane.png",
                "resources/images/messagetip1.png",
                "resources/images/messagetip2.png",
                "resources/images/messagetip3.png",
                "resources/images/messagetip4.png",
                "resources/images/messagetip5.png",
                "resources/images/messagetip6.png",
                "resources/images/profile.png",
                "resources/images/statistics.png",
                "resources/images/bk2.png",
                "resources/images/loser.png",
                "resources/images/wellplayed.png",
                "resources/images/youarethewinner.png",
                "resources/images/leaderboard.png",
                "resources/images/ranking.png",
                "resources/images/ranklist.png",
                "resources/images/checkin.png",
                "resources/images/dailycheckin.png",
                "resources/images/duihao.png",
                "resources/images/plus.png",
                "resources/images/plusbtn.png",
                "resources/images/blackmark.png",
                "resources/images/defender.png",
                "resources/images/magic.png",
                "resources/images/magicprops.png",
                "resources/images/delete.png",
                "resources/images/buddies.png",
                "resources/images/buddybtn.png",
                "resources/images/giftbtn.png",
                "resources/images/props.png",
                "resources/images/selectprofiletrim.png",

                { url: "game.ls", type: Laya.Loader.HIERARCHY },
                { url: "menu.ls", type: Laya.Loader.HIERARCHY },
                { url: "militant.ls", type: Laya.Loader.HIERARCHY },
                { url: "invite.ls", type: Laya.Loader.HIERARCHY },

                { url: "dialog/chamber.lh", type: Laya.Loader.HIERARCHY },
                { url: "dialog/endgame.lh", type: Laya.Loader.HIERARCHY },
                { url: "dialog/exitroom.lh", type: Laya.Loader.HIERARCHY },
                { url: "dialog/parallel.lh", type: Laya.Loader.HIERARCHY },
                { url: "dialog/roomjoinerror.lh", type: Laya.Loader.HIERARCHY },
                { url: "dialog/selectcolor.lh", type: Laya.Loader.HIERARCHY },
                { url: "dialog/settings.lh", type: Laya.Loader.HIERARCHY },
                { url: "dialog/buycoin.lh", type: Laya.Loader.HIERARCHY },
                { url: "dialog/goldcoin.lh", type: Laya.Loader.HIERARCHY },
                { url: "dialog/profile.lh", type: Laya.Loader.HIERARCHY },
                { url: "dialog/checkin.lh", type: Laya.Loader.HIERARCHY },
                { url: "dialog/ranklist.lh", type: Laya.Loader.HIERARCHY },
                { url: "dialog/statistics.lh", type: Laya.Loader.HIERARCHY },
                { url: "dialog/nonet.lh", type: Laya.Loader.HIERARCHY },

                { url: "sounds/chess.mp3", type: Laya.Loader.BUFFER },
                { url: "sounds/click.mp3", type: Laya.Loader.BUFFER },
                { url: "sounds/kick.mp3", type: Laya.Loader.BUFFER },
                { url: "sounds/move.mp3", type: Laya.Loader.BUFFER },
                { url: "sounds/jinbi.mp3", type: Laya.Loader.BUFFER },
                { url: "sounds/home.mp3", type: Laya.Loader.BUFFER },
                { url: "sounds/message.mp3", type: Laya.Loader.BUFFER },
                { url: Config.TRANSLATE_URL, type: Laya.Loader.JSON },
            ];

            Laya.loader.load(resArr, null, Laya.Handler.create(this, this.onLoading, null, false)).then(() => {
                this.progress.value = 1;
                Laya.Scene.open("menu.ls");
            });
            Laya.loader.on(Laya.Event.ERROR, this, this.onError);
        });

    }

    /**
   * 当报错时打印错误
   * @param err 报错信息
   */
    onError(err: string): void {
        console.log("加载失败: " + err);
    }

    /**
     * 加载时侦听
     */
    onLoading(progress: number): void {
        if (progress > 0.92) this.progress.value = 0.95;
        else this.progress.value = progress;
    }
}