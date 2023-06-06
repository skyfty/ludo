const { regClass, property } = Laya;
import * as Player from "./Player";

@regClass()
export class Medal extends Laya.Script {

    public numberOfPlayer: number = 0;
    public winPlayerId: string;
    public players:  Laya.Sprite[];

    constructor(winPlayerId: string, numberOfPlayer: number, players: Laya.Sprite[]) {
        super();
        this.numberOfPlayer = numberOfPlayer;
        this.winPlayerId = winPlayerId;
        this.players = players;
    }

    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    onAwake(): void {
        let viewStack  = this.owner as Laya.ViewStack;
        viewStack.selectedIndex = this.numberOfPlayer - 2;
        let item = viewStack.getChildAt(viewStack.selectedIndex);

        let idx = 1;
        for (let playerId in this.players) {
            let profile = this.players[playerId].getComponent(Player.Player).profile;
            let itemBox = null;
            if (this.winPlayerId == playerId) {
                itemBox = item.getChildByName("0") as Laya.Box;
            } else {
                itemBox = item.getChildByName(idx.toString()) as Laya.Box;
                idx++;
            }
            let avatar = itemBox.getChildByName("avatar") as Laya.Clip;
            avatar.index = profile.avatar;
            let name = itemBox.getChildByName("name") as Laya.Label;
            name.text = profile.nickname;
        }
    }
}