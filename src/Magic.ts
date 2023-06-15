const { regClass, property } = Laya;
import { Room } from "./Room";
import { Config } from "./Config";
import { Route } from "./Route";


@regClass()
export class Magic extends Laya.Script {
    room: Room;
    param: any;
    magicMakeup:any;

    constructor(param: any) {
        super();
        this.param = param;
        this.magicMakeup = Config.MagicMap[param.magic];
    }

    onAwake(): void {
        this.room = this.owner.getComponent(Room);
    }

    onStart(): void {
        let universal = this.room.universal;
        for(let i in this.magicMakeup.makeup) {
            let route = universal.getChildByName(i).getComponent(Route);
            route.setMagic(this.magicMakeup.makeup[i]);
        }
    }
}