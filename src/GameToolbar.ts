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
            let owner = this.owner as Laya.Sprite;
            Laya.Scene.open("dialog/endgame.lh", false, null, Laya.Handler.create(this, (dlg:Laya.Dialog)=>{
                let view = dlg.getChildByName("view");
                view.getChildByName("return").on(Laya.Event.CLICK, this, ()=>{
                    dlg.close();
                });
                view.getChildByName("okay").on(Laya.Event.CLICK, this, ()=>{
                    dlg.close();
                    Laya.Scene.open("menu.ls");
                });

            }));
            // 
        });
    }
}