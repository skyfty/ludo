const { regClass, property } = Laya;
import {Station} from "./Station";
import {CreateRoom} from "./CreateRoom";
import {JoinRoom} from "./JoinRoom";

@regClass()
export class Chamber extends Laya.Script {

    @property(Laya.ViewStack)
    public viewStack: Laya.ViewStack;

    @property(Laya.Tab)
    public tab: Laya.Tab;

    @property(CreateRoom)
    public createRoom: CreateRoom;
    
    @property(JoinRoom)
    public joinRoom: JoinRoom;

    constructor() {
        super();
    }

    onAwake(): void {
        this.tab.selectHandler = new Laya.Handler(this,this.onTabSelected);
    }

    private onTabSelected(index:number) {
        this.viewStack.selectedIndex=index;
        if (index == 0) {
            this.createRoom.addStationListener();
            this.joinRoom.removeStationListener();
        } else {
            this.joinRoom.addStationListener();
            this.createRoom.removeStationListener();
        }
    }
}