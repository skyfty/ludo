const { regClass, property } = Laya;
import { Performer } from "./Performer";

@regClass()
export class Extreme extends Performer {
    //declare owner : Laya.Sprite3D;

    constructor() {
        super();
    }

    // protected  chooseChess(chesses:Laya.Sprite[], complete: Laya.Handler): void {
    //     complete.runWith(chesses[0]);
    // }

}