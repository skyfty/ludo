const { regClass, property } = Laya;
import i18n from "../node_modules/roddeh-i18n";

@regClass()
export class Translate extends Laya.Script {
    
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
            label.text = i18n(this.labelText);
        }
    }
}