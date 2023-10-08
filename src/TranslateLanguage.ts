const { regClass, property } = Laya;
import i18n from "../node_modules/roddeh-i18n";

@regClass()
export class TranslateLanguage extends Laya.Script {
    constructor() {
        super();
        TranslateLanguage.setLanguage(Laya.LocalStorage.getItem("language"));
    }

    static setLanguage(region:string) {
      TranslateLanguage.loadLocalLanguage("locale/" + region + ".json", region);
      TranslateLanguage.loadLocalLanguage("http://api.touchmagic.cn/locale/" + region + ".json", region);
    }

    static loadLocalLanguage(url:string, region:string) {
      Laya.loader.load(url, Laya.Loader.JSON).then((json) => {
        if (json == null || json.data == null) {
          return;
        }
        i18n.translator.add(json.data);
        Laya.LocalStorage.setItem("language", region);
      });
      Laya.loader.on(Laya.Event.ERROR, this, function(err: string){
        console.log("加载失败: " + err);

      });

    }
}