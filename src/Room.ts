import { Computer } from "./Computer";
import { Oneself } from "./Oneself";
import { Extreme } from "./Extreme";
import * as Player from "./Player";
import { Intelligent } from "./Intelligent";
import { Principal } from "./Principal";
import { Online } from "./Online";
import { Performer } from "./Performer";

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

    private numberOfPlayer:number = 0;
    private currentIdx = 0;
    private players:Laya.Sprite[] = [];

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
    }

    private initEventListener() {
        this.redPlayer.on(Player.Event.Achieve, this, this.onAchieve);
        this.greenPlayer.on(Player.Event.Achieve, this, this.onAchieve);
        this.yellowPlayer.on(Player.Event.Achieve, this, this.onAchieve);
        this.bluePlayer.on(Player.Event.Achieve, this, this.onAchieve);

        this.redPlayer.on(Player.Event.Victory, this, this.onVictory);
        this.greenPlayer.on(Player.Event.Victory, this, this.onVictory);
        this.yellowPlayer.on(Player.Event.Victory, this, this.onVictory);
        this.bluePlayer.on(Player.Event.Victory, this, this.onVictory);

        this.owner.on(Player.Event.EntryRoom, this, this.onEntryRoom);
        this.owner.on(Player.Event.ExitRoom, this, this.onExitRoom);
    }

    onStart(): void {
        this.numberOfPlayer = 2;
        this.initEventListener();
        this.owner.addComponentInstance(new Principal());
        this.owner.addComponentInstance(new Intelligent(1));
        this.owner.addComponentInstance(new Online());
    }

    onVictory(player:Laya.Sprite) {

        
    }

    onAchieve(player:Laya.Sprite) {
        let current = this.players[this.currentIdx].getComponent(Performer);
        current.setState(Player.State.Idle);
        if (this.currentIdx == this.players.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        let next = this.players[this.currentIdx].getComponent(Performer);
        next.setState(Player.State.Running);
    }

    private getPlayer(color:string) {
        let player = null;
        switch(color) {
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

    onEntryRoom(color:string, type:Player.Type, profile:Player.Profile) {
        let player = this.getPlayer(color);
        if (player == null) {
            return;
        }
        this.players.push(player);
        switch(type) {
            case Player.Type.Oneself: {
                player.addComponentInstance(new Oneself());
                break;
            }
            case Player.Type.Online: {
                player.addComponentInstance(new Extreme());
                break;
            }
            case Player.Type.Computer: {
                player.addComponentInstance(new Computer());
                break;
            }
        }
        if (this.players.length == this.numberOfPlayer) {
            let current = this.players[this.currentIdx].getComponent(Performer);
            current.setState(Player.State.Running);
        }
    }

    onExitRoom(player:Laya.Sprite) {
        let idx = this.players.indexOf(player);
        if (idx != -1) {
            this.players.splice(idx, 1);
        }
    }
}