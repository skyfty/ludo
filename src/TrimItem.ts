const { regClass, property } = Laya;

@regClass()
export class TrimItem extends Laya.Script {

    public index:number;


    @property( Laya.Label)
    public title: Laya.Label;

    @property( Laya.Image)
    public image: Laya.Image;

    @property( Laya.Image)
    public background : Laya.Image;

    constructor() {
        super();
    }

}