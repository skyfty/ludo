import { Chess } from "./Chess";
import { Route } from "./Route";

const { regClass, property } = Laya;

export class Event {
    static EntryRoom = "ENTRY_ROOM";
    static ExitRoom = "EXIT_ROOM";
    static StateChange = "STATE_CHANGE";
    static RollStart = "ROLL_START";
    static RollEnd = "ROLL_END";
    static Choose = "CHOOSE";
    static Achieve = "ACHIEVE";
    static Victory = "VICTORY";
}

export interface Profile {
    name:string;
    avatar:string;
}

export enum Type {
    Online,
    Computer,
    Oneself
}


export enum State {
    Idle = 0,
    Running = 1
}

export interface DeduceResult {
    chess:Laya.Sprite;
    reason:string;
}

@regClass()
export class Player extends Laya.Script {

    @property(Laya.Sprite)
    public entry:Laya.Sprite;

    @property(Laya.Sprite)
    public goal:Laya.Sprite;

    @property(Laya.Sprite)
    public door:Laya.Sprite;

    @property(Laya.Clip)
    public diceRoll:Laya.Clip;

    @property(Laya.Clip)
    public diceDefault:Laya.Clip;

    @property(Laya.Sprite)
    public groove:Laya.Sprite;

    @property(Laya.Sprite)
    public universal:Laya.Sprite;
    public numberUniversalHold:number;

    @property(Laya.Sprite)
    public trade:Laya.Sprite;
    
    @property(Laya.Sprite)
    public personal:Laya.Sprite;

    @property(Laya.Sprite)
    public crown: Laya.Sprite;

    
    @property(Laya.Sprite)
    public origin: Laya.Sprite;

    public numberPersonalHold:number;

    @property(Laya.Prefab)
    public chessPrefab:Laya.Prefab;

    protected chippy: Laya.Sprite[] = [];
    protected home: Laya.Sprite[] = [];

    constructor() {
        super();
    }
    onAwake(): void {
        this.numberUniversalHold = this.universal.numChildren;
        this.numberPersonalHold = this.personal.numChildren;
    }
    onStart(): void {
        this.owner.on(Event.StateChange, this, this.onStateChange);
    }

    onStateChange(state:State) {

    }

    public setDiceNumber(idx:number) {
        this.diceDefault.visible = true;
        this.diceRoll.visible = false;
        this.diceDefault.index = idx;
    }

    private scaleChessInHole(node:Laya.Sprite) {
        // for(let i = 0;i < this.chippy.length - 1;++i) {
        //     let child = this.chippy[i] as Laya.Sprite;
        //     let childChess = child.getComponent(Chess) as Chess;
        //     for(let j = i + 1;j < this.chippy.length;++j) {
        //         let nextChild = this.chippy[j] as Laya.Sprite;
        //         let nextChildChess = nextChild.getComponent(Chess) as Chess;
        //         if (childChess.hole == nextChildChess.hole) {
        //             child.scale(0.5, 0.5);
        //             nextChild.scale(0.5, 0.5);
        //         }
        //     }
        // }
    }


    public startRoll() {
        this.diceDefault.visible = false;
        this.diceRoll.visible = true;
        this.diceRoll.play(0, -1);
    }

    public stopRoll(complete: Laya.Handler) {
        this.diceRoll.stop();
        complete.run();
    }

    
    public hopChesses(chesses:Laya.Sprite[]):void {
        for(let i = 0; i < chesses.length; ++i) {
            chesses[i].getComponent(Chess).hop();
        }
    }

    public stopChesses(chesses:Laya.Sprite[]) {
        for(let i = 0; i < chesses.length; ++i) {
            chesses[i].getComponent(Chess).stop();
        }
    }

    public reckonChess(diceNumber:number): Laya.Sprite[] {
        let chesses:Laya.Sprite[] = [];
        if (diceNumber != 5 && this.chippy.length > 0) {
            if (this.chippy.length > 1) {
                chesses = this.chippy;
            } else {
                chesses.push(this.chippy[0]);
            }
        } else if (diceNumber == 5) {
            chesses = chesses.concat(this.chippy);
            for(let i = 0;i < this.groove.numChildren;++i) {
                chesses.push(this.groove.getChildAt(i) as Laya.Sprite);
            }
        }
        return chesses;
    }

    private getUniversalNextNumber(currentNumber:number, step:number):number {
        let num = currentNumber + step;
        if (num > this.numberUniversalHold) {
            num = num - this.numberUniversalHold
        } else if (num < 0) {
            num = this.numberUniversalHold - num;
        }
        return num;
    }

    public getUniversalNextHole(currentNumber:number, diceNumber:number): Laya.Sprite {
        let nextNumber:number = this.getUniversalNextNumber(currentNumber, diceNumber);
        return this.universal.getChildByName(nextNumber.toString()) as Laya.Sprite;
    }

    public deduce(diceNumber:number, chesses:Laya.Sprite[], complete: Laya.Handler) {
        let deduceResult:DeduceResult[] = [];
        for(let i = 0; i < chesses.length; ++i) {
            let chess = chesses[i].getComponent(Chess) as Chess;
            if (chesses[i].parent == this.groove && diceNumber == 5) {
                deduceResult.push({chess:chesses[i], reason:"entry"});
            } else if (chesses[i].parent == this.universal) {
                let nextHole = this.getUniversalNextHole(Number.parseInt(chess.hole.name), diceNumber);
                let resultChesses = this.getKickChesses(nextHole.getComponent(Route));
                if (resultChesses.length > 0) {
                    deduceResult.push({chess:chesses[i], reason:"kick"});
                } else {
                    deduceResult.push({chess:chesses[i], reason:"advance"});
                }
            }else {
                let currentHoleNumber:number = Number.parseInt(chess.hole.name);
                if (currentHoleNumber + diceNumber == 5) {
                    deduceResult.unshift({chess:chesses[i], reason:"home"});
                } else {
                    deduceResult.push({chess:chesses[i], reason:"advance"});
                }
            } 
        }
        complete.runWith([deduceResult]);
    }

    public isAllHome() {
        return this.home.length == 4;
    }

    private getChesses(route:Route, player:Player) {
        let chesses:Chess[] = [];
        for(let i = 0; i < route.chess.length; ++i) {
            let chess = route.chess[i].getComponent(Chess) as Chess;
            if (chess.player == player) {
                chesses.push(chess)
            }
        }
        return chesses;
    }

    public getKickChesses(route:Route) {
        let resultChesses:Chess[] = [];
        if (route.safe) {
            return resultChesses;
        }
        
        for(let i = 0; i < route.chess.length; ++i) {
            let chess = route.chess[i].getComponent(Chess) as Chess;
            if (chess.player == this) {
                continue;
            }

            let chesses = this.getChesses(route, chess.player);
            if (chesses.length == 1) {
                resultChesses.push(chess)
            }
        }
        return resultChesses;
    }

    private kick(route:Route) {
        let chesses = this.getKickChesses(route);
        chesses.map((chess:Chess)=>{
            chess.revert(Laya.Handler.create(this, ()=>{}));
        });
    }

    private onAdvanceComplete(node:Laya.Sprite, complete: Laya.Handler) {
        let chess = node.getComponent(Chess) as Chess;
        this.scaleChessInHole(node);

        if (chess.hole == this.goal) {
            let idx = this.chippy.indexOf(node);
            if (idx != -1) {
                this.home.push(this.chippy.splice(idx, 1)[0]);
            }
        }

        if (this.isAllHome()) {
            this.crown.visible = true;
            this.crown.getComponent(Laya.Animator2D).play("elastic");
        } else {
            let route = chess.hole.getComponent(Route);
            this.kick(route);
        }


        complete.runWith(node);
    }

    public advance(node:Laya.Sprite, diceNumber:number, complete: Laya.Handler) {
        let chess = node.getComponent(Chess) as Chess;
        if (this.chippy.indexOf(node) != -1) {
            chess.step(diceNumber + 1, 1, Laya.Handler.create(this, () => {
                this.onAdvanceComplete(node, complete);
            }));
        } else if (node.parent == this.groove) {
            chess.step(1, 1, Laya.Handler.create(this, () => {
                this.chippy.push(node);
                this.onAdvanceComplete(node, complete);
            }));
        }
    }
}