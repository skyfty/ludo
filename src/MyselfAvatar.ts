import { Profile } from "./Profile";

const { regClass, property } = Laya;

@regClass()
export class MyselfAvatar extends Laya.Script {
    constructor() {
        super();
    }

    onLateUpdate(): void {
        let clip = this.owner as Laya.Clip;
        clip.index =  Profile.getAvatar();
    }

}