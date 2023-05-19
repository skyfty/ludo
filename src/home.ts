const { regClass, property } = Laya;

@regClass()
export class Home extends Laya.Script {
    //declare owner : Laya.Sprite3D;

    @property(String)
    public color: string = "";

    constructor() {
        super();
    }

}