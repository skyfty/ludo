const { regClass, property } = Laya;

import { CombatInfo } from "./CombatInfo";

@regClass()
export class CombatDialog extends Laya.Dialog {

    constructor() {
        super();
    }

    onOpened(isSelf: any) {
        this.getComponent(CombatInfo).setProfile(isSelf);
    }
}