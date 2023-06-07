const { regClass, property } = Laya;
import * as SFS2X from "../node_modules/sfs2x-api";
import { Profile } from "./Profile";
import { Rank } from "./Rank";

export class Event {
    static Login = "LOGIN";
    static Join = "ROOM_JOIN";
    static Disconnect = "DISCONNECT";
    static Exit = "ROOM_EXIT";
    static Error = "ROOM_ERROR";
    static LoginError = "LOGIN_ERROR";
}

@regClass()
export class Station extends Laya.Script {

    public static config: any = [];
    public static sfs: SFS2X.SmartFox = null;

    @property(String)
    public host: String;

    @property(Number)
    public port: Number;

    @property(String)
    public zone: String;

    @property(Boolean)
    public debug: Boolean = true;

    constructor() {
        super();
    }

    onAwake(): void {
        Station.config.host = this.host;
        Station.config.port = this.port;
        Station.config.zone = this.zone;
        Station.config.debug = this.debug;
        Station.config.useSSL = false;
        this.initSmartFox();
    }

    private initSmartFox() {
        if (Station.sfs == null) {
            Station.sfs = new SFS2X.SmartFox(Station.config);
            Station.sfs.logger.level = SFS2X.LogLevel.DEBUG;
            Station.sfs.logger.enableConsoleOutput = true;
            Station.sfs.logger.enableEventDispatching = true;
        }
    }


    onStart(): void {
        this.addSmartFoxListener();

        if (Station.sfs.isConnected) {
            if (Station.sfs.mySelf == null) {
                Station.sfs.send(new SFS2X.LoginRequest());
            } else {
                Station.sync();
            }
        } else {
            Station.sfs.connect();
        }
    }

    addSmartFoxListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, Station.onConnection, Station.sfs);
        Station.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, Station.onConnectionLost, Station.sfs);
        Station.sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, Station.onLoginError, Station.sfs);
        Station.sfs.addEventListener(SFS2X.SFSEvent.LOGIN, Station.onLogin, Station.sfs);
        Station.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);

    }

    onDestroy(): void {
        Station.sfs.removeEventListener(SFS2X.SFSEvent.CONNECTION, Station.onConnection, Station.sfs);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.CONNECTION_LOST, Station.onConnectionLost, Station.sfs);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.LOGIN_ERROR, Station.onLoginError, Station.sfs);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.LOGIN, Station.onLogin, Station.sfs);
        Station.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
    }

    private static onConnection(event: SFS2X.SFSEvent) {
        if (event.success) {
            Station.sfs.send(new SFS2X.LoginRequest());
        }
    }

    private static onConnectionLost() {
        Laya.timer.once(5000, this, () => {
            Station.sfs.connect();
        });
    }

    private onExtensionResponse(evtParams: SFS2X.SFSEvent) {
        if ("SyncProfile" == evtParams.cmd) {
            Profile.setSyncParam(evtParams.params);
        }
    }

    public static sync() {
        let params = Profile.getSyncParam();
        Station.sfs.send(new SFS2X.ExtensionRequest("SyncProfile", params));
    }

    private static onLogin(event: SFS2X.SFSEvent) {
        Station.sync();
    }

    private static onLoginError(event: SFS2X.SFSEvent) {
        Laya.timer.once(5000, this, () => {
            Station.sfs.send(new SFS2X.LoginRequest());
        });
    }

    public static getUserColor(user: SFS2X.SFSUser, roomVars: SFS2X.SFSRoomVariable[] = null) {
        if (roomVars == null) {
            roomVars = Station.sfs.lastJoinedRoom.getVariables();
        }
        for (let rvidx in roomVars) {
            let rv = roomVars[rvidx];
            if (rv.isNull) {
                continue;
            }
            if (rv.value != -1 && rv.value == user.id) {
                return rv.name;
            }
        }
        return null;
    }

    public static getOnlineUser(userId: number, users: SFS2X.SFSUser[]) {
        for (let i in users) {
            if (users[i].id == userId) {
                return users[i];
            }
        }
        return null;
    }

    public static joinRoom(room: SFS2X.SFSRoom = null) {
        if (room == null) {
            let rooms = Station.sfs.roomManager.getRoomList();
            room = rooms[0];
        }
        Station.sfs.send(new SFS2X.JoinRoomRequest(room));
    }

    public static levelRoom() {
        Station.sfs.send(new SFS2X.LeaveRoomRequest(Station.sfs.lastJoinedRoom));
    }

    public static setRoomVariables(roomVars: SFS2X.SFSRoomVariable[]) {
        Station.sfs.send(new SFS2X.SetRoomVariablesRequest(roomVars));

    }

    public static getUserStateName(color: string, id: number) {
        return color + id;
    }

    public static getUserJettonName() {
        return "jetton" + Station.mySelfId();
    }

    public static getUserList() {
        return Station.sfs.lastJoinedRoom.getUserList();
    }

    public static mySelfId() {
        return Station.sfs.mySelf.id;
    }

    public static isUnconnected() {
        return !Station.sfs.isConnected || Station.sfs.mySelf == null;
    }
}