const { regClass, property } = Laya;

export class Event {
    public RollEnd = "Dice.Event.RollEnd"
};

@regClass()
export class Dice extends Laya.Script {

    constructor() {
        super();
    }

}