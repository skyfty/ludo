const { regClass, property } = Laya;
import * as SFS2X from "../node_modules/sfs2x-api";
import { Room } from "./Room";
import * as Player from "./Player";
import { Performer } from "./Performer";

@regClass()
export class Local extends Laya.Script {
    room: Room;
    param:any;

    constructor(param: any) {
        super();
        this.param = param;
    }

    onAwake(): void {
        this.room = this.owner.getComponent(Room);
        this.owner.on(Player.Event.Achieve, this.room, this.room.onAchieve);
        this.owner.on(Player.Event.Victory, this.room, this.room.onVictory);
        this.owner.on(Player.Event.Hurl, this, this.onHurl);
    }

    onHurl(player:Laya.Sprite) {
        Laya.timer.once(900, this, ()=>{
            let num = Math.floor(Math.random()* 6);
            player.event(Player.Event.Chuck, num);
        });
    }

    onStart(): void {
        this.room.startGame(this.param.color);
    }
}