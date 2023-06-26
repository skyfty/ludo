const { regClass, property } = Laya;
import { PropsItem } from "./PropsItem";
import * as Player from "./Player";

@regClass()
export class PropsList extends  Laya.Script{
    @property(Laya.List)
    public list: Laya.List;

    constructor() {
        super();
    }

    onAwake(): void {
        this.list.renderHandler = new Laya.Handler(this, this.updateItem);
        this.list.selectHandler = new Laya.Handler(this, (index: number)=>{
            this.owner.event(Player.Event.UseProps, [index]);
        });
    }

    onStart(): void {
        let data = [];
        for (var m: number = 0; m < 32; m++) {
            data.push(m);
        }
        this.list.array = data;
    }
    private updateItem(cell: any, index: number): void {
        let item = cell.getComponent(PropsItem) as PropsItem;
        item.image.index = this.list.array[index];
    }

}