import { Dialog } from "./Dialog";
import { Profile } from "./Profile";

const { regClass, property } = Laya;



@regClass()
export class ProfileDialog extends Laya.Script {

    @property(Laya.TextInput)
    public name: Laya.TextInput;

    @property(Laya.List)
    public avatarList: Laya.List;

    @property(Number)
    public avatarNumber: number;

    
    @property(Laya.Label)
    public level: Laya.Label;

    @property(Laya.ProgressBar)
    public levelProcess: Laya.ProgressBar;
 

    
    @property(Laya.Label)
    public levelProcessLabel: Laya.Label;

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
        this.name.on(Laya.Event.BLUR, this, this.onNameInputBlur);

        let processValue = Profile.getRank() % 100;
        this.levelProcess.value = processValue / 100;
        this.levelProcessLabel.text = processValue + "/100";
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