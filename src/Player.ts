import { Chess } from "./Chess";
import * as Route from "./Route";
import { Config } from "./Config";
import { Dice } from "./Dice";
import { Room } from "./Room";
import { Trade } from "./Trade";
import { MessageBubble } from "./MessageBubble";

const { regClass, property, SoundManager } = Laya;

export class Event {
    static EntryRoom = "ENTRY_ROOM";
    static ExitRoom = "EXIT_ROOM";
    static StateChange = "STATE_CHANGE";
    static Countdown = "COUNTDOWN";
    static CountdownStop = "COUNTDOWN_STOP";
    static Hurl = "Hurl";
    static RollStart = "ROLL_START";
    static RollEnd = "ROLL_END";
    static Choose = "CHOOSE";
    static Achieve = "ACHIEVE";
    static Victory = "VICTORY";
    static Rocket = "Rocket";

}

export interface Profile {
    id: number,
    nickname: string;
    avatar: number;
}

export enum Type {
    Extreme,
    Computer,
    Oneself
}


export enum State {
    Idle = 0,
    Running = 1
}

@regClass()
export class Player extends Laya.Script {

    public color:string = "";

    @property(Laya.Sprite)
    public entry: Laya.Sprite;

    @property(Laya.Sprite)
    public goal: Laya.Sprite;

    @property(Laya.Sprite)
    public door: Laya.Sprite;

    @property(Laya.Clip)
    public diceRoll: Laya.Clip;

    @property(Laya.Clip)
    public diceDefault: Laya.Clip;

    @property(Laya.Sprite)
    public groove: Laya.Sprite;

    @property(Laya.Sprite)
    public universal: Laya.Sprite;

    @property(Laya.Sprite)
    public trade: Laya.Sprite;

    @property(Laya.Sprite)
    public personal: Laya.Sprite;

    @property(Laya.Sprite)
    public crown: Laya.Sprite;

    @property(Laya.Sprite)
    public origin: Laya.Sprite;

    @property(Room)
    public room: Room;

    @property(MessageBubble)
    public messageBubble: MessageBubble;

    
    @property(Laya.Label)
    public nickname: Laya.Label;

    @property([Laya.Sprite])
    protected chippy: Laya.Sprite[] = [];

    @property([Laya.Sprite])
    protected home: Laya.Sprite[] = [];

    @property(Laya.Prefab)
    public plus: Laya.Prefab;

    constructor() {
        super();
    }
    public hopChesses(chesses: Laya.Sprite[]): void {
        for (let i = 0; i < chesses.length; ++i) {
            chesses[i].getComponent(Chess).hop();
        }
    }

    public stopChesses(chesses: Laya.Sprite[]) {
        for (let i = 0; i < chesses.length; ++i) {
            chesses[i].getComponent(Chess).stop();
        }
    }

    public reckonChess(diceNumber: number): Laya.Sprite[] {
        let chesses: Laya.Sprite[] = [];
        if (diceNumber != 5 && this.chippy.length > 0) {
            if (this.chippy.length > 1) {
                chesses = this.chippy;
            } else {
                chesses.push(this.chippy[0]);
            }
        } else if (diceNumber == 5) {
            chesses = chesses.concat(this.chippy);
            for (let i = 0; i < this.groove.numChildren; ++i) {
                chesses.push(this.groove.getChildAt(i) as Laya.Sprite);
            }
        }
        return chesses;
    }

    private getUniversalNextNumber(currentNumber: number, step: number): number {
        let num = currentNumber + step;
        if (num > Config.NUMBER_UNIVERSAL_HOLD) {
            num = num - Config.NUMBER_UNIVERSAL_HOLD + 1
        } else if (num < 0) {
            num = Config.NUMBER_UNIVERSAL_HOLD - num;
        }
        return num;
    }

    public getUniversalNextHole(currentNumber: number, step: number): Laya.Sprite {
        let nextNumber: number = this.getUniversalNextNumber(currentNumber, step);
        return this.universal.getChildByName(nextNumber.toString()) as Laya.Sprite;
    }

    public deduce(diceNumber: number, chesses: Laya.Sprite[], complete: Laya.Handler) {
        let deduceResult: any[] = [];
        let deduceLast: any[] = [];
        for (let i = 0; i < chesses.length; ++i) {
            let chess = chesses[i].getComponent(Chess) as Chess;
            if (chesses[i].parent == this.groove && diceNumber == 5) {
                deduceResult.push({ chess: chesses[i], reason: "entry" });
            } else if (chesses[i].parent == this.universal) {
                let currentNumber = Number.parseInt(chess.hole.name);
                let nextStep = diceNumber + 1;
                let nextNumber = currentNumber + nextStep;
                if (nextNumber > Number.parseInt(this.door.name)) {
                    deduceLast.push({ chess: chesses[i], reason: "advance" });
                } else {
                    let nextHole = this.getUniversalNextHole(currentNumber, nextStep);
                    if (nextHole != null) {
                        let resultChesses = this.getKickChesses(nextHole.getComponent(Route.Route));
                        if (resultChesses.length > 0) {
                            resultChesses.map((c) => {
                                c.kicked();
                            });
                            deduceResult.push({ chess: chesses[i], reason: "kick", kicks: resultChesses });
                        } else {
                            deduceLast.push({ chess: chesses[i], reason: "advance" });
                        }
                    } else {
                        deduceLast.push({ chess: chesses[i], reason: "advance" });
                    }
                }
            } else {
                let currentHoleNumber: number = Number.parseInt(chess.hole.name);
                if (currentHoleNumber + diceNumber == 5) {
                    deduceResult.unshift({ chess: chesses[i], reason: "home" });
                } else {
                    deduceLast.push({ chess: chesses[i], reason: "advance" });
                }
            }
        }
        deduceLast.sort(() => Math.random() - 0.5);
        complete.runWith([deduceResult.concat(deduceLast)]);
    }

    public isAllHome() {
        return this.home.length == 4;
    }

    private getChesses(route: Route.Route, player: Player) {
        let chesses: Chess[] = [];
        for (let i = 0; i < route.chess.length; ++i) {
            let chess = route.chess[i].getComponent(Chess) as Chess;
            if (chess.player == player) {
                chesses.push(chess)
            }
        }
        return chesses;
    }

    public getChessInChippy(name:string) {
        for (let i = 0; i < this.chippy.length; ++i) {
            if (this.chippy[i].name == name) {
                return this.chippy[i];
            }
        }
        return null;
    }

    public getKickChesses(route: Route.Route) {
        let resultChesses: Chess[] = [];
        if (route.safe == Route.Safe.yes) {
            return resultChesses;
        }

        for (let i = 0; i < route.chess.length; ++i) {
            let chess = route.chess[i].getComponent(Chess) as Chess;
            if (chess.player == this || chess.isDefinder()) {
                continue;
            }

            let chesses = this.getChesses(route, chess.player);
            if (chesses.length == 1) {
                resultChesses.push(chess)
            }
        }
        return resultChesses;
    }

    private kick(chesses: Chess[]) {
        chesses.map((chess: Chess) => {
            chess.stop();
            SoundManager.playSound("sounds/kick.mp3", 1);
            chess.revert(Laya.Handler.create(this, () => {
                let idx = chess.player.chippy.indexOf(chess.owner as Laya.Sprite);
                if (idx != -1) {
                    chess.player.chippy.splice(idx, 1);
                }
            }));
        });
    }

    public onAdvanceComplete(node: Laya.Sprite, complete: Laya.Handler) {
        let chess = node.getComponent(Chess) as Chess;
        if (chess.hole == this.goal) {
            let idx = this.chippy.indexOf(node);
            if (idx != -1) {
                SoundManager.playSound("sounds/home.mp3", 1);
                this.home.push(this.chippy.splice(idx, 1)[0]);
            }
        }

        if (this.isAllHome()) {
            this.crown.visible = true;
            this.crown.getComponent(Laya.Animator2D).play("elastic");
            complete.runWith(node);
        } else {
            let route = chess.hole.getComponent(Route.Route);
            let chesses = this.getKickChesses(route);
            if (chesses != null && chesses.length > 0) {
                this.kick(chesses);
                Laya.timer.once(2000, this, () => {
                    complete.runWith(node);
                });
            } else {
                if (route.magic != null) {
                    switch(route.magic.name) {
                        case "defender": {
                            this.defend(true);
                            route.setMagic(null);
                            break;
                        }
                    }
                }
                complete.runWith(node);
            }
        }
    }

    public defend(b:boolean) {
        for (let i = 0; i < this.chippy.length; ++i) {
            if (this.chippy[i].parent == this.universal) {
                let chess = this.chippy[i].getComponent(Chess) as Chess;
                chess.setDefender(b);
            }
        }
    }

    public rocket(node: Laya.Sprite, num:number, complete: Laya.Handler) {
        let chess = node.getComponent(Chess) as Chess;
        chess.rocket(num, Laya.Handler.create(this, () => {
            this.onAdvanceComplete(node, complete);
        }));
    }

    public advance(node: Laya.Sprite, diceNumber: number, complete: Laya.Handler) {
        let chess = node.getComponent(Chess) as Chess;
        if (this.chippy.indexOf(node) != -1) {
            chess.step(diceNumber + 1, 1, Laya.Handler.create(this, () => {
                this.onAdvanceComplete(node, complete);
            }));
        } else if (node.parent == this.groove) {
            chess.step(1, 1, Laya.Handler.create(this, () => {
                if (this.chippy.indexOf(node) == -1) {
                    this.chippy.push(node);
                }
                this.onAdvanceComplete(node, complete);
            }));
        }
    }

    
    public setAttire(color:string) {
        this.color = color;
        for(let i = 0; i < this.groove.numChildren;++i) {
            let chess = this.groove.getChildAt(i) as Laya.Sprite;
            chess.getComponent(Chess).image.skin =   "resources/images/pawns_"+color+".png";
        }
        for(let i = 0; i < this.personal.numChildren;++i) {
            let route = this.personal.getChildAt(i) as Laya.Box;
            route.bgColor = Config.ColorValue[color];
        }
    }

    public profile:Profile;

    public setProfile( profile:Profile) {
        this.profile = profile;
        this.nickname.text = profile.nickname;
        this.trade.getComponent(Trade).avatar.index = this.profile.avatar;
    }

    
    public plusAni(hold:Laya.Sprite) {
        let plus = this.plus.create()  as Laya.Sprite;
        let holdParent = hold.parent as Laya.Sprite;
        let holdWorldPoint = holdParent.localToGlobal(new Laya.Point(hold.x, hold.y));
        Laya.stage.addChild(plus.pos(holdWorldPoint.x, holdWorldPoint.y));
    
        let destParent = this.trade.getComponent(Trade).owner as Laya.Sprite;
        let diceRoll = destParent.getComponent(Dice).diceRoll;
        let destWorldPoint = destParent.localToGlobal(new Laya.Point(diceRoll.x + 30, diceRoll.y + 30));

        Laya.Tween.to(plus, { y: destWorldPoint.y, x: destWorldPoint.x }, 500, Laya.Ease.quintInOut, Laya.Handler.create(this, () => {
            Laya.stage.removeChild(plus);
        }));

    }
}