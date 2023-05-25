const { regClass, property } = Laya;

import { Room } from "./Room";
import { Online } from "./Online";
import { Local } from "./Local";
import * as Player from "./Player";
import { Sender } from "./Sender";
import { Config } from "./Config";
import  {Station} from "./Station";

@regClass()
export class Game extends Laya.Scene {
    room: Room;

    constructor() {
        super();
    }

    onAwake(): void {
        this.room = this.getComponent(Room);
    }

    onOpened(param: any) {
        if (param && param.type == "extreme") {
            this.challengeExtreme(param);
        } else {
            this.challengeComputer(param);
        }
    }

    private challengeExtreme(param: any) {
        this.room.numberOfPlayer = param.number;
        let users = Station.getUserList();
        for (let i = 0; i < users.length; ++i) {
            let color = Station.getUserColor(users[i]);
            let type = users[i].isItMe ? Player.Type.Oneself : Player.Type.Extreme;
            let player = this.room.addPlayer(color, type, {
                "id": users[i].id,
                "name": users[i].name,
                "avatar": ""
            });
            if (users[i].isItMe) {
                player.addComponentInstance(new Sender());
            }
        }
        this.addComponentInstance(new Online(param));
    }

    private challengeComputer(param: any) {
        this.room.numberOfPlayer = param && param.number ? param.number : 2;
        this.addComponentInstance(new Local(param));

        this.room.addPlayer(param.color, Player.Type.Oneself, {
            "id": 0,
            "name": "Oneself",
            "avatar": ""
        });
        let colors = JSON.parse(JSON.stringify(Config.Colors))
        let idx = colors.indexOf(param.color);

        let num = Math.min(this.room.numberOfPlayer - 1, 3);
        if (num == 1) {
            idx = ((idx % 2 == 0) ? (idx == 0 ? 2 : 0) : (idx == 1 ? 3 : 1));
            this.addComputerPlayer(colors[idx], 1);
        } else {
            colors.splice(idx, 1);
            for (let i = 0; i < num; ++i) {
                this.addComputerPlayer(colors[i], i + 1);
            }
        }
    }

    private addComputerPlayer(color:string, id:number) {
        this.room.addPlayer(color, Player.Type.Computer, {
            "id": id,
            "name": "Computer",
            "avatar": ""
        });
    }

}