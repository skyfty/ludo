const { regClass, property } = Laya;


@regClass()
export class CheckinItem extends Laya.Script {
    @property( Laya.Label)
    public gold: Laya.Label;

    @property( Laya.Label)
    public day: Laya.Label;

    @property( Laya.Sprite)
    public mark: Laya.Sprite;


    @property( Laya.Button)
    public checkinBtn: Laya.Button;

    constructor() {
        super();
    }

    onAwake(): void {
    }

}