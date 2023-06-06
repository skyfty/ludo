const { regClass, property } = Laya;

import { Parallel } from "./Parallel";
import { Config } from "./Config";
import { Station } from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";
import { Dialog } from "./Dialog";
@regClass()
export class JoinRoom extends Laya.Script {

    @property(Laya.Dialog)
    public dialog: Laya.Dialog;

    @property(Laya.TextInput)
    public roomInput: Laya.TextInput;

    @property(Laya.Button)
    public closeBtn: Laya.Button;
    @property(Laya.Button)
    public play: Laya.Button;

    constructor() {
        super();
    }

    onAwake(): void {
        this.play.on(Laya.Event.CLICK, this, () => {
            let roomId = this.roomInput.text;
            var exp = new SFS2X.MatchExpression("RoomCode", SFS2X.StringMatch.EQUALS, roomId);
            Station.sfs.send(new SFS2X.FindRoomsRequest(exp, null, 1));
        });
        this.closeBtn.on(Laya.Event.CLICK, this, () => {
            this.owner.event(Laya.Event.CLOSE);
        });
    }

    joinRoomError() {
        Laya.Scene.open("dialog/roomjoinerror.lh", false, null, Laya.Handler.create(this, (dlg: Laya.Dialog) => {
            dlg.getChildByName("view").getChildByName("return").on(Laya.Event.CLICK, dlg, dlg.close);
        }));
    }

    onDestroy(): void {
        this.removeStationListener();
    }

    public addStationListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_FIND_RESULT, this.onRoomFindResult, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.joinRoomError, this);
        Station.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);

    }
    public removeStationListener() {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_FIND_RESULT, this.onRoomFindResult, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.joinRoomError, this);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
    }

    onRoomFindResult(event: SFS2X.SFSEvent) {
        if (event.rooms != null && event.rooms.length == 1) {
            Station.joinRoom(event.rooms[0])
        } else {
            this.joinRoomError();
        }
    }

    private onRoomJoin(event: SFS2X.SFSEvent) {
        var params = new SFS2X.SFSObject();
        params.putUtfString("scope", "joinroom");
        Station.sfs.send(new SFS2X.ExtensionRequest("GetJettonRequest", params));
        this.dialog.close();
    }

    private onExtensionResponse(evtParams: SFS2X.SFSEvent) {
        if ("GetJettonRequest" == evtParams.cmd) {
            let jettons = evtParams.params.getSFSArray("list");
            let item = jettons.getSFSObject(0);
            let varname = Station.getUserJettonName();
            Station.sfs.send(new SFS2X.SetRoomVariablesRequest([new SFS2X.SFSRoomVariable(varname, item)]));

            Laya.Scene.open("dialog/selectcolor.lh", false, null, Laya.Handler.create(this, (dlg: Laya.Dialog) => {
                dlg.on(Laya.Event.PLAYED, this, (color: string) => {
                    Dialog.closeAll();
                    Laya.Scene.open("militant.ls", true, { "color": color });
                });
                dlg.on(Laya.Event.CLOSE, this, () => {
                    Station.levelRoom();
                    Dialog.closeAll();
                });
            }));
        }
    }
}