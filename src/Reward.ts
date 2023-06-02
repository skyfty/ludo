const { regClass, property } = Laya;

@regClass()
export class Reward extends Laya.Script {
 
    @property(Laya.Prefab)
    public goldcoin: Laya.Prefab;

    
    @property(Laya.Sprite)
    public collectPoint: Laya.Sprite;

    @property(Laya.Button)
    public return: Laya.Button;

    
    @property(Laya.Label)
    public earnNumber: Laya.Label;

    private earn:number = 0;

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
    }

    private earninc = 0;
    private step:number = 10;

    /**
     * 第一次执行update之前执行，只会执行一次
     */
    onStart(): void {
        let amount = 150;
        for(let i =0; i < amount; ++i) {
            let xpos =  Math.random() * (Laya.stage.width);
            let coin = this.goldcoin.create() as Laya.Sprite;
            let ypos = Math.random() * 30 +500;
            coin.y = -ypos;
            coin.x = xpos;
            this.owner.addChild(coin);
            let duration = Math.random() * 1000 + 500;
            Laya.Tween.to(coin, { y: this.collectPoint.y, x:  this.collectPoint.x }, duration, Laya.Ease.linearOut, Laya.Handler.create(this, () => {
                coin.removeSelf();
            }));
        }
        Laya.SoundManager.playSound("sounds/jinbi.mp3", 1);
        
        Laya.timer.frameLoop(10, this, ()=>{
            this.earninc +=this.step;
            if (this.earninc > this.earn) {
                this.earninc = this.earn;
            }
            this.earnNumber.text = this.earninc.toString();

        });
    }

    public setEarn(earn:number) {
        this.earn = earn;
        this.step = earn / 10;
    }
}