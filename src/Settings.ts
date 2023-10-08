const { regClass, property } = Laya;
import { TranslateLanguage } from "./TranslateLanguage";

@regClass()
export class Settings extends Laya.Script {
    //declare owner : Laya.Sprite3D;

    @property(Laya.CheckBox)
    public musicMuted: Laya.CheckBox;

    @property(Laya.CheckBox)
    public soundMuted: Laya.CheckBox;

    @property(Laya.ComboBox)
    public languages: Laya.ComboBox;

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

        this.languages.labels = TranslateLanguage.getRegionNameList().join(",");
        this.languages.selectHandler = new Laya.Handler(this, this.onLanguageSelected);
        this.languages.selectedIndex = TranslateLanguage.getIndexOfRegion(Laya.LocalStorage.getItem("language"));
    }

    private onLanguageSelected(index: number) {
        let language = TranslateLanguage.getRegion(index);
        if (Laya.LocalStorage.getItem("language") != language) {
            TranslateLanguage.setLanguage(language);
        }
    }
}