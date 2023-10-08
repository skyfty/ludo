const { regClass, property } = Laya;
import i18n from "../node_modules/roddeh-i18n";

@regClass()
export class TranslateTab extends Laya.Script {
    
    private labels:string[];

    onAwake(): void {
        let tab = this.owner  as Laya.Tab;
        if (tab != null) {
            this.labels = tab.labels.split(",")
        }
    }
    onUpdate(): void {
        let tab = this.owner  as Laya.Tab;
        if (tab != null) {
            let labelsArr = [];
            for(let i in this.labels) {
                labelsArr.push(i18n(this.labels[i]));
            }
            tab.labels = labelsArr.join(",");
        }
    }
}