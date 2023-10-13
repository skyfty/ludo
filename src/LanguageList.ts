const { regClass, property } = Laya;
import { LanguageItem } from "./LanguageItem";
import { TranslateLanguage } from "./TranslateLanguage";
import { Config } from "./Config";

@regClass()
export class LanguageList extends Laya.Script {

    @property(Laya.List)
    public list: Laya.List;
    static Names = {
        'zh':"中文",
        'en':"English",
        'ara':"عرب",
        'fra':"France",
        'de':"Deutschland",
        'id':"Indonesia",
        'it':"Italia",
        'jp':"日本",
        'kor':"대한민국",
        'per':"Peru",
        'pl':"Polska",
        'pt':"Portugal",
        'ru':"Расея",
        'spa':"España",
        'th':"ประเทศไทย",
        'tr':"Türkiye",
        'vie':"Việt Nam",
        'cht':"中文"
    };

    constructor() {
        super();
    }

    onAwake(): void {
        this.list.renderHandler = new Laya.Handler(this, this.updateItem);
        this.list.selectHandler = new Laya.Handler(this, this.onListSelected);
    }

    onListSelected(index: number):void{
        let language = this.list.array[index].lc;
        if (Laya.LocalStorage.getItem("language") != language) {
            Laya.LocalStorage.setItem("language", language);
            let url = TranslateLanguage.Urls != null ? Config.OSS_BASE_URL + TranslateLanguage.Urls[language]:null;
            Laya.LocalStorage.setItem("url", url);
            TranslateLanguage.setLanguage(language, url);
        }
    }

    onLoadUrl():void {
        let data = [];
        for (let key in TranslateLanguage.Urls) {
            let name = LanguageList.Names[key];
            data.push({
                "lc":key, 
                "name":name
            });
        }
        this.list.array = data;
    }

    onStart(): void {
        TranslateLanguage.loadUrls(Laya.Handler.create(this, this.onLoadUrl));
    }

    private updateItem(cell: any, index: number): void {
        let item = cell.getComponent(LanguageItem) as LanguageItem;
        item.useBtn.text = this.list.array[index].name;
    }
}