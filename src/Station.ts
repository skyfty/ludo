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
    public playerName: String = "sdfsdf";
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
        this.sfs.addEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, this.onPublicMessage, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_VARIABLES_UPDATE, this.onRoomVariablesUpdate, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.USER_VARIABLES_UPDATE, this.onUserVariablesUpdate, this);
    }

    
    join(desk:Desk) {
        this.currentDesk = desk;
        this.sfs.send(new SFS2X.JoinRoomRequest(desk));
    }

    onStart(): void {
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
        if (this.sfs.lastJoinedRoom != null) {
            let users = this.sfs.lastJoinedRoom.getUserList();
            this.owner.event(Event.Join,[this.currentDesk, [users]]);
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

    private onPublicMessage(event: SFS2X.SFSEvent) {
        console.log(event);
        var userVar = new SFS2X.SFSUserVariable("nick", 23);

        var isSent = this.sfs.send(new SFS2X.SetUserVariablesRequest([userVar]));
        // var sender = (event.sender.isItMe ? "You" : event.sender.name);
        // var nick = event.sender.getVariable("nick");
        // var aka = (!event.sender.isItMe && nick != null ? " (aka '" + nick.value + "')" : "");
        // writeToChatArea("<b>" + sender + aka + " said:</b><br/>" + event.message);
    }

    private onRoomVariablesUpdate(event: SFS2X.SFSEvent) {
        console.log(event);

        // Check if the 'topic' variable was set/updated
        // if (event.changedVars.indexOf("topic") > -1)
        // {
        // 	var deleted = !event.room.containsVariable("topic");
        // 	showRoomTopic(event.room, deleted);
        // }
    }

    private onUserVariablesUpdate(event: SFS2X.SFSEvent) {
        console.log(event);

        // Check if the 'nick' variable was set/updated
        // if (event.changedVars.indexOf("nick") > -1)
        // {
        // 	// For code simplicity we rebuild the full userlist instead of just editing the specific item
        // 	populateUsersList();
        // }
    }
}