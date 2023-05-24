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

    @property([Laya.CheckBox])
    public colorCheckBox: Laya.CheckBox[] = [];

    constructor() {
        super();
    }

    onAwake(): void {
        this.play2pBtn.on(Laya.Event.CLICK, this, () => {
            this.play4pBtn.selected = false;
            this.play2pBtn.selected = true;

        });
        this.play4pBtn.on(Laya.Event.CLICK, this, () => {
            this.play2pBtn.selected = false;
            this.play4pBtn.selected = true;
        });

        for(let idx in this.colorCheckBox) {
            this.colorCheckBox[idx].on(Laya.Event.CLICK, this, (event) => {
                for(let idx2 in this.colorCheckBox) {
                    if (this.colorCheckBox[idx2].disabled) {
                        continue;
                    }
                    this.colorCheckBox[idx2].selected = (this.colorCheckBox[idx2] == event.target);
                }
            });
        }
    }

}