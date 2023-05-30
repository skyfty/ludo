const { regClass, property } = Laya;
import { Config } from "./Config";
import { Parallel } from "./Parallel";


@regClass()
export class ComputerParallel extends Laya.Script {
    private colorIdx: number = -1;

    constructor() {
        super();
    }

    onAwake(): void {
        let parallel = this.owner.getComponent(Parallel);
        parallel.play.on(Laya.Event.CLICK, this, () => {
            Laya.Dialog.closeAll();
            Laya.Scene.open("game.ls", true, { "type": "computer", "color": Config.Colors[this.colorIdx],"number":parallel.numberOfPlayer });
        });
        for (let idx in parallel.colorCheckBox) {
            parallel.colorCheckBox[idx].on(Laya.Event.CLICK, this, () => {
                parallel.play.disabled = false;
                this.colorIdx = Number.parseInt(idx);
            });
        }
        parallel.closeBtn.on(Laya.Event.CLICK, this, () => {
            Laya.Dialog.closeAll();
        });

    }
}