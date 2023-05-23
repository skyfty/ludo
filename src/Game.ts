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

    onOpened(param:any) {
        if (param && param.type == "extreme") {
            this.challengeExtreme(param);
        } else {
            this.challengeComputer(param);
        }
    }

    private challengeExtreme(param:any) {
        let room = this.getComponent(Room);
        this.addComponentInstance(new Online(param.station));
        
        room.numberOfPlayer = 2;
        let users = param.station.sfs.lastJoinedRoom.getUserList();
        for(let i = 0; i <users.length; ++i) {
            let color = users[i].getVariable("color");
            let type = users[i].isItMe? Player.Type.Oneself: Player.Type.Extreme;
            let player = room.addPlayer(color.value, type,  {
                "id":users[i].id,
                "name":users[i].name,
                "avatar":""
            });
            if (users[i].isItMe) {
                player.addComponentInstance(new Sender(param.station));
            }
        }

        room.startGame("red");
    }

    static colors = ["yellow", "green", "blue"];
    private challengeComputer(param:any) {
        let room = this.getComponent(Room);
        room.numberOfPlayer = param && param.number ?  param.number :2;

        room.addPlayer("red", Player.Type.Oneself,  {
            "id":0,
            "name":"sdfsdf",
            "avatar":""
        });

        let num = Math.min(room.numberOfPlayer - 1, 3);
        for(let i = 0; i < num; ++i) {
            let id = i + 1;
            room.addPlayer(Game.colors[i], Player.Type.Computer,  {
                "id":id,
                "name":"sdfsdf",
                "avatar":""
            });
        }
        room.startGame("red");
    }

}