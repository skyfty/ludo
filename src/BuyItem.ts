const { regClass, property } = Laya;

@regClass()
export class BuyItem extends Laya.Script {
    //declare owner : Laya.Sprite3D;

    @property( Laya.Label)
    public coin: Laya.Label;

    @property( Laya.Label)
    public price: Laya.Label;

    
    @property( Laya.Button)
    public buyBtn: Laya.Button;

    constructor() {
        super();
    }
}