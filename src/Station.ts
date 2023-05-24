const { regClass, property } = Laya;
import * as SFS2X from "../node_modules/sfs2x-api";

export class Event {
    static Login = "LOGIN";
    static Join = "ROOM_JOIN";
    static Disconnect = "DISCONNECT";
    static Exit = "ROOM_EXIT";
    static Error = "ROOM_ERROR";
    static LoginError = "LOGIN_ERROR";
}

export class Desk extends SFS2X.SFSRoom {
  
}

@regClass()
export class Station extends Laya.Script {

    public sfs: SFS2X.SmartFox = null;

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
        let config:any = {};
        config.host = this.host;
        config.port = this.port;
        config.zone = this.zone;
        config.debug = this.debug;
        config.useSSL = false;

        this.sfs = new SFS2X.SmartFox(config);
        this.sfs.logger.level = SFS2X.LogLevel.DEBUG;
        this.sfs.logger.enableConsoleOutput = true;
        this.sfs.logger.enableEventDispatching = true;

        this.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, this.onConnection, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this.onConnectionLost, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, this.onLoginError, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.LOGIN, this.onLogin, this);
    }
    
    onStart(): void {
        this.playerName +=  Math.random().toString();
        this.sfs.connect();
    }

    onDestroy(): void {
        this.sfs.send(new SFS2X.LogoutRequest());
        this.sfs.removeEventListener(SFS2X.SFSEvent.CONNECTION, this.onConnection);
        this.sfs.removeEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this.onConnectionLost);
        this.sfs.removeEventListener(SFS2X.SFSEvent.LOGIN_ERROR, this.onLoginError);
        this.sfs.removeEventListener(SFS2X.SFSEvent.LOGIN, this.onLogin);
    }
    private onConnection(event: SFS2X.SFSEvent) {
        if (event.success) {
            this.sfs.send(new SFS2X.LoginRequest(this.playerName));
        }
        else {
            this.owner.event(Event.LoginError);
        }
    }

    private onConnectionLost() {
        Laya.timer.once(5000, this, ()=>{
            this.sfs.connect();
        });
        this.owner.event(Event.LoginError);
    }

    private onLogin() {
        this.owner.event(Event.Login);
    }

    private onLoginError(event: SFS2X.SFSEvent) {
        Laya.timer.once(1000 * 60, this, ()=>{
            this.sfs.send(new SFS2X.LoginRequest(this.playerName));
        });
        this.owner.event(Event.LoginError);
    }

    public getUserColor(user:SFS2X.SFSUser, roomVars:SFS2X.SFSRoomVariable[] = null) {
        if (roomVars == null) {
            roomVars = this.sfs.lastJoinedRoom.getVariables();
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


    public getUserStateName(color:string, id:number) {
        return color + id;
    }

    public getOnlineUser(userId: number, users: SFS2X.SFSUser[]) {
        for (let i in users) {
            if (users[i].id == userId) {
                return users[i];
            }
        }
        return null;
    }

    public joinRoom(room:SFS2X.SFSRoom = null) {
        if (room == null) {
            let rooms = this.sfs.roomManager.getRoomList();
            room = rooms[0];
        }
        this.sfs.send(new SFS2X.JoinRoomRequest(room));
    }

    public levelRoom() {
        this.sfs.send(new SFS2X.LeaveRoomRequest(this.sfs.lastJoinedRoom));
    }

    public setRoomVariables(roomVars:SFS2X.SFSRoomVariable[]) {
        this.sfs.send(new SFS2X.SetRoomVariablesRequest(roomVars));

    }

    public getUserList() {
        return this.sfs.lastJoinedRoom.getUserList();
    }

    public mySelfId() {
        return this.sfs.mySelf.id;

    }

}