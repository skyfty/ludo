const { regClass, property } = Laya;
import { Performer } from "./Performer";
import * as Player from "./Player";

@regClass()
export class Extreme extends Performer {
    constructor() {
        super();
        this.owner.on(Player.Event.StateChange, this, this.onStateChange);
    }
    onStart(): void {
    }

    onStateChange() {
       
    }

    public startRoll() {
        if (this.state != Player.State.Running) {
            return;
        }
        this.player.startRoll();
    }
}