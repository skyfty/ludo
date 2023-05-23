
const { regClass, property } = Laya;
import * as Station from "./Station";

@regClass()
export class Menu extends Laya.Script {
    @property(Laya.Button)
    public challengeComputer: Laya.Button;

    @property(Laya.Button)
    public challengeExtreme: Laya.Button;

    constructor() {
        super();
    }

    onAwake(): void {
        this.challengeComputer.on(Laya.Event.CLICK, this, this.onChallengeComputer);
        this.challengeExtreme.on(Laya.Event.CLICK, this, this.onChallengeExtreme);

        this.owner.on(Station.Event.Join, this, this.onJoinExtreme);
        this.owner.on(Station.Event.Exit, this, this.onExitExtreme);
        this.owner.on(Station.Event.Error, this, this.onExtremeError);
    }
    onChallengeComputer() {
        Laya.Scene.open("game.ls", false, {  "type": "computer", "number":2 });
    }
    onChallengeExtreme() {
        let st = this.owner.getComponent(Station.Station) as Station.Station;
        st.join(st.desks[0]);
    }

    onJoinExtreme() {
        let st = this.owner.getComponent(Station.Station) as Station.Station;
        Laya.Scene.open("game.ls", false, { "type": "extreme", "station": st });
    }

    onExitExtreme() {
    }
    onExtremeError() {
        Laya.Scene.open("game.ls", false, { "text": "没有勾选项，请先勾选" });
    }
}