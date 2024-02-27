const { regClass, property } = Laya;

@regClass()
export class Cause extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    //declare owner : Laya.Sprite;
    private hr:Laya.HttpRequest = null;
    private game = "PR000004";
    private channel: string = "CH000012";

    @property(String)
    public act: string = "click";

    @property(String)
    public trap: string = "";

    
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    onMouseClick(): void {
        var trap = this.trap;
        if (trap == "") {
            trap = this.owner.name;
        }
        this.hr = new Laya.HttpRequest();
        var reqstr = "game="+this.game + "&act=" + this.act + "&channel=" + this.channel + "&trap=" + trap;
        var e = this.owner as Laya.CheckBox;
        if (e) {
            reqstr += "&data=" + e.selected;
        }
        var url ='http://bi.touchmagic.cn/index?' + reqstr;
        this.hr.send(url, reqstr, 'post', 'text');
    }
}