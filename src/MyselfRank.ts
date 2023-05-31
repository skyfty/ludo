const { regClass, property } = Laya;
import { Profile } from "./Profile";

@regClass()
export class MyselfRank extends Laya.Script {

    constructor() {
        super();
    }

    onLateUpdate(): void {
        let label = this.owner as Laya.Label;
        label.text =  Profile.getRank().toString();
    }

}