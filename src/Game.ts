const { regClass, property } = Laya;

import { Room } from "./Room";
import { Online } from "./Online";
import { Local } from "./Local";
import * as Player from "./Player";
import { Sender } from "./Sender";
import { Config } from "./Config";
import  {Station} from "./Station";
import { Profile } from "./Profile";
import { Generalize } from "./Generalize";

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
        switch( param.type) {
            case "extreme": {
                this.challengeExtreme(param);
                break;
            }
             case "friend": {
                this.challengeExtreme(param);
                break;
            }
            default: {
                this.challengeComputer(param);
            }
        }
        this.addComponentInstance(new Generalize(param.type));
        Laya.SoundManager.stopMusic();
    }

    private challengeExtreme(param: any) {
        this.room.chitchat.visible = true;
        this.room.numberOfPlayer = param.number;
        this.addComponentInstance(new Online(param));

        let users = Station.getUserList();
        for (let i = 0; i < users.length; ++i) {
            let color = Station.getUserColor(users[i]);
            let type = users[i].isItMe ? Player.Type.Oneself : Player.Type.Extreme;
            let nickname = users[i].getVariable("nickname");
            let avatar = users[i].getVariable("avatar");
            let userid = users[i].getVariable("userid");

            let player = this.room.addPlayer(color, type, {
                "id": users[i].id,
                "userid":userid.value,
                "nickname": nickname.value,
                "avatar": avatar.value
            });
            if (users[i].isItMe) {
                player.addComponentInstance(new Sender());
            }
        }
    }

    private challengeComputer(param: any) {
        this.room.numberOfPlayer = param && param.number ? param.number : 2;
        this.addComponentInstance(new Local(param));

        this.room.addPlayer(param.color, Player.Type.Oneself, {
            "id": 0,
            "nickname": Profile.getNickname(),
            "avatar": Profile.getAvatar()
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
            "nickname": "Computer",
            "avatar": 0
        });
    }

}