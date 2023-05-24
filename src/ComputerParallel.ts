const { regClass, property } = Laya;
import {Config}  from "./Config";
import { Parallel } from "./Parallel";


@regClass()
export class ComputerParallel extends Laya.Script {

    constructor() {
        super();
    }

    onAwake(): void {
        let parallel = this.owner.getComponent(Parallel);
        parallel.play.on(Laya.Event.CLICK, this, () => {
            this.owner.event(Laya.Event.PLAYED, [Config.Colors[parallel.colorGroup.selectedIndex],parallel.play2pBtn.selected?2:4]);
        });
    }

    onSelectColor(index: number): void {
    }



}