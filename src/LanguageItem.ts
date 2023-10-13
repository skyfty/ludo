const { regClass, property } = Laya;


@regClass()
export class LanguageItem extends Laya.Script {
    @property( Laya.Button)
    public useBtn: Laya.Button;

    constructor() {
        super();
    }

    onAwake(): void {
    }
}