const { regClass, property } = Laya;

import * as SFS2X from "../node_modules/sfs2x-api";
import { Station } from "./Station";

@regClass()
export class MessageBubble extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    @property(Laya.Label)
    public message: Laya.Label;

    constructor() {
        super();
    }

    /**
   * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
   */
    onAwake(): void {
    }

    public show(msg:string) {
        let spirte = this.owner as Laya.Sprite;
        spirte.visible = true;
        this.message.text = msg;
        Laya.timer.once(4000, this, ()=>{
           spirte.visible = false; 
        });
        Laya.SoundManager.playSound("sounds/message.mp3", 1);
    }

}