const { regClass, property } = Laya;


@regClass()
export class PropsItem extends Laya.Script {
    @property( Laya.Label)
    public gold: Laya.Label;

    
    @property( Laya.Clip)
    public image: Laya.Clip;

    @property( Laya.Button)
    public useBtn: Laya.Button;

    constructor() {
        super();
    }

    onAwake(): void {
    }
}