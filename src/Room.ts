import { Computer } from "./Computer";
import { Oneself } from "./Oneself";
import { Extreme } from "./Extreme";
import * as Player from "./Player";
import { Performer } from "./Performer";
import { Config } from "./Config";
import { Reward } from "./Reward";

const { regClass, property } = Laya;

@regClass()
export class Room extends Laya.Script {
    @property(Laya.Image)
    public board: Laya.Image;

    @property([Laya.Sprite])
    public seatOfPlayer: Laya.Sprite[];

    @property(Laya.Prefab)
    public reward: Laya.Prefab;

    @property(Laya.Sprite)
    public chitchat:  Laya.Sprite;;

    @property(Laya.Prefab)
    public loser: Laya.Prefab;

    public numberOfPlayer: number = 0;
    public players: Laya.Sprite[] = [];
    private colorOfPlayer:string[] = JSON.parse(JSON.stringify(Config.Colors));

    public playerOrder: any[] = []
    public currentIdx = 0;
    public isVictory = false;

    constructor() {
        super();
    }

    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    onAwake(): void {
        this.initEventListener();
    }

    private initEventListener() {
        for(let idx in this.seatOfPlayer) {
            this.seatOfPlayer[idx].visible = false;
            this.seatOfPlayer[idx].on(Player.Event.Achieve, this, this.onPlayerAchieve);
            this.seatOfPlayer[idx].on(Player.Event.Victory, this, this.onPlayerVictory);
        }
    }

    onStart(): void {

    }

    onPlayerVictory(player:Laya.Sprite) {
        this.owner.event(Player.Event.Victory,[player]);
    }

    onPlayerAchieve() {
        this.owner.event(Player.Event.Achieve);
    }

    public setPlayersToIdle() {
        this.players.map((node: Laya.Sprite) => {
            node.getComponent(Performer).setState(Player.State.Idle);
        });
    }

    onVictory() {
        this.isVictory = true;
        this.setPlayersToIdle();
        Laya.SoundManager.playSound("sounds/win.mp3");
    }

    onAchieve() {
        let current = this.players[this.playerOrder[this.currentIdx].id].getComponent(Performer);
        current.setState(Player.State.Idle);
        if (this.currentIdx == this.playerOrder.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        let next = this.players[this.playerOrder[this.currentIdx].id].getComponent(Performer);
        next.setState(Player.State.Running);
    }

    private getPlayerOrderIndex(color: string, player: Laya.Sprite) {
        let idx = 0;
        let ids = Object.keys(this.players);;
        for (let i = 0; i < ids.length; ++i) {
            let id: number = Number.parseInt(ids[i]);
            if (this.players[id] == player) {
                idx = this.playerOrder.findIndex((order) => { return order.color == color; });
                break;
            }
        }
        return idx;
    }

    public getPlayerId(player:Laya.Sprite) {
        let resultId = 0;
        let ids = Object.keys(this.players);;
        for (let i = 0; i < ids.length; ++i) {
            let id: number = Number.parseInt(ids[i]);
            if (this.players[id] == player) {
                resultId = id;
                break;
            }
        }
        return resultId;
    }

    startGame(color: string): void {
        let player = this.getPlayer(color);
        this.currentIdx = this.getPlayerOrderIndex(color, player);
        for (let i = 0; i < this.playerOrder.length; ++i) {
            let performer = this.players[this.playerOrder[i].id].getComponent(Performer);
            if (i == this.currentIdx) {
                performer.setState(Player.State.Running);
            } else {
                performer.setState(Player.State.Idle);
            }
        }
    }

    public sortSeat(numberOfPlayer:number, colorOfSelf: string) {
        this.numberOfPlayer = numberOfPlayer;
        let idx = this.colorOfPlayer.indexOf(colorOfSelf);
        let right = this.colorOfPlayer.splice(0, idx);
        this.colorOfPlayer = this.colorOfPlayer.concat(right);

        for(let i = 0; i < this.seatOfPlayer.length; ++i) {
            let colorOfSeat = this.colorOfPlayer[i];
            this.seatOfPlayer[i].getComponent(Player.Player).setAttire(colorOfSeat);
        }

        this.board.rotation = -90 * idx;
    }

    private getPlayer(color: string) {
        let idx = this.colorOfPlayer.indexOf(color);
        let player =  this.seatOfPlayer[idx];
        return player;
    }

    public addPlayer(color: string, type: Player.Type, profile:any) {
        let player = this.getPlayer(color);
        if (player == null) {
            return;
        }
        player.visible = true;
        player.getComponent(Player.Player).setProfile(profile);

        this.players[profile.id] = player;
        this.playerOrder.push({ "id": profile.id, "color": color });

        switch (type) {
            case Player.Type.Oneself: {
                player.addComponentInstance(new Oneself());
                break;
            }
            case Player.Type.Extreme: {
                player.addComponentInstance(new Extreme(profile.userid));
                break;
            }
            case Player.Type.Computer: {
                player.addComponentInstance(new Computer());
                break;
            }
        }
        return player;
    }
}