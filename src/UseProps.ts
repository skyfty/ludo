const { regClass, property } = Laya;

@regClass()
export class UseProps extends Laya.Script {
    //declare owner : Laya.Sprite3D;

    @property(Laya.Clip)
    public clip: Laya.Clip;

    constructor() {
        super();
    }

}