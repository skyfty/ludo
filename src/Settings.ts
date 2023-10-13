const { regClass, property } = Laya;

@regClass()
export class Settings extends Laya.Script {
    //declare owner : Laya.Sprite3D;

    @property(Laya.CheckBox)
    public musicMuted: Laya.CheckBox;

    @property(Laya.CheckBox)
    public soundMuted: Laya.CheckBox;

    @property(Laya.Button)
    public languages: Laya.Button;


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

        this.languages.on(Laya.Event.CLICK, this, ()=>{
            Laya.Scene.open("dialog/language.lh", false, null);
        });

    }
}