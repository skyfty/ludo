const { regClass, property } = Laya;
import { TrimItem } from "./TrimItem";

@regClass()
export class TrimLevelItem extends TrimItem {

    @property(Laya.CheckBox)
    public button: Laya.CheckBox;

    constructor() {
        super();
    }

    onAwake(): void {
   
    }

    onStart(): void {
        this.button.on(Laya.Event.CLICK, this, this.onSelected);
    }

    onSelected() {
        this.owner.parent.parent.parent.event(Laya.Event.SELECT, [this.index]);

    }

    public setState(b:boolean) {
        this.background.disabled = b;
        this.button.visible = !b;
    }
}