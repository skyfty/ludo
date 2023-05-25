const { regClass, property,SoundManager } = Laya;

@regClass()
export class Dice extends Laya.Script {

    @property(Laya.Clip)
    public diceRoll:Laya.Clip;

    @property(Laya.Clip)
    public diceDefault:Laya.Clip;

    constructor() {
        super();
    }
    public setDiceNumber(idx:number) {
        this.diceDefault.visible = true;
        this.diceRoll.visible = false;
        this.diceDefault.index = idx;
    }

    public roll() {
        this.diceDefault.visible = false;
        this.diceRoll.visible = true;
        this.diceRoll.play(0, -1);
        SoundManager.playSound("sounds/chess.mp3", 1);
        this.owner.getComponent(Laya.Animator2D).play("roll");
    }

    public stop(complete: Laya.Handler) {
        this.diceRoll.stop();
        this.owner.getComponent(Laya.Animator2D).play("idle");
        complete.run();
    }

}