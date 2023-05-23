const { regClass, property } = Laya;

import { Room } from "./Room";
import { Online } from "./Online";
import * as Player from "./Player";
import { Sender } from "./Sender";

@regClass()
export class Game extends Laya.Scene {

    constructor() {
        super();
    }
    static colors = ["yellow", "green", "blue"];

    onOpened(param:any) {
        let room = this.getComponent(Room);
        room.numberOfPlayer = param.number;

        switch(param.type) {
            case "computer": {
                this.addComputer(param);
                break;
            }
            case "extreme": {
                this.addExtreme(param);
                break;
            }
        }
    }

    private addExtreme(param:any) {
        let room = this.getComponent(Room);
        this.addComponentInstance(new Online(param.station));
        
        room.numberOfPlayer = 2;
        let users = param.station.sfs.lastJoinedRoom.getUserList();
        for(let i = 0; i <users.length; ++i) {
            if (users[i].isItMe) {
                let onself = room.addPlayer("red", Player.Type.Oneself,  {
                    "id":users[i].id,
                    "name":users[i].name,
                    "avatar":""
                });
                onself.addComponentInstance(new Sender(param.station));
            } else {
                room.addPlayer(Game.colors[i], Player.Type.Extreme,  {
                    "id":users[i].id,
                    "name":users[i].name,
                    "avatar":""
                });
            }
        }
    }

    private addComputer(param:any) {
        let room = this.getComponent(Room);
        
        room.addPlayer("red", Player.Type.Oneself,  {
            "id":0,
            "name":"sdfsdf",
            "avatar":""
        });

        let num = Math.min(room.numberOfPlayer, 3);
        for(let i = 1; i < num; ++i) {
            room.addPlayer(Game.colors[i], Player.Type.Computer,  {
                "id":i,
                "name":"sdfsdf",
                "avatar":""
            });
        }
    }

}