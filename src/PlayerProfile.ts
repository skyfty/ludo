const { regClass, property } = Laya;

@regClass()
export class PlayerProfile extends Laya.Script {

    public userId:number = 0;

    constructor() {
        super();
    }
}