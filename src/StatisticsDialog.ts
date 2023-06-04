const { regClass, property } = Laya;
import { Profile } from "./Profile";

@regClass()
export class StatisticsDialog extends Laya.Script {
 
    @property(Laya.Button)
    public returnBtn: Laya.Button;

    constructor() {
        super();
    }

    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    onAwake(): void {
        this.returnBtn.on(Laya.Event.CLICK, this, ()=>{
            let dlg = this.owner as Laya.Dialog;
            dlg.close();
        });
    }

}