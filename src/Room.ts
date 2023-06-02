import { Computer } from "./Computer";
import { Oneself } from "./Oneself";
import { Extreme } from "./Extreme";
import * as Player from "./Player";
import { Performer } from "./Performer";
import { Reward } from "./Reward";
import { Loser } from "./Loser";

const { regClass, property } = Laya;

@regClass()
export class Room extends Laya.Script {
    @property(Laya.Sprite)
    public redPlayer: Laya.Sprite;

    @property(Laya.Sprite)
    public greenPlayer: Laya.Sprite;

    @property(Laya.Sprite)
    public bluePlayer: Laya.Sprite;

    @property(Laya.Sprite)
    public yellowPlayer: Laya.Sprite;

    @property(Laya.Prefab)
    public reward: Laya.Prefab;


    @property(Laya.Prefab)
    public loser: Laya.Prefab;

    public numberOfPlayer: number = 0;

    public players: Laya.Sprite[] = [];

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
        this.redPlayer.visible = false;
        this.greenPlayer.visible = false;
        this.bluePlayer.visible = false;
        this.yellowPlayer.visible = false;
        this.initEventListener();
    }

    private initEventListener() {
        this.redPlayer.on(Player.Event.Achieve, this, this.onPlayerAchieve);
        this.greenPlayer.on(Player.Event.Achieve, this, this.onPlayerAchieve);
        this.yellowPlayer.on(Player.Event.Achieve, this, this.onPlayerAchieve);
        this.bluePlayer.on(Player.Event.Achieve, this, this.onPlayerAchieve);

        this.redPlayer.on(Player.Event.Victory, this, this.onPlayerVictory);
        this.greenPlayer.on(Player.Event.Victory, this, this.onPlayerVictory);
        this.yellowPlayer.on(Player.Event.Victory, this, this.onPlayerVictory);
        this.bluePlayer.on(Player.Event.Victory, this, this.onPlayerVictory);
    }

    onStart(): void {

    }

    onPlayerVictory() {
        this.owner.event(Player.Event.Victory);
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

    private getPlayer(color: string) {
        let player = null;
        switch (color) {
            case "red": {
                player = this.redPlayer;
                break;

            }
            case "blue": {
                player = this.bluePlayer;
                break;

            }
            case "yellow": {
                player = this.yellowPlayer;
                break;

            }
            case "green": {
                player = this.greenPlayer;
                break;
            }
        }
        return player;
    }

    public addPlayer(color: string, type: Player.Type, profile: Player.Profile) {
        let player = this.getPlayer(color);
        if (player == null) {
            return;
        }
        this.players[profile.id] = player;
        this.playerOrder.push({ "id": profile.id, "color": color });

        switch (type) {
            case Player.Type.Oneself: {
                player.addComponentInstance(new Oneself());
                break;
            }
            case Player.Type.Extreme: {
                player.addComponentInstance(new Extreme());
                break;
            }
            case Player.Type.Computer: {
                player.addComponentInstance(new Computer());
                break;
            }
        }
        player.getComponent(Player.Player).setProfile(profile);
        return player;
    }
}