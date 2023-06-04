import { Dialog } from "./Dialog";
import { Profile } from "./Profile";

const { regClass, property } = Laya;



@regClass()
export class ProfileDialog extends Laya.Script {
    //declare owner : Laya.Sprite3D;

    @property(Laya.TextInput)
    public name: Laya.TextInput;

    @property(Laya.List)
    public avatarList: Laya.List;

    @property(Laya.Button)
    public returnBtn: Laya.Button;

    @property(Number)
    public avatarNumber: number;

    private playerName:string;

    constructor() {
        super();
        this.playerName = Profile.getNickname();
    }

    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    onAwake(): void {
        this.name.text = this.playerName;
        this.avatarList.renderHandler = new Laya.Handler(this, this.updateItem);
        this.avatarList.selectHandler = new Laya.Handler(this, Profile.setAvatar);

        var data: Array<number> = [];
        for (var m: number = 0; m < this.avatarNumber; m++) {
            data.push(m);
        }
        this.avatarList.array = data;
        this.returnBtn.on(Laya.Event.CLICK, this, ()=>{
            let dlg = this.owner as Laya.Dialog;
            dlg.close();
        });

        this.name.on(Laya.Event.BLUR, this, this.onNameInputBlur);
    }

    private onNameInputBlur() {
        if (this.name.text != "" && this.name.text !=  this.playerName) {
            Profile.setNickname(this.name.text);
        }
    }

    private updateItem(cell: any, index: number): void {
        let clip = cell.getChildByName("avatarclip") as Laya.Clip;
        clip.index = index;
    }
}