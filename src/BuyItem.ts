const { regClass, property } = Laya;

@regClass()
export class BuyItem extends Laya.Script {

    public index:number;


    @property( Laya.Label)
    public coin: Laya.Label;

    @property( Laya.Label)
    public price: Laya.Label;

    
    @property( Laya.Button)
    public buyBtn: Laya.Button;

    constructor() {
        super();
    }
    
    onStart(): void {
        this.buyBtn.on(Laya.Event.CLICK, this, ()=>{
            this.owner.parent.parent.parent.event(Laya.Event.SELECT, [this.index]);
        });
    }
}