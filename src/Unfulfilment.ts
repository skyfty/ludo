const { regClass, property } = Laya;

@regClass()
export class Unfulfilment extends Laya.Script {
     
    @property( Laya.Label)
    public tipLabel: Laya.Label;
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    onMouseClick(): void {
        this.tipLabel.set_visible(true)

        Laya.timer.once(2000, this, () => {
            this.tipLabel.set_visible(false)
        })

    }

    onAwake(): void {
        this.tipLabel.set_visible(false)
    }
}