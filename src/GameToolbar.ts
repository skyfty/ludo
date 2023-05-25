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
            Laya.Scene.open("menu.ls");

            // owner.scene.close();
        });
    }
}