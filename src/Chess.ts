import { Player } from "./Player";
import * as Route from "./Route";

const { regClass, property} = Laya;

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
    
    @property(Laya.Image)
    public shoe: Laya.Image;

    constructor() {
        super();
    }
    onAwake(): void {
        super.onAwake();
    }


    public jump(dest:Laya.Sprite, complete: Laya.Handler) {
        let parent = dest.parent as Laya.Sprite;
        let ownerSprite = this.owner as Laya.Sprite;
        let parentSprite = this.owner.parent as Laya.Sprite;

        let originPoint = parentSprite.localToGlobal(new Laya.Point(ownerSprite.x,ownerSprite.y));
        Laya.stage.addChild(ownerSprite.pos(originPoint.x, originPoint.y));
        let destPoint = parent.localToGlobal(new Laya.Point(dest.x,dest.y));
        Laya.Tween.to(ownerSprite, { y: destPoint.y, x: destPoint.x }, 200, Laya.Ease.quintInOut, Laya.Handler.create(this, () => {
            this.pass(dest);
            this.hole.event(Route.Event.Exit,[ownerSprite]);
            this.hole = dest;
            parent.addChild(ownerSprite.pos(dest.x, dest.y));
            this.hole.event(Route.Event.Enter),[ownerSprite];
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
            this.jump(this.player.entry, complete);
        }  else if (this.hole == this.player.door) {
            let personal = this.player.personal as Laya.Sprite;
            let firstHole = personal.getChildByName("0") as Laya.Sprite;
            this.jump(firstHole, Laya.Handler.create(this, ()=>{
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
            this.moveTo(nextHole,200, Laya.Handler.create(this,  ()=>{
                this.step(--step, director, complete);
            }));
        }
    }

    private pass(nextHole:Laya.Sprite) {
        let route = this.hole.getComponent(Route.Route);
        if (route != null) {
            let idx = route.chess.indexOf(this.owner as Laya.Sprite);
            if (idx != -1) {
                route.chess.splice(idx, 1);
            }
        }
        let nextRoute = nextHole.getComponent(Route.Route);
        if (nextRoute != null) {
            nextRoute.chess.push(this.owner as Laya.Sprite);
            nextRoute.puddleAni(this.player.owner.name);
        }
    }

    public backoff(dest:Laya.Sprite, complete: Laya.Handler) {
        if (dest == this.hole) {
            complete.run();
            return;
        }
        let roadway = this.owner.parent;
        let currentHoleNumber:number = Number.parseInt(this.hole.name);
        if (currentHoleNumber < 0) {
            currentHoleNumber = this.player.numberUniversalHold - 1;
        } else {
            currentHoleNumber -= 1;
        }
        let nextHole = roadway.getChildByName(currentHoleNumber.toString()) as Laya.Sprite;
        if (nextHole == null) {
            nextHole = roadway.getChildByName("0") as Laya.Sprite;
        }
        this.moveTo(nextHole, 20, Laya.Handler.create(this,  ()=>{
            this.backoff(dest, complete);
        }));
    }

    public revert(complete: Laya.Handler) {
        this.backoff(this.player.entry, Laya.Handler.create(this, ()=>{
            let dest = this.player.origin.getChildByName(this.owner.name) as Laya.Sprite;
            this.jump(dest, complete);
        }));
    }

    public moveTo(nextHole:Laya.Sprite, duration: number, complete: Laya.Handler) {
        let destPoint = new Laya.Point(nextHole.x,nextHole.y);
        Laya.Tween.to(this.owner, { y: destPoint.y, x: destPoint.x }, duration, Laya.Ease.quintInOut, Laya.Handler.create(this, () => {
            this.pass(nextHole);
            this.hole.event(Route.Event.Exit,[this.owner]);
            this.hole = nextHole;
            this.hole.event(Route.Event.Enter,[this.owner]);
            complete.run();
        }));
    }

    public hop() {
        this.chess.getComponent(Laya.Animator2D).play("hop");
    }

    public stop() {
        this.shoe.visible = false;
        this.chess.getComponent(Laya.Animator2D).play("idle");
    }

    public kicked() {
        this.shoe.visible = true;
        this.chess.getComponent(Laya.Animator2D).play("kick");
    }
}