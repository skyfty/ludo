const { regClass, property } = Laya;

@regClass()
export class AvatarList extends Laya.Script {

    @property(Laya.List)
    public list: Laya.List;

    constructor() {
        super();
    }


    onStart(): void {
        var data: Array<any> = [];

        // for (var m: number = 0; m < 20; m++) {

        //     data.push({ m_label: "No." + m });

        // }
    }
}