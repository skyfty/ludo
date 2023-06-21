const { regClass, property } = Laya;
import { Station } from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";

@regClass()
export class BuddyRecent extends Laya.Script {


    @property(Laya.List)
    public list: Laya.List;
    constructor() {
        super();
    }


    onAwake(): void {
        this.addStationListener();
    }

    onDestroy(): void {
        this.removeStationListener();
    }

    public addStationListener() {

    }
    public removeStationListener() {
    }


}