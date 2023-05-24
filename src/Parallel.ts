const { regClass, property } = Laya;
import * as SFS2X from "../node_modules/sfs2x-api";
import * as Station from "./Station";

@regClass()
export class Parallel extends Laya.Script {

    @property(Laya.Button)
    public closeBtn: Laya.Button;

    @property(Laya.Button)
    public play2pBtn: Laya.Button;

    @property(Laya.Button)
    public play4pBtn: Laya.Button;
    
    @property(Laya.Button)
    public play: Laya.Button;
    
    @property(Laya.RadioGroup)
    public colorGroup: Laya.RadioGroup;

    public station:Station.Station = null;
    
    constructor() {
        super();
    }

    onAwake(): void {
        //关闭按钮
        this.closeBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
            this.owner.event(Laya.Event.CLOSE);
            this.station.sfs.removeEventListener(SFS2X.SFSEvent.USER_VARIABLES_UPDATE, this.onUserVariablesUpdate);
            this.owner.parent.removeSelf()
        });
        this.colorGroup.selectHandler = new Laya.Handler(this, this.onSelectColor);
    }

    onSelectColor(index: number): void {
        let color = this.colorGroup.selectedIndex == 0?"red":"yellow";
        let userVar = new SFS2X.SFSUserVariable("color", color);
        this.station.sfs.send(new SFS2X.SetUserVariablesRequest([userVar]));
    }

    public listen() {
        this.station.sfs.addEventListener(SFS2X.SFSEvent.USER_VARIABLES_UPDATE, this.onUserVariablesUpdate, this);
    }

    public onUserVariablesUpdate(event: SFS2X.SFSEvent) {
        console.log(event);

        // Check if the 'topic' variable was set/updated
        // if (event.changedVars.indexOf("topic") > -1)
        // {
        // 	var deleted = !event.room.containsVariable("topic");
        // 	showRoomTopic(event.room, deleted);
        // }
    }


}