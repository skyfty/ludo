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
            this.owner.event(Laya.Event.PLAYED, [Config.Colors[this.colorIdx], parallel.play2pBtn.selected ? 2 : 4]);
        });
        for (let idx in parallel.colorCheckBox) {
            parallel.colorCheckBox[idx].on(Laya.Event.CLICK, this, () => {
                parallel.play.disabled = false;
                this.colorIdx = Number.parseInt(idx);
            });
        }
        parallel.closeBtn.on(Laya.Event.CLICK, this, () => {
            this.owner.event(Laya.Event.CLOSE);
            this.owner.removeSelf();
        });

    }
}