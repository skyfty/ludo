const { regClass, property } = Laya;
import * as SFS2X from "../node_modules/sfs2x-api";
import { Profile } from "./Profile";

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

    public static config:any = [];
    public static sfs: SFS2X.SmartFox = null;
    public static loginName:String;

    @property(String)
    public playerName: String;

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

        this.initSmartFox(this.playerName);
    }

    private initSmartFox(playerName:String) {
        if (Station.sfs == null) {
            Station.sfs = new SFS2X.SmartFox(Station.config);
            Station.sfs.logger.level = SFS2X.LogLevel.DEBUG;
            Station.sfs.logger.enableConsoleOutput = true;
            Station.sfs.logger.enableEventDispatching = true;
        }
        Station.loginName = playerName +  Math.random().toString();
    }
    
    onStart(): void {
        this.addSmartFoxListener();

        if (!Station.sfs.isConnected) {
            Station.sfs.connect();
        }
    }

    addSmartFoxListener() {
        Station.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, Station.onConnection, Station.sfs);
        Station.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, Station.onConnectionLost, Station.sfs);
        Station.sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, Station.onLoginError, Station.sfs);
        Station.sfs.addEventListener(SFS2X.SFSEvent.LOGIN, Station.onLogin, Station.sfs);
        Station.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse,  this);
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
        Laya.timer.once(5000, this, ()=>{
            Station.sfs.connect();
        });
    }

    private onExtensionResponse(evtParams: SFS2X.SFSEvent) {
        if (evtParams.cmd == "SyncProfile") {
            Profile.setSyncParam(evtParams.params);
            Station.updatePlayerInfo();
        }
    }

    public static sync() {
        let params = Profile.getSyncParam();
        Station.sfs.send(new SFS2X.ExtensionRequest( "SyncProfile", params));
    }
    private static onLogin(event: SFS2X.SFSEvent) {
        Station.sync();
        Station.updatePlayerInfo();
    }

    public static updatePlayerInfo() {
        let userVars:SFS2X.SFSUserVariable[] = [];
        userVars.push(new SFS2X.SFSUserVariable("avatar", Profile.getAvatar()));
        userVars.push(new SFS2X.SFSUserVariable("nickname", Profile.getNickname()));
        Station.sfs.send(new SFS2X.SetUserVariablesRequest(userVars));
    }

    private static onLoginError(event: SFS2X.SFSEvent) {
        Laya.timer.once(1000 * 60, this, ()=>{
            Station.sfs.send(new SFS2X.LoginRequest());
        });
    }

    public static getUserColor(user:SFS2X.SFSUser, roomVars:SFS2X.SFSRoomVariable[] = null) {
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

    public static joinRoom(room:SFS2X.SFSRoom = null) {
        if (room == null) {
            let rooms = Station.sfs.roomManager.getRoomList();
            room = rooms[0];
        }
        Station.sfs.send(new SFS2X.JoinRoomRequest(room));
    }

    public static levelRoom() {
        Station.sfs.send(new SFS2X.LeaveRoomRequest(Station.sfs.lastJoinedRoom));
    }

    public static setRoomVariables(roomVars:SFS2X.SFSRoomVariable[]) {
        Station.sfs.send(new SFS2X.SetRoomVariablesRequest(roomVars));

    }

    public static getUserStateName(color:string, id:number) {
        return color + id;
    }
    public static getUserList() {
        return Station.sfs.lastJoinedRoom.getUserList();
    }

    public static mySelfId() {
        return Station.sfs.mySelf.id;
    }

}