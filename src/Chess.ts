const { regClass, property} = Laya;

@regClass()
export class Chess extends Laya.Script {
    //declare owner : Laya.Sprite3D;

    @property(Laya.Sprite)
    public hole: Laya.Sprite;

    constructor() {
        super();
    }

    public step(step:number, complete: Laya.Handler) {
        if (step == 0) {
            complete.run();
            return;
        }
        let currentHoleNumber:number = Number.parseInt(this.hole.name);
        currentHoleNumber++;

        let nextHole = this.owner.parent.getChildByName(currentHoleNumber.toString()) as Laya.Sprite;
        let destPoint = new Laya.Point(nextHole.x,nextHole.y);
        Laya.Tween.to(this.owner, { y: destPoint.y, x: destPoint.x }, 200, Laya.Ease.quintInOut, Laya.Handler.create(this, () => {
            this.step(--step,complete);
        }));
        this.hole = nextHole;
    }


}