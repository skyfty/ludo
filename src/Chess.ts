import { Player } from "./Player";
import * as Route from "./Route";
import { Config } from "./Config"

const { regClass, property } = Laya;

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

    private jumpToWorld() {
        let ownerSprite = this.owner as Laya.Sprite;
        let parentSprite = this.owner.parent as Laya.Sprite;
        let ownerSpriteWorldPoint = parentSprite.localToGlobal(new Laya.Point(ownerSprite.x, ownerSprite.y));
        Laya.stage.addChild(ownerSprite.pos(ownerSpriteWorldPoint.x, ownerSpriteWorldPoint.y));
        return ownerSpriteWorldPoint;
    }

    public jump(dest: Laya.Sprite, complete: Laya.Handler) {
        let ownerSpriteWorldPoint = this.jumpToWorld();
        let parent = dest.parent as Laya.Sprite;
        let destWorldPoint = parent.localToGlobal(new Laya.Point(dest.x, dest.y));
        this.hole.event(Route.Event.Exit, [ownerSpriteWorldPoint]);
        this.skipTo(dest, destWorldPoint, parent, Laya.Handler.create(this, ()=>{
            this.hole.event(Route.Event.Enter, [new Laya.Point(this.hole.x, this.hole.y)]);
            complete.run();
        }));
    }

    public skipTo(dest: Laya.Sprite, destWorldPoint: Laya.Point, parent: Laya.Sprite, complete: Laya.Handler) {
        let ownerSprite = this.owner as Laya.Sprite;
        Laya.Tween.to(ownerSprite, { y: destWorldPoint.y, x: destWorldPoint.x }, 200, Laya.Ease.quintInOut, Laya.Handler.create(this, () => {
            this.pass(dest);
            this.hole = dest;
            let parentLocalPoint = parent.globalToLocal(destWorldPoint, true);
            parent.addChild(ownerSprite.pos(parentLocalPoint.x, parentLocalPoint.y));
            complete.run();
        }));
    }

    public step(step: number, director: number, complete: Laya.Handler) {
        let roadway = this.owner.parent;
        if (step == 0) {
            complete.run();
            return;
        }

        if (roadway == this.player.groove) {
            this.jump(this.player.entry, complete);
        } else if (this.hole == this.player.door) {
            let personal = this.player.personal as Laya.Sprite;
            let firstHole = personal.getChildByName("0") as Laya.Sprite;
            this.jump(firstHole, Laya.Handler.create(this, () => {
                this.step(--step, director, complete);
            }));
        } else {
            let currentHoleNumber: number = Number.parseInt(this.hole.name);
            if (roadway == this.player.personal) {
                if (currentHoleNumber >= Config.NUMBER_PERSONAL_HOLD - 1 || currentHoleNumber < 0) {
                    director *= -1;
                }
                currentHoleNumber += director;
            } else if (currentHoleNumber < 0) {
                currentHoleNumber = Config.NUMBER_UNIVERSAL_HOLD - 1;
            } else {
                currentHoleNumber += director;
            }
            let nextHole = roadway.getChildByName(currentHoleNumber.toString()) as Laya.Sprite;
            if (nextHole == null) {
                nextHole = roadway.getChildByName("0") as Laya.Sprite;
            }
            this.moveTo(nextHole, 200, Laya.Handler.create(this, () => {
                this.step(--step, director, complete);
            }));
        }
    }

    private pass(nextHole: Laya.Sprite) {
        let route = this.hole.getComponent(Route.Route);
        if (route != null) {
            let idx = route.chess.indexOf(this.owner as Laya.Sprite);
            if (idx != -1) {
                route.chess.splice(idx, 1);
            }
        }
        let nextRoute = nextHole.getComponent(Route.Route);
        if (nextRoute != null) {
            let node = this.owner as Laya.Sprite;
            if (nextRoute.chess.indexOf(node) == -1) {
                nextRoute.chess.push(node);
            }
            nextRoute.puddleAni(this.player.owner.name);
        }
    }

    public backoff(dest: Laya.Sprite, complete: Laya.Handler) {
        if (dest == this.hole) {
            complete.run();
            return;
        }
        let roadway = this.owner.parent;
        let nextHoleNumber: number = Number.parseInt(this.hole.name) - 1;
        if (nextHoleNumber < 0) {
            nextHoleNumber = Config.NUMBER_UNIVERSAL_HOLD - 1;
        }
        let nextHole = roadway.getChildByName(nextHoleNumber.toString()) as Laya.Sprite;
        if (nextHole == null) {
            nextHole = roadway.getChildByName("0") as Laya.Sprite;
        }
        this.moveTo(nextHole, 20, Laya.Handler.create(this, () => {
            this.backoff(dest, complete);
        }));
    }

    public revert(complete: Laya.Handler) {
        this.backoff(this.player.entry, Laya.Handler.create(this, () => {
            let ownerSpriteWorldPoint = this.jumpToWorld();
            let destNode = this.player.origin.getChildByName(this.owner.name) as Laya.Sprite;
            let destWorldPoint = this.player.origin.localToGlobal(new Laya.Point(destNode.x, destNode.y));
            this.hole.event(Route.Event.Exit, [ownerSpriteWorldPoint]);
            this.skipTo(destNode, destWorldPoint, this.player.groove, Laya.Handler.create(this, ()=>{
                let parentLocalPoint = this.player.groove.globalToLocal(destWorldPoint, true);
                this.hole.event(Route.Event.Enter, [parentLocalPoint]);
                complete.run();
            }));
        }));
    }

    public moveTo(nextHole: Laya.Sprite, duration: number, complete: Laya.Handler) {
        let destPoint = new Laya.Point(nextHole.x, nextHole.y);
        Laya.Tween.to(this.owner, { y: destPoint.y, x: destPoint.x }, duration, Laya.Ease.quintInOut, Laya.Handler.create(this, () => {
            this.pass(nextHole);
            this.hole.event(Route.Event.Exit, [new Laya.Point(this.hole.x, this.hole.y)]);
            this.hole = nextHole;
            this.hole.event(Route.Event.Enter, [new Laya.Point(this.hole.x, this.hole.y)]);
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