const { regClass, property } = Laya;
import i18n from "../node_modules/roddeh-i18n";

@regClass()
export class TranslateLanguage extends Laya.Script {
    constructor() {
        super();
        let language = Laya.LocalStorage.getItem("language");
        TranslateLanguage.setLanguage(language);
    }

    static setLanguage(region:string) {
      switch(region) {
        case "en": {
          i18n.translator.add({
            values:{
              "LV.": "ddd"
            }
          })
          break;
        }
        case "jp": {
          i18n.translator.add({
            values:{
              "LV.": "aaa"
            }
          })
          break;
        }
        default: {
          i18n.translator.add({
            values:{
              "LV.": "bbbb"
            }
          })
          break;
        }
      }
    }
}