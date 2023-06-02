const { regClass, property } = Laya;
import { GameRoom } from "./GameRoom";
import { Parallel } from "./Parallel"
import * as SFS2X from "../node_modules/sfs2x-api";
import { Station } from "./Station";
import { Config } from "./Config";

@regClass()
export class OnlineParallel extends GameRoom {
    constructor() {
        super();
    }

    private jettons: SFS2X.SFSArray = null;
    private idx = 0;
    private earnLabel: Laya.Label = null;
    private payLabel: Laya.Label = null;

    onAwake(): void {
        super.onAwake();
   
        let parallel = this.owner.getComponent(Parallel);
        parallel.viewStack.selectedIndex = 1;

        let item = parallel.viewStack.getChildByName("item1");
        let play = item.getChildByName("play") as Laya.Button;
        play.on(Laya.Event.CLICK, this, this.onPlay);

        this.earnLabel = play.getChildByName("earn") as Laya.Label;
        this.payLabel = play.getChildByName("pay") as Laya.Label;
        
        for (let idx in parallel.colorCheckBox) {
            parallel.colorCheckBox[idx].on(Laya.Event.CLICK, this, () => {
                play.disabled = false;
                this.colorIdx = Number.parseInt(idx);
            });
        }

        item.getChildByName("reduce").on(Laya.Event.CLICK, this, () => {
            if (this.idx >0) {
                this.idx--;
            }
            this.refreshEarnPayLabel();
        });

        item.getChildByName("plus").on(Laya.Event.CLICK, this, () => {
            if (this.idx < this.jettons.size() - 1) {
                this.idx++;
            }
            this.refreshEarnPayLabel();
        });
        parallel.closeBtn.on(Laya.Event.CLICK, this, () => {
            Laya.Dialog.closeAll();
        });

        Station.sfs.send(new SFS2X.ExtensionRequest("GetJettonRequest"));
    }

    private refreshEarnPayLabel() {
        let item = this.jettons.getSFSObject(this.idx);
        this.earnLabel.text =  item.getDouble("earn");
        this.payLabel.text =  item.getDouble("pay");
    }

    private onRoomJoin(event: SFS2X.SFSEvent) {
        Laya.Dialog.closeAll();
        let roomVars = [];
        let varname = Station.getUserJettonName();
        roomVars.push(new SFS2X.SFSRoomVariable(varname, this.jettons.getSFSObject(this.idx)));
        Station.sfs.send(new SFS2X.SetRoomVariablesRequest(roomVars));
        Laya.Scene.open("partner.ls", true,{"color":Config.Colors[this.colorIdx]});
    }

    onPlay() {
        let parallel = this.owner.getComponent(Parallel) as Parallel;
        if (this.colorIdx == -1) {
            return;
        }

        let roomVars = this.getRoomInitVariable(false);
        var settings = this.getRoomSettings(parallel.numberOfPlayer);
        settings.variables = roomVars;

        var exp = new SFS2X.MatchExpression(SFS2X.RoomProperties.IS_GAME, SFS2X.BoolMatch.EQUALS, true)
            .and(SFS2X.RoomProperties.HAS_FREE_PLAYER_SLOTS, SFS2X.BoolMatch.EQUALS, true)
            .and(SFS2X.RoomProperties.MAX_USERS, SFS2X.NumberMatch.EQUALS, parallel.numberOfPlayer)
            .and("private", SFS2X.BoolMatch.EQUALS, false)
            .and(Config.Colors[this.colorIdx], SFS2X.NumberMatch.EQUALS, -1);

        Station.sfs.send(new SFS2X.QuickJoinOrCreateRoomRequest(exp, ["default"], settings, Station.sfs.lastJoinedRoom));
    }

    private onExtensionResponse(evtParams: SFS2X.SFSEvent) {
        if ("GetJettonRequest" == evtParams.cmd) {
            this.jettons = evtParams.params.getSFSArray("list");
            this.refreshEarnPayLabel();
        }
    }
    protected addStationListener() {
        super.addStationListener();
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);

    }

    protected removeStationListener() {
        super.removeStationListener();
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
    }

}