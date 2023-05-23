import { Computer } from "./Computer";
import { Oneself } from "./Oneself";
import { Extreme } from "./Extreme";
import * as Player from "./Player";
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

    public numberOfPlayer:number = 0;
    
    public players:Laya.Sprite[] = [];

    private playerOrder:number[] = []
    private currentIdx = 0;

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
        this.redPlayer.on(Player.Event.Achieve, this, this.onAchieve);
        this.greenPlayer.on(Player.Event.Achieve, this, this.onAchieve);
        this.yellowPlayer.on(Player.Event.Achieve, this, this.onAchieve);
        this.bluePlayer.on(Player.Event.Achieve, this, this.onAchieve);

        this.redPlayer.on(Player.Event.Victory, this, this.onVictory);
        this.greenPlayer.on(Player.Event.Victory, this, this.onVictory);
        this.yellowPlayer.on(Player.Event.Victory, this, this.onVictory);
        this.bluePlayer.on(Player.Event.Victory, this, this.onVictory);
    }

    onStart(): void {
        let playerId = this.playerOrder[this.currentIdx];
        this.players[playerId].getComponent(Performer).setState(Player.State.Running);
    }

    getPlayerIdByPlayer(p:Laya.Sprite) {
 
    }

    startGame(color:string):void {
        let player = this.getPlayer(color);
        let ids = Object.keys(this.players);;
        for(let i = 0; i < ids.length; ++i) {
            let id:number = Number.parseInt(ids[i]);
            if (this.players[id] == player) {
                this.currentIdx = this.playerOrder.indexOf(id);
                break;
            }
        }
    }

    onVictory() {
        this.players.map((node:Laya.Sprite)=>{
            node.getComponent(Performer).setState(Player.State.Idle);
        });
    }

    onAchieve() {
        let current =  this.players[this.playerOrder[this.currentIdx]].getComponent(Performer);
        current.setState(Player.State.Idle);
        if (this.currentIdx == this.playerOrder.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        let next = this.players[this.playerOrder[this.currentIdx]].getComponent(Performer);
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

    public addPlayer(color:string, type:Player.Type, profile:Player.Profile) {
        let player = this.getPlayer(color);
        if (player == null) {
            return;
        }
        this.players[profile.id] = player;
        this.playerOrder.push(profile.id);
        
        switch(type) {
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
        return player;
    }
}