const { regClass, property } = Laya;
import { Station } from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";
import { TrimLevelItem } from "./TrimLevelItem";
import { TrimConfig } from "./TrimConfig";
import { Profile } from "./Profile";

@regClass()
export class TrimLevelList extends Laya.Script {

    @property(Laya.List)
    public list: Laya.List;

    constructor() {
        super();
    }

    onAwake(): void {
        this.list.renderHandler = new Laya.Handler(this, this.updateItem);
        this.owner.on(Laya.Event.SELECT, this, this.onSelected);
    }

    onStart(): void {
        this.addStationListener();
        this.list.array = TrimConfig.Level;
    }

    onDestroy(): void {
        this.removeStationListener();
    }

    public addStationListener() {

    }
    public removeStationListener() {

    }

    public onSelected(index: number){
        let data = this.list.array[index];
        Profile.setTrim(data.image);
        this.list.refresh();
    }

    private updateItem(cell: any, index: number): void {
        let data = this.list.array[index];
        let item = cell.getComponent(TrimLevelItem) as TrimLevelItem;
        Laya.loader.load("resources/images/trims/" +data.image, Laya.Loader.IMAGE).then((res: Laya.Texture) => {
            item.image.texture = res;
        });
        item.index = index;
        item.button.selected = (data.image == Profile.getTrim());
        item.setState(Profile.getMyLevel() < data.level);
    }
}