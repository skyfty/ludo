const { regClass, property } = Laya;
import { Profile } from "./Profile";

@regClass()
export class MyselfTrim extends Laya.Script {
    //declare owner : Laya.Sprite3D;

    constructor() {
        super();
    }

    onLateUpdate(): void {
        let trim = Profile.getTrim();
        let image = this.owner as Laya.Image;
        image.skin  = Profile.getTrimImage(trim);
    }
}