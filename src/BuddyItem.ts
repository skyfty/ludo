const { regClass, property } = Laya;

@regClass()
export class BuddyItem extends Laya.Script {

    @property( Laya.Label)
    public nickname: Laya.Label;

    @property( Laya.Clip)
    public avatar: Laya.Clip;

    @property( Laya.Clip)
    public icon: Laya.Clip;

    constructor() {
        super();
    }
}