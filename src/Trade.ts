const { regClass, property } = Laya;
import { Dice } from "./Dice";
import { Countdown } from "./Countdown";
import * as Player from "./Player";

@regClass()
export class Trade extends Laya.Script {

    @property(Laya.Clip)
    public avatar: Laya.Clip;

    
    @property(Laya.Sprite)
    public countdown: Laya.Sprite;

    
    @property(Laya.Sprite)
    public blackmark: Laya.Sprite;

    
    @property(Laya.Button)
    public props: Laya.Button;

    constructor() {
        super();
    }

    onAwake(): void {
    }

    onStart(): void {
        this.countdown.on(Laya.Event.STOPPED, this, this.onCountdownStop);
    }

    public stop() {
        let ani = this.owner.getComponent(Laya.Animator2D);
        ani.play("idle");
        return this;
    }

    public disabled(b:boolean) {
        this.blackmark.visible = b;
    }
    public becareful() {
        let ani = this.owner.getComponent(Laya.Animator2D);
        ani.play("becareful");
    }

    public roll() {
        this.owner.getComponent(Dice).roll();
    }

    private onCountdownStop(reason:string) {
        this.stopCountdown();
        this.owner.event(Player.Event.CountdownStop,[reason]);
    }
    
    public startCountdown(cc:number,reason:string) {
        this.countdown.getComponent(Countdown).show(cc,reason);
        this.owner.event(Laya.Event.STOPPED);
    }

    public stopCountdown() {
        this.countdown.getComponent(Countdown).hide();
    }

}