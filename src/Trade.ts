const { regClass, property } = Laya;

@regClass()
export class Trade extends Laya.Script {
    //declare owner : Laya.Sprite3D;

    @property(Laya.Image)
    public disabledBk: Laya.Image;

    constructor() {
        super();
    }

    public stop() {
        let ani = this.owner.getComponent(Laya.Animator2D);
        ani.play("idle");
    }

    public disabled(b:boolean) {
        this.disabledBk.visible = b;

    }
    public becareful() {
        let ani = this.owner.getComponent(Laya.Animator2D);
        ani.play("becareful");
    }
}