const { regClass, property } = Laya;
import { UserInfo } from "./UserInfo";

@regClass()
export class BuddyInfo extends UserInfo {

    @property(Laya.ViewStack)
    public viewStack: Laya.ViewStack;

    constructor() {
        super();
    }

    onAwake(): void {
        super.onAwake();
        this.viewStack.selectedIndex = 0;
    }
}