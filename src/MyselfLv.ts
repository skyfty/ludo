const { regClass, property } = Laya;
import { Profile } from "./Profile";

@regClass()
export class MyselfLv extends Laya.Script {

    constructor() {
        super();
    }

    onLateUpdate(): void {
        let label = this.owner as Laya.Label;
        let rank = Profile.getRank();
        label.text = Math.floor(rank / 100).toString();
    }

}