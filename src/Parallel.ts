const { regClass, property,SoundManager } = Laya;
import { SelectPlayer } from "./SelectPlayer";

@regClass()
export class Parallel extends SelectPlayer {

    @property(Laya.ViewStack)
    public viewStack: Laya.ViewStack;

    constructor() {
        super();
    }

    onAwake(): void {
        super.onAwake();
    }

    

}