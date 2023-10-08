const { regClass, property } = Laya;
import { TranslateLanguage } from "./TranslateLanguage";

@regClass()
export class Settings extends Laya.Script {
    //declare owner : Laya.Sprite3D;

    @property(Laya.CheckBox)
    public musicMuted: Laya.CheckBox;

    @property(Laya.CheckBox)
    public soundMuted: Laya.CheckBox;

    private regions = [
        "zh-cn", 
        "en",
        "jp"
    ];
    private regionsText = [
        "简体中文", 
        "English",
        "Japanese"
    ];
    @property(Laya.ComboBox)
    public languages: Laya.ComboBox;

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

        this.languages.labels = this.regionsText.join(",");
        this.languages.selectHandler = new Laya.Handler(this, this.onLanguageSelected);
        this.languages.selectedIndex = this.regions.indexOf(Laya.LocalStorage.getItem("language"));
    }

    private onLanguageSelected(index: number) {
        if (Laya.LocalStorage.getItem("language") != this.regions[index]) {
            TranslateLanguage.setLanguage(this.regions[index]);
        }
    }
}