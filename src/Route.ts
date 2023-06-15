const { regClass, property } = Laya;

export enum Safe {
    no,
    yes
};

export class Event {
    static Enter = "ROUTE_ENTER";
    static Exit = "ROUTE_EXIT";
}

@regClass()
export class Route extends Laya.Script {
    
    @property(Laya.Clip)
    public puddle:Laya.Clip;

    @property(Laya.Clip)
    public magicClip:Laya.Clip;

    @property( { type : Safe } )
    safe : Safe = Safe.no;

    @property([Laya.Sprite])
    public chess:Laya.Sprite[] = [];

    public magic:any = null;

    constructor() {
        super();
    }


    onAwake(): void {
        super.onAwake();
        this.owner.on(Event.Enter, this, this.scaleChess);
        this.owner.on(Event.Exit, this, this.scaleChess);
    }

    public setMagic(magic:any) {
        this.magic = magic;
        this.magicClip.visible = magic != null;
        if (magic != null) {
            this.magicClip.index = magic.clip;
        }
    }

    public puddleAni(color:string) {
        let idxs = {"red":[0, 5], "green":[6,11], "yellow":[12,17], "blue":[18,23]}[color];
        this.puddle.visible = true;
        this.puddle.play(idxs[0], idxs[1]);
        Laya.timer.once(700, this, ()=>{
            this.puddle.visible = false;
        });
    }

    public scaleChess(hole:Laya.Point) {
        if (this.chess.length == 1) {
            this.chess[0].scale(1, 1).pos(hole.x, hole.y);
        } else if (this.chess.length == 2) {
            this.chess[0].scale(0.7, 0.7).pos(hole.x - 3, hole.y - 3);
            this.chess[1].scale(0.7, 0.7).pos(hole.x + 14, hole.y + 15);
        } else if (this.chess.length == 3) {
            this.chess[0].scale(0.6, 0.6).pos(hole.x - 4, hole.y - 3);
            this.chess[1].scale(0.6, 0.6).pos(hole.x + 18, hole.y - 3);
            this.chess[2].scale(0.6, 0.6).pos(hole.x + 7, hole.y + 17);
        }else if (this.chess.length == 4) {
            this.chess[0].scale(0.6, 0.6).pos(hole.x - 4, hole.y - 3);
            this.chess[1].scale(0.6, 0.6).pos(hole.x + 18, hole.y - 3);
            this.chess[2].scale(0.6, 0.6).pos(hole.x - 4, hole.y + 17);
            this.chess[3].scale(0.6, 0.6).pos(hole.x + 18, hole.y + 17);
        }
        else if (this.chess.length == 5) {
            this.chess[0].scale(0.6, 0.6).pos(hole.x - 6, hole.y - 6);
            this.chess[1].scale(0.6, 0.6).pos(hole.x + 19, hole.y - 6);
            this.chess[2].scale(0.6, 0.6).pos(hole.x - 6, hole.y + 20);
            this.chess[3].scale(0.6, 0.6).pos(hole.x + 19, hole.y + 20);
            this.chess[4].scale(0.6, 0.6).pos(hole.x + 7, hole.y + 7);
        } else {
            let x = 0;
            let y = hole.y - 20;
            for(let i = 0; i <this.chess.length; ++i ) {
                if (i % 3 == 0) {
                    y += 15;
                    x = hole.x - 6;
                } else {
                    x += 15;
                }
                this.chess[i].scale(0.5, 0.5).pos(x, y);
            }
        }
    }

}