const { regClass, property } = Laya;
import { Performer } from "./Performer";
import { Player,Event,State } from "./Player";

@regClass()
export class Extreme extends Performer {
    //declare owner : Laya.Sprite3D;

    constructor() {
        super();
    }
    onStart(): void {
        this.owner.on(Event.StateChange, this, this.onStateChange);
    }

    
    onStateChange() {
        if (this.state == State.Running) {

        }
    }

}