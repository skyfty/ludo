const { regClass, property } = Laya;
import { Room } from "./Room";
import * as Player from "./Player";
import { Trade } from "./Trade";
import { Oneself } from "./Oneself";

@regClass()
export class Local extends Laya.Script {
    room: Room;
    param: any;

    constructor(param: any) {
        super();
        this.param = param;
    }

    onAwake(): void {
        this.room = this.owner.getComponent(Room);
        this.owner.on(Player.Event.Achieve, this.room, this.room.onAchieve);
        this.owner.on(Player.Event.Victory, this, this.onVictory);
        this.owner.on(Player.Event.Hurl, this, this.onHurl);
        this.room.chitchat.visible = false;
    }

    onHurl(player: Laya.Sprite) {
        Laya.timer.once(900, this, () => {
            let num = Math.floor(Math.random() * 6);
            player.event(Player.Event.Hurl, num);
        });
    }

    onStart(): void {
        this.room.startGame(this.param.color);
    }

    onVictory(player: Laya.Sprite) {
        this.room.onVictory();
        let isSelf = player.getComponent(Oneself) != null;
        Laya.Scene.open("dialog/combat.lh", true, isSelf ? 0 : 1);
    }
}