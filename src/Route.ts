const { regClass, property } = Laya;

enum Safe {
    yes,
    no
};

@regClass()
export class Route extends Laya.Script {
    
    @property(Laya.Clip)
    public puddle:Laya.Clip;

    @property( { type : Safe } )
    safe : Safe = Safe.no;

    public chess:Laya.Sprite[] = [];

    constructor() {
        super();
    }


    public puddleAni(color:string) {
        let idxs = {"red":[0, 5], "green":[6,11], "yellow":[12,17], "blue":[18,23]}[color];
        this.puddle.visible = true;
        this.puddle.play(idxs[0], idxs[1]);
        Laya.timer.once(700, this, ()=>{
            this.puddle.visible = false;
        });
    }
}