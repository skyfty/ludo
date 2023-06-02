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

    protected addStationListener() {
        super.addStationListener();
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);

    }
    protected removeStationListener() {
        super.removeStationListener();
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);
    }

    private onRoomJoin(event: SFS2X.SFSEvent) {
        Laya.Dialog.closeAll();
        Laya.Scene.open("partner.ls", true,{"color":Config.Colors[this.colorIdx]});
    }
    
    onCreateRoom() {
        let selectPlayer = this.owner.getComponent(SelectPlayer) as SelectPlayer;
        var roomVars = this.getRoomInitVariable(true);
        var settings = this.getRoomSettings(selectPlayer.numberOfPlayer);
        settings.variables = roomVars;
        Station.sfs.send(new SFS2X.CreateSFSGameRequest(settings));
    }
}