const { regClass, property } = Laya;

import * as SFS2X from "../node_modules/sfs2x-api";
import { Station } from "./Station";
@regClass()
export class Chitchat extends Laya.Script {
    @property(Laya.TextInput)
    public message: Laya.TextInput;
    
    @property(Laya.Button)
    public send: Laya.Button;

    constructor() {
        super();
    }

    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    onAwake(): void {
        this.send.on(Laya.Event.CLICK, this, this.onSend);
        this.addStationListener();
    }

    onDestroy(): void {
        this.removeStationListener();
    }

    public addStationListener() {

    }
    public removeStationListener() {
    }

    onSend() {
        if (this.message.text != "") {
            Station.sfs.send(new SFS2X.PublicMessageRequest(this.message.text));
            this.message.text = "";
        }
    }

}