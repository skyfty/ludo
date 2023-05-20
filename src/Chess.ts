import { Door } from "./Door";
import { Player } from "./Player";

const { regClass, property} = Laya;

interface StepProvider {
    next():number;
}

@regClass()
export class Chess extends Laya.Script {
    
    @property(Player)
    public player: Player;

    @property(Laya.Sprite)
    public hole: Laya.Sprite;

    @property(Laya.Sprite)
    public chess: Laya.Sprite;

    @property(Laya.Image)
    public image: Laya.Image;

    constructor() {
        super();
    }
    onAwake(): void {
        super.onAwake();
    }


    public jump(dest:Laya.Sprite, parent:Laya.Sprite, complete: Laya.Handler) {
        let ownerSprite = this.owner as Laya.Sprite;
        let parentSprite = this.owner.parent as Laya.Sprite;

        let originPoint = parentSprite.localToGlobal(new Laya.Point(ownerSprite.x,ownerSprite.y));
        Laya.stage.addChild(ownerSprite.pos(originPoint.x, originPoint.y));
        let destPoint = parent.localToGlobal(new Laya.Point(dest.x,dest.y));
        Laya.Tween.to(ownerSprite, { y: destPoint.y, x: destPoint.x }, 200, Laya.Ease.quintInOut, Laya.Handler.create(this, () => {
            this.hole = dest;
            parent.addChild(ownerSprite.pos(dest.x, dest.y));
            complete.run();
        }));
    }

    public step(step:number,director:number, complete: Laya.Handler) {
        let roadway = this.owner.parent;
        if (step == 0) {
            complete.run();
            return;
        }

        if (roadway == this.player.groove) {
            this.jump(this.player.entry, this.player.universal, complete);
        }  else if (this.hole == this.player.door) {
            let personal = this.player.personal as Laya.Sprite;
            let firstHole = personal.getChildByName("0") as Laya.Sprite;
            this.jump(firstHole, this.player.personal, Laya.Handler.create(this, ()=>{
                this.step(--step, director, complete);
            }));
        } else {
            let currentHoleNumber:number = Number.parseInt(this.hole.name);
            if (roadway == this.player.personal){
                if (currentHoleNumber >= this.player.numberPersonalHold - 1 || currentHoleNumber < 0) {
                    director *= -1;
                }
                currentHoleNumber += director;
            } else if (currentHoleNumber < 0) {
                currentHoleNumber = this.player.numberUniversalHold - 1;
            } else {
                currentHoleNumber += director;
            }
            let nextHole = roadway.getChildByName(currentHoleNumber.toString()) as Laya.Sprite;
            if (nextHole == null) {
                nextHole = roadway.getChildByName("0") as Laya.Sprite;
            }
            this.moveTo(nextHole, Laya.Handler.create(this,  ()=>{
                this.step(--step, director, complete);
            }));
        }
    }

    public moveTo(nextHole:Laya.Sprite, complete: Laya.Handler) {
        let destPoint = new Laya.Point(nextHole.x,nextHole.y);
        Laya.Tween.to(this.owner, { y: destPoint.y, x: destPoint.x }, 200, Laya.Ease.quintInOut, Laya.Handler.create(this, () => {
            this.hole = nextHole;
            complete.run();
        }));
    }

    public hop() {
        this.chess.getComponent(Laya.Animator2D).play("hop");
    }

    public stop() {
        this.chess.getComponent(Laya.Animator2D).play("idle");
    }
}