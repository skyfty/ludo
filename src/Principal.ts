const { regClass, property } = Laya;
import * as Player from "./Player";

@regClass()
export class Principal extends Laya.Script {
    constructor() {
        super();
    }

    onStart(): void {
        let info:Player.Profile = {
            "name":"sdfsdf",
            "avatar":""
        };
        this.owner.event(Player.Event.EntryRoom,["red", Player.Type.Oneself,Player.Event.EntryRoom,info]);
    }
}