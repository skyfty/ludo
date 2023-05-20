const { regClass, property } = Laya;

@regClass()
export class Door extends Laya.Script {
    //declare owner : Laya.Sprite3D;

    @property(Laya.Sprite)
    public player: Laya.Sprite;

    constructor() {
        super();
    }
}