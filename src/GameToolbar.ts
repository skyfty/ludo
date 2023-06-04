import { Dialog } from "./Dialog";

const { regClass, property } = Laya;

@regClass()
export class GameToolbar extends Laya.Script {
    @property(Laya.Sprite)
    public backButton: Laya.Sprite;

    constructor() {
        super();
    }

    onAwake(): void {
        this.backButton.on(Laya.Event.CLICK, this, ()=>{
            Laya.Scene.open("dialog/endgame.lh", false, null, Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
                let view = dlg.getChildByName("view");
                view.getChildByName("okay").on(Laya.Event.CLICK, this, ()=>{
                    Dialog.closeAll();
                    Laya.Scene.open("menu.ls");
                });
            }));
        });
    }
}