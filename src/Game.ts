const { regClass, property } = Laya;

import { Room } from "./Room";
import { Online } from "./Online";
import * as Player from "./Player";
import { Sender } from "./Sender";
import { Config } from "./Config";

@regClass()
export class Game extends Laya.Scene {

    constructor() {
        super();
    }

    onOpened(param: any) {
        if (param && param.type == "extreme") {
            this.challengeExtreme(param);
        } else {
            this.challengeComputer(param);
        }
    }

    private challengeExtreme(param: any) {
        let room = this.getComponent(Room);
        room.numberOfPlayer = param.number;
        this.addComponentInstance(new Online(param.station));
        let users = param.station.getUserList();
        for (let i = 0; i < users.length; ++i) {
            let color = param.station.getUserColor(users[i]);
            let type = users[i].isItMe ? Player.Type.Oneself : Player.Type.Extreme;
            let player = room.addPlayer(color, type, {
                "id": users[i].id,
                "name": users[i].name,
                "avatar": ""
            });
            if (users[i].isItMe) {
                player.addComponentInstance(new Sender(param.station));
            }
        }
        room.startGame("red");
    }

    private challengeComputer(param: any) {
        let room = this.getComponent(Room);
        room.numberOfPlayer = param && param.number ? param.number : 2;

        room.addPlayer(param.color, Player.Type.Oneself, {
            "id": 0,
            "name": "Yourself",
            "avatar": ""
        });
        let colors = JSON.parse(JSON.stringify(Config.Colors))
        let idx = colors.indexOf(param.color);

        let num = Math.min(room.numberOfPlayer - 1, 3);
        if (num == 1) {
            idx = ((idx % 2 == 0) ? (idx == 0 ? 2 : 0) : (idx == 1 ? 3 : 1));
            room.addPlayer(colors[idx], Player.Type.Computer, {
                "id": 1,
                "name": "Guest",
                "avatar": ""
            });
        } else {
            colors.splice(idx, 1);
            for (let i = 0; i < num; ++i) {
                let id = i + 1;
                room.addPlayer(colors[i], Player.Type.Computer, {
                    "id": id,
                    "name": "Guest",
                    "avatar": ""
                });
            }
        }
        room.startGame(param.color);
    }

}