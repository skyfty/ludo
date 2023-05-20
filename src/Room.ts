import { Computer } from "./Computer";
import { Oneself } from "./Oneself";
import { Extreme } from "./Extreme";

const { regClass, property } = Laya;

@regClass()
export class Room extends Laya.Script {
    //declare owner : Laya.Sprite3D;

    @property(Laya.Sprite)
    public redPlayer: Laya.Sprite;

    @property(Laya.Sprite)
    public greenPlayer: Laya.Sprite;
    
    @property(Laya.Sprite)
    public bluePlayer: Laya.Sprite;

    @property(Laya.Sprite)
    public yellowPlayer: Laya.Sprite;

    constructor() {
        super();
    }

    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    onAwake(): void {
        this.redPlayer.visible = false;
        this.greenPlayer.visible = false;
        this.bluePlayer.visible = false;
        this.yellowPlayer.visible = false;
    }

    /**
     * 组件被启用后执行，例如节点被添加到舞台后
     */
    //onEnable(): void {}

    /**
     * 组件被禁用时执行，例如从节点从舞台移除后
     */
    //onDisable(): void {}

    /**
     * 第一次执行update之前执行，只会执行一次
     */
    onStart(): void {
        this.redPlayer.visible = true;
        this.redPlayer.addComponentInstance(new Computer());

        this.greenPlayer.visible = true;
        this.greenPlayer.addComponentInstance(new Extreme());

        
        this.bluePlayer.visible = true;
        this.bluePlayer.addComponentInstance(new Oneself());
    }

    /**
     * 手动调用节点销毁时执行
     */
    //onDestroy(): void {

    /**
     * 每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
     */
    //onUpdate(): void {}

    /**
     * 每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
     */
    //onLateUpdate(): void {}

    /**
     * 鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
     */
    //onMouseClick(): void {}
}