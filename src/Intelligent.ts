const { regClass, property } = Laya;
import * as Player from "./Player";

@regClass()
export class Intelligent extends Laya.Script {
    private num = 0;

    constructor(num:number) {
        super();
        this.num = num;
    }

    onStart(): void {
        let info:Player.Profile = {
            "name":"sdfsdf",
            "avatar":""
        };
        this.owner.event(Player.Event.EntryRoom,["green", Player.Type.Computer, Player.Event.EntryRoom,info]);
    }
}