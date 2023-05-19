const { regClass, property } = Laya;
import { Chess } from "./Chess";

@regClass()
export class Groove extends Laya.Script {
    //declare owner : Laya.Sprite3D;

    @property(String)
    public text: string = "";

    constructor() {
        super();
    }

    public hop() {
        for(let i = 0;i < this.owner.numChildren;++i) {
            this.owner.getChildAt(i).getComponent(Chess).hop();
        }
    }
}