const { regClass, property } = Laya;
import {Config}  from "./Config";
import { Parallel } from "./Parallel";
import * as Station from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";


@regClass()
export class OnlineParallel extends Laya.Script {

    private station:Station.Station;

    constructor(station:Station.Station) {
        super();
        this.station = station;
    }

    onAwake(): void {
        let parallel = this.owner.getComponent(Parallel);
        parallel.play.on(Laya.Event.CLICK, this, () => {
            this.owner.event(Laya.Event.PLAYED, [Config.Colors[parallel.colorGroup.selectedIndex],parallel.play2pBtn.selected?2:4]);
            this.owner.parent.removeSelf()
        });
    }

    onSelectColor(index: number): void {
    }



}