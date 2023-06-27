const { regClass, property } = Laya;
import { TrimItem } from "./TrimItem";

@regClass()
export class TrimCoinItem extends TrimItem {

    @property( Laya.Label)
    public gold: Laya.Label;

    @property( Laya.ViewStack)
    public viewStack: Laya.ViewStack;


    @property( Laya.Button)
    public buybutton: Laya.Button;

    
    @property( Laya.CheckBox)
    public selectBox: Laya.CheckBox;


    constructor() {
        super();
    }

    
    onStart(): void {
        this.selectBox.on(Laya.Event.CLICK, this, ()=>{
            this.owner.parent.parent.parent.event(Laya.Event.SELECT, [this.index]);
        });
        this.buybutton.on(Laya.Event.CLICK, this, ()=>{
            this.owner.parent.parent.parent.event("Buy", [this.index]);
        });
    }

    public setState(b:boolean) {
        this.background.disabled = b;
    }
}