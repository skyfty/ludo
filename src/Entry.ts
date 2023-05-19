const { regClass, property } = Laya;

@regClass()
export class Entry extends Laya.Script {
    //declare owner : Laya.Sprite3D;

    @property(String)
    public color: string = "";

    constructor() {
        super();
    }
}