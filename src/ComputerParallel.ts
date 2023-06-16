const { regClass, property } = Laya;
import { Config } from "./Config";
import { Parallel } from "./Parallel";


@regClass()
export class ComputerParallel extends Laya.Script {
    private colorIdx: number = -1;

    constructor() {
        super();
    }

    onAwake(): void {
        let parallel = this.owner.getComponent(Parallel);
        parallel.viewStack.selectedIndex = 0;

        let play = parallel.viewStack.getChildByName("item0") as Laya.Button;
        play.disabled = true;

        for (let idx in parallel.colorCheckBox) {
            parallel.colorCheckBox[idx].on(Laya.Event.CLICK, this, () => {
                play.disabled = false;
                this.colorIdx = Number.parseInt(idx);
            });
        }
        play.on(Laya.Event.CLICK, this,  () => {
            Laya.Dialog.closeAll();
            let param:any =  { 
                "type": "computer",
                "color": Config.Colors[this.colorIdx],
                "number":parallel.numberOfPlayer
            };
            if (parallel.magic.selected) {
                param.magic = parallel.randomMagic();
            }
            Laya.Scene.open("game.ls", true ,param);
        });
    }
}