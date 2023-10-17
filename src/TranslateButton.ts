const { regClass, property } = Laya;
import i18n from "../node_modules/roddeh-i18n";

@regClass()
export class TranslateButton extends Laya.Script {
    
    private labelText:string = null;

    onAwake(): void {
        let button = this.owner  as Laya.Button;
        if (button != null) {
            this.labelText = button.label;
        }
    }
    onUpdate(): void {
        let button = this.owner  as Laya.Button;
        if (button != null) {
            let t =  i18n(this.labelText);
            if (t) {
                button.label = t;
            } else {
                button.label = this.labelText;

            }
        }
    }
}