const { regClass, property } = Laya;
import i18n from "../node_modules/roddeh-i18n";

@regClass()
export class TranslateLanguage extends Laya.Script {
    static regions = [
      {"local":"zh-cn", "name":"简体中文"}, 
      {"local":"en-us", "name":"English"}
    ];

    onAwake(): void {
      Laya.loader.load("http://oss.touchmagic.cn/locale/index.json", Laya.Loader.JSON).then((json) => {
        if (json == null || json.data == null) {
          return;
        }
        TranslateLanguage.regions = json.data;
      });
      TranslateLanguage.setLanguage(Laya.LocalStorage.getItem("language"));
    }

    static getIndexOfRegion(local:string) {
      for(let i  = 0; i < TranslateLanguage.regions.length; ++i) {
        if (TranslateLanguage.regions[i].local == local) {
          return i;
        }
      }
      return -1;
    }

    static getRegion(idx:any) {
      return TranslateLanguage.regions[idx].local;
    }

    static getRegionNameList() {
      let regionNames = [];
      for(let i in TranslateLanguage.regions) {
        regionNames.push(TranslateLanguage.regions[i].name);
      }
      return regionNames;
    }

    static setLanguage(region:string) {
      TranslateLanguage.loadLocalLanguage("locale/" + region + ".json", region);
      TranslateLanguage.loadLocalLanguage("http://oss.touchmagic.cn/locale/" + region + ".json", region);
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