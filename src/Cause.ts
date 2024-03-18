const { regClass, property } = Laya;

@regClass()
export class Cause extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    //declare owner : Laya.Sprite;
    private hr:Laya.HttpRequest = null;
    private static game = "PR000004";
    private static channel: string = "CH000012";

    @property(String)
    public act: string = "click";

    @property(String)
    public trap: string = "";

    public static bi(act:String, trap:String, data:any = null) {
        let hr:Laya.HttpRequest = new Laya.HttpRequest();
        var reqstr = "game="+Cause.game + "&act=" + act + "&channel=" + Cause.channel + "&trap=" + trap;
        if (data) {
            reqstr += "&data=" + data;
        }
        var url ='http://bi.touchmagic.cn/index?' + reqstr;
        hr.send(url, reqstr, 'post', 'text');
    }

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    onMouseClick(): void {
        var trap = this.trap;
        if (trap == "") {
            trap = this.owner.name;
        }
        var e = this.owner as Laya.CheckBox;
        Cause.bi(this.act, trap,e?e.selected:null);
    }
}