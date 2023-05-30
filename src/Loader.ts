const { regClass, property } = Laya;

@regClass()
export class Loader extends Laya.Script {

    @property(Laya.ProgressBar)
    public progress: Laya.ProgressBar;

    onAwake(): void {
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
                "resources/images/blue_arrow.png",
                "resources/images/border.png",
                "resources/images/btnback2.png",
                "resources/images/checkbox.png",
                "resources/images/createroom.png",
                "resources/images/crown.png",
                "resources/images/current_arrow.png",
                "resources/images/dice.png",
                "resources/images/dice_roll.png",
                "resources/images/enterroomcode.png",
                "resources/images/green_arrow.png",
                "resources/images/joinroom.png",
                "resources/images/logo.png",
                "resources/images/Ludo_board.png",
                "resources/images/manager_disabled.png",
                "resources/images/manger.png",
                "resources/images/menubk.png",
                "resources/images/menu_avatar.png",
                "resources/images/menu_setting.png",
                "resources/images/menu_title_bk.png",
                "resources/images/music_checkbox.png",
                "resources/images/okay.png",
                "resources/images/onlinemultiplayer.png",
                "resources/images/origin_blue.png",
                "resources/images/origin_green.png",
                "resources/images/origin_red.png",
                "resources/images/origin_yellow.png",
                "resources/images/pawns_01.png",
                "resources/images/pawns_02.png",
                "resources/images/pawns_03.png",
                "resources/images/pawns_04.png",
                "resources/images/play.png",
                "resources/images/playwithfriends.png",
                "resources/images/puddle.png",
                "resources/images/red_arrow.png",
                "resources/images/return.png",
                "resources/images/robot.png",
                "resources/images/selectplayers.png",
                "resources/images/selectyourcolor.png",
                "resources/images/settings.png",
                "resources/images/shoe.png",
                "resources/images/sound_checkbox.png",
                "resources/images/star.png",
                "resources/images/tab.png",
                "resources/images/tip3.png",
                "resources/images/userav.png",
                "resources/images/vs.png",
                "resources/images/vscomputer.png",
                "resources/images/yellow_arrow.png",

                { url: "game.ls", type: Laya.Loader.HIERARCHY },
                { url: "menu.ls", type: Laya.Loader.HIERARCHY },
                { url: "partner.ls", type: Laya.Loader.HIERARCHY },
                { url: "dialog/chamber.lh", type: Laya.Loader.HIERARCHY },
                { url: "dialog/endgame.lh", type: Laya.Loader.HIERARCHY },
                { url: "dialog/exitroom.lh", type: Laya.Loader.HIERARCHY },
                { url: "dialog/invite.lh", type: Laya.Loader.HIERARCHY },
                { url: "dialog/parallel.lh", type: Laya.Loader.HIERARCHY },
                { url: "dialog/roomjoinerror.lh", type: Laya.Loader.HIERARCHY },
                { url: "dialog/selectcolor.lh", type: Laya.Loader.HIERARCHY },
                { url: "dialog/settings.lh", type: Laya.Loader.HIERARCHY },
                { url: "sounds/chess.mp3", type: Laya.Loader.BUFFER },
                { url: "sounds/click.mp3", type: Laya.Loader.BUFFER },
                { url: "sounds/kick.mp3", type: Laya.Loader.BUFFER },
                { url: "sounds/menu.mp3", type: Laya.Loader.BUFFER },
                { url: "sounds/move.mp3", type: Laya.Loader.BUFFER },
                { url: "sounds/win.mp3", type: Laya.Loader.BUFFER },
            ];

            Laya.loader.load(resArr, null, Laya.Handler.create(this, this.onLoading, null, false)).then(() => {
                this.progress.value = 0.98;
             
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