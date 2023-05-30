const { regClass, property } = Laya;

@regClass()
export class Background extends Laya.Script {

    constructor() {
        super();
    }

    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    onAwake(): void {
     
    }

    onUpdate(): void {
        let ownerSprite = this.owner as Laya.Sprite;
        ownerSprite.x = 0; 
        ownerSprite.y = 0;
        ownerSprite.width = Laya.stage.width;
        ownerSprite.height = Laya.stage.height;
    }
}