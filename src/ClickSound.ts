const { regClass, property,SoundManager } = Laya;

@regClass()
export class Script extends Laya.Script {

    constructor() {
        super();
    }

    onMouseClick(): void {
        
        SoundManager.playSound("sounds/click.mp3", 1);
    }
}