const { regClass, property } = Laya;
import { Chess } from "./Chess";

@regClass()
export class Groove extends Laya.Script {

    constructor() {
        super();
    }

    /**
     * 组件被禁用时执行，例如从节点从舞台移除后
     */
    onDisable(): void {
    }

}