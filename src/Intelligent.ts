const { regClass, property } = Laya;
import * as Player from "./Player";

@regClass()
export class Intelligent extends Laya.Script {
    private num = 0;

    constructor(num:number) {
        super();
        this.num = Math.min(num, 3);
    }

    static colors = ["yellow", "green", "blue"];

    onStart(): void {
        let info:Player.Profile = {
            "name":"sdfsdf",
            "avatar":""
        };
        for(let i = 0; i < this.num; ++i) {
            this.owner.event(Player.Event.EntryRoom,[Intelligent.colors[i], Player.Type.Computer, Player.Event.EntryRoom,info]);
        }
    }
}