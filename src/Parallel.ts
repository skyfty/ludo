const { regClass, property } = Laya;
import { Config } from "./Config";

@regClass()
export class Parallel extends Laya.Script {

    @property(Laya.Button)
    public closeBtn: Laya.Button;

    @property(Laya.CheckBox)
    public play2pBtn: Laya.CheckBox;

    @property(Laya.CheckBox)
    public play4pBtn: Laya.CheckBox;

    @property(Laya.Button)
    public play: Laya.Button;

    @property(Laya.RadioGroup)
    public colorGroup: Laya.RadioGroup;

    constructor() {
        super();
    }

    onAwake(): void {
        this.closeBtn.on(Laya.Event.CLICK, this, () => {
            this.owner.event(Laya.Event.CLOSE);
        });

        this.play2pBtn.on(Laya.Event.CLICK, this, () => {
            this.play4pBtn.selected = false;
            this.play2pBtn.selected = true;

        });
        this.play4pBtn.on(Laya.Event.CLICK, this, () => {
            this.play2pBtn.selected = false;
            this.play4pBtn.selected = true;

        });
        this.colorGroup.selectHandler = new Laya.Handler(this, this.onSelectColor);
    }

    onSelectColor(index: number): void {
        console.log("lskjf");
    }


}