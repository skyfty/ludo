const { regClass, property } = Laya;

@regClass()
export class Loser extends Laya.Script {
    @property(Laya.Prefab)
    public goldcoin: Laya.Prefab;

    
    @property(Laya.Sprite)
    public collectPoint: Laya.Sprite;

    @property(Laya.Button)
    public return: Laya.Button;

    
    @property(Laya.Label)
    public earnNumber: Laya.Label;

    private earn:number = 0;
    private step:number = 10;

    public setEarn(earn:number) {
        this.earn = earn;
        this.step = earn / 10;
    }
    constructor() {
        super();
    }
    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    onAwake(): void {
        this.return.on(Laya.Event.CLICK, this, ()=>{
            this.owner.event(Laya.Event.CLOSE);
        });
        this.earnNumber.text = this.earn.toString();
    }
     onStart(): void {
        let amount = 150;
        for(let i =0; i < amount; ++i) {
            let coin = this.goldcoin.create() as Laya.Sprite;
            coin.y =  this.collectPoint.y;
            coin.x =  this.collectPoint.x;
            this.owner.addChild(coin);

            let ypos = Math.random() *Laya.stage.height +500;
            let xpos =  Math.random() * (Laya.stage.width);

            let duration = Math.random() * 1000 + 500;
            Laya.Tween.to(coin, { y: ypos, x:  xpos }, duration, Laya.Ease.linearOut, Laya.Handler.create(this, () => {
                coin.removeSelf();
            }));
        }

        Laya.timer.frameLoop(10, this, ()=>{
            this.earn -= this.step;
            if (this.earn <= 0) {
                this.earn = 0;
            }
            this.earnNumber.text = this.earn.toString();

        });
    }
}