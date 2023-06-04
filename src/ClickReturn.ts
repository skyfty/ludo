const { regClass, property,SoundManager } = Laya;

@regClass()
export class ClickReturn extends Laya.Script {
    
    @property(Laya.Dialog)
    public dialog: Laya.Dialog;

    constructor() {
        super();
    }

    onMouseClick(): void {
        this.dialog.close();
    }
}