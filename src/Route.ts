const { regClass, property } = Laya;

@regClass()
export class Route extends Laya.Script {
    constructor() {
        super();
    }


    public puddleAni(color:string) {
        let node = this.owner as Laya.Sprite;
        let puddle = node.getChildByName("puddle") as Laya.Sprite;
        puddle.graphics.clear();
        puddle.graphics.drawCircle(0.5, 0.5, 0.5,color);
        this.owner.getComponent(Laya.Animator2D).play("puddle");
    }
}