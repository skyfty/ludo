const { regClass, property } = Laya;
import { Room } from "./Room";
import * as Player from "./Player";
import { Trade } from "./Trade";
import { Config } from "./Config";

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
        this.room.chitchat.visible = false;
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