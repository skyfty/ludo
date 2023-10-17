const { regClass, property } = Laya;
import i18n from "../node_modules/roddeh-i18n";

@regClass()
export class TranslateLabel extends Laya.Script {
    
    private labelText:string = null;

    onAwake(): void {
        let label = this.owner  as Laya.Label;
        if (label != null) {
            this.labelText = label.text;
        }
    }
    onUpdate(): void {
        let label = this.owner  as Laya.Label;
        if (label != null) {
            let t =  i18n(this.labelText);
            if (t) {
                label.text = t;
           
            } else {
                label.text = this.labelText;

            }
        }
    }
}