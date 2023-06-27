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

    
    public setState(b:boolean) {
        this.background.disabled = b;
    }
}