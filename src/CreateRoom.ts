const { regClass, property } = Laya;
import { GameRoom } from "./GameRoom";
import { Parallel } from "./Parallel";
import { Config } from "./Config";
import * as SFS2X from "../node_modules/sfs2x-api";
import { Station } from "./Station";
import { SelectPlayer } from "./SelectPlayer";

@regClass()
export class CreateRoom extends GameRoom {

    @property(Laya.Button)
    public play: Laya.Button;
    
    @property(Laya.Button)
    public closeBtn: Laya.Button;
    constructor() {
        super();
    }

    onAwake(): void {
        super.onAwake();
        this.play.disabled = true;
        this.closeBtn.on(Laya.Event.CLICK, this, () => {
            Laya.Dialog.closeAll();
        });
        let selectPlayer = this.owner.getComponent(SelectPlayer) as SelectPlayer;

        for (let idx in selectPlayer.colorCheckBox) {
            selectPlayer.colorCheckBox[idx].on(Laya.Event.CLICK, this, () => {
                this.play.disabled = false;
                this.colorIdx = Number.parseInt(idx);
            });
        }

        this.play.on(Laya.Event.CLICK, this, this.onCreateRoom);
    }

    public addStationListener() {
        super.addStationListener();
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
    }
    public removeStationListener() {
        super.removeStationListener();
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
    }

    private onRoomJoin(event: SFS2X.SFSEvent) {
        var params = new SFS2X.SFSObject();
        params.putUtfString("scope", "createroom");
        Station.sfs.send(new SFS2X.ExtensionRequest("GetJettonRequest", params));
    }

    private getRoomCode() {
        const  today = new Date();
        const  hh =  String(today.getHours()).padStart(2, '0');       //获取当前小时数(0-23)
        const  mm = String(today.getMinutes()).padStart(2, '0');     //获取当前分钟数(0-59)
        const  ss = String(today.getSeconds()).padStart(2, '0');     //获取当前秒数(0-59)
        return hh+mm+ss;
    }
    
    onCreateRoom() {
        let selectPlayer = this.owner.getComponent(SelectPlayer) as SelectPlayer;
        var roomVars = this.getRoomInitVariable(true);
        roomVars.push(new SFS2X.SFSRoomVariable("RoomCode", this.getRoomCode()));
        var settings = this.getRoomSettings(selectPlayer.numberOfPlayer);
        settings.variables = roomVars;
        Station.sfs.send(new SFS2X.CreateSFSGameRequest(settings));
    }

    private onExtensionResponse(evtParams: SFS2X.SFSEvent) {
        if ("GetJettonRequest" == evtParams.cmd) {
            let jettons = evtParams.params.getSFSArray("list");
            let item = jettons.getSFSObject(0);
            let varname = Station.getUserJettonName();
            Station.sfs.send(new SFS2X.SetRoomVariablesRequest([new SFS2X.SFSRoomVariable(varname, item)]));

            Laya.Dialog.closeAll();
            Laya.Scene.open("invite.ls", true,{"color":Config.Colors[this.colorIdx]});
        }
    }
}