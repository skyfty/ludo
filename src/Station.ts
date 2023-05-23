const { regClass, property } = Laya;
import * as SFS2X from "../node_modules/sfs2x-api";

export class Event {
    static Login = "LOGIN";
    static Join = "ROOM_JOIN";
    static Exit = "ROOM_EXIT";
    static Error = "ROOM_ERROR"
}

export class Desk extends SFS2X.SFSRoom {
  
}

@regClass()
export class Station extends Laya.Script {

    public sfs: SFS2X.SmartFox = null;

    @property(String)
    public playerName: String ;
    public desks: Desk[] = [];
    public currentDesk:Desk = null;

    constructor() {
        super();

        let config = {};
        config.host = "127.0.0.1";
        config.port = 8080;
        config.zone = "BasicExamples";
        config.debug = true;
        config.useSSL = false;

        this.sfs = new SFS2X.SmartFox(config);
        this.sfs.logger.level = SFS2X.LogLevel.DEBUG;
        this.sfs.logger.enableConsoleOutput = true;
        this.sfs.logger.enableEventDispatching = true;

        this.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, this.onConnection, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this.onConnectionLost, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, this.onLoginError, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.LOGIN, this.onLogin, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onRoomJoinError, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.USER_COUNT_CHANGE, this.onUserCountChange, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.USER_ENTER_ROOM, this.onUserEnterRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.onUserExitRoom, this);
    }
    
    join(desk:Desk) {
        this.currentDesk = desk;
        this.sfs.send(new SFS2X.JoinRoomRequest(desk));
    }

    onStart(): void {
        this.playerName ="sdfsdf" + Math.random();
        this.sfs.connect();
    }

    private onConnection(event: SFS2X.SFSEvent) {
        if (event.success) {
            var isSent = this.sfs.send(new SFS2X.LoginRequest(this.playerName));
            if (!isSent) {
                this.owner.event(Event.Error);
            }
        }
        else {
            this.owner.event(Event.Error);
        }
    }

    private onConnectionLost() {
        this.owner.event(Event.Exit);
    }

    private onLogin() {
        this.desks = this.sfs.roomManager.getRoomList();
        this.owner.event(Event.Login);
    }

    private onLoginError(event: SFS2X.SFSEvent) {
        this.owner.event(Event.Exit);
    }

    private onRoomJoinError(event: SFS2X.SFSEvent) {
        this.owner.event(Event.Exit);
    }

    private onRoomJoin(event: SFS2X.SFSEvent) {
        let users = this.sfs.lastJoinedRoom.getUserList();
        console.log(users);

        if (this.sfs.lastJoinedRoom != null) {
            this.owner.event(Event.Join);
        }
    }

    private onUserCountChange(event: SFS2X.SFSEvent) {
        console.log(event);
    }

    private onUserEnterRoom(event: SFS2X.SFSEvent) {
        console.log(event);
    }

    private onUserExitRoom(event: SFS2X.SFSEvent) {
        console.log(event);
        this.owner.event(Event.Exit);
    }

}