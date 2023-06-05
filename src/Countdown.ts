const { regClass, property } = Laya;

@regClass()
export class Countdown extends Laya.Script {
    @property(Laya.Label)
    public count: Laya.Label;

    constructor() {
        super();
    }

    public show(cc:number,reason:string) {
        let owneSpirte = this.owner as Laya.Sprite;
        Laya.timer.loop(1000, this, () => {
            let timeout = Number.parseInt(this.count.text) - 1;
            if (timeout <= 0) {
                Laya.timer.clearAll(this);
                owneSpirte.event(Laya.Event.STOPPED,[reason]);
            }
            else {
                this.count.text = timeout.toString();
            }
        });
        owneSpirte.visible = true;
        this.count.text = cc.toString();
    }

    public hide() {
        Laya.timer.clearAll(this);
        let owneSpirte = this.owner as Laya.Sprite;
        owneSpirte.visible = false;
    }
}