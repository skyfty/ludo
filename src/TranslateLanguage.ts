const { regClass, property } = Laya;
import i18n from "../node_modules/roddeh-i18n";
import { Config } from "./Config";

@regClass()
export class TranslateLanguage extends Laya.Script {

    public static Urls:[]

    onAwake(): void {
      let url = Laya.LocalStorage.getItem("url");
      if(url == null) {
        TranslateLanguage.loadUrls(Laya.Handler.create(this, this.onLoadUrl));
      }
      TranslateLanguage.setLanguage(Laya.LocalStorage.getItem("language"), url);
    }

    onLoadUrl():void {
      let lc = Laya.LocalStorage.getItem("language");
      TranslateLanguage.loadLocalLanguage( Config.OSS_BASE_URL + TranslateLanguage.Urls[lc], lc);
    }


    static loadUrls(cb:Laya.Handler):void {
      Laya.loader.load(Config.TRANSLATE_URL, Laya.Loader.JSON).then((json) => {
          if (json == null || json.data == null|| json.data.data == null) {
            return;
          }
          TranslateLanguage.Urls = json.data.data;
          cb.run();
      });
    }

    static setLanguage(region:string, url:string) {
      if (region == null) {
        return;
      }
       TranslateLanguage.loadLocalLanguage("locale/" + region + ".json", region);
      if (url != null) {
        TranslateLanguage.loadLocalLanguage(url, region);
      }
    }

    static loadLocalLanguage(url:string, region:string) {
      Laya.loader.load(url, Laya.Loader.JSON).then((json) => {
        if (json == null || json.data == null) {
          return;
        }
        i18n.translator.add(json.data);
        Laya.LocalStorage.setItem("language", region);
      });
    }
}