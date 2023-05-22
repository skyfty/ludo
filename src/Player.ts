import { Chess } from "./Chess";

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
    public originTwinkle: Laya.Sprite;

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

    
    public reckonChess(diceNumber:number, complete: Laya.Handler): void {
        if (diceNumber != 5 && this.chippy.length > 0) {
            if (this.chippy.length > 1) {
                complete.runWith([this.chippy]);
            } else {
                complete.runWith([new Array(this.chippy[0])]);
            }
        } else if (diceNumber == 5) {
            let chesses:Laya.Sprite[] = [];
            chesses = chesses.concat(this.chippy);
            for(let i = 0;i < this.groove.numChildren;++i) {
                chesses.push(this.groove.getChildAt(i) as Laya.Sprite);
            }
            complete.runWith([chesses]);
        }
        else
        {
            complete.runWith(null);
        }
    }

    public isAllHome() {
        return this.home.length == 4;
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