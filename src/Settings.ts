const { regClass, property } = Laya;

@regClass()
export class Settings extends Laya.Script {
    //declare owner : Laya.Sprite3D;

    @property(Laya.CheckBox)
    public musicMuted: Laya.CheckBox;

    @property(Laya.CheckBox)
    public soundMuted: Laya.CheckBox;
    constructor() {
        super();
    }

    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    onAwake(): void {
        this.musicMuted.on(Laya.Event.CLICK, this, ()=>{
            Laya.SoundManager.musicMuted =this.musicMuted.selected;
            Laya.SoundManager.playMusic("sounds/menu.mp3", 0);
            Laya.LocalStorage.setItem("musicMuted",this.musicMuted.selected?"on":"off");
        });
        this.soundMuted.on(Laya.Event.CLICK, this, ()=>{
            Laya.SoundManager.soundMuted =this.soundMuted.selected;
            Laya.LocalStorage.setItem("soundMuted",this.soundMuted.selected?"on":"off");
        });
        this.musicMuted.selected = Laya.LocalStorage.getItem("musicMuted") == "on";
        this.soundMuted.selected = Laya.LocalStorage.getItem("soundMuted") == "on";
    }

}