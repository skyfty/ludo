const { regClass, property } = Laya;
import { Dice } from "./Dice";

@regClass()
export class Trade extends Laya.Script {

    @property(Laya.Image)
    public disabledBk: Laya.Image;

    @property(Laya.Clip)
    public avatar: Laya.Clip;

    constructor() {
        super();
    }

    public stop() {
        let ani = this.owner.getComponent(Laya.Animator2D);
        ani.play("idle");
        return this;
    }

    public disabled(b:boolean) {
        this.disabledBk.visible = b;

    }
    public becareful() {
        let ani = this.owner.getComponent(Laya.Animator2D);
        ani.play("becareful");
    }

    public roll() {
        this.owner.getComponent(Dice).roll();
    }
}