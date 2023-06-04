const { regClass, property } = Laya;
import * as SFS2X from "../node_modules/sfs2x-api";

@regClass()
export class StatisticsInfo extends Laya.Script {
    //declare owner : Laya.Sprite3D;

 
    @property(Laya.Label)
    public name: Laya.Label;

    
    @property(Laya.Label)
    public level: Laya.Label;

    @property(Laya.ProgressBar)
    public levelProcess: Laya.ProgressBar;
 
    @property(Laya.Clip)
    public avatar: Laya.Clip;

    
 

    @property(Laya.Label)
    public winsOfVsComputer: Laya.Label;

  
    @property(Laya.Label)
    public lostOfVsComputer: Laya.Label;


    @property(Laya.Label)
    public rateOfVsComputer: Laya.Label;


    
    @property(Laya.Label)
    public winsOfOnline: Laya.Label;

  
    @property(Laya.Label)
    public lostOfOnline: Laya.Label;


    @property(Laya.Label)
    public rateOfOnline: Laya.Label;

    
    
    @property(Laya.Label)
    public winsOfVsFriend: Laya.Label;

  
    @property(Laya.Label)
    public lostOfVsFriend: Laya.Label;


    @property(Laya.Label)
    public rateOfVsFriend: Laya.Label;

    constructor() {
        super();
    }

    public setProfile(profile:SFS2X.SFSObject) {
        this.name.text = profile.getUtfString("nickname");
        this.avatar.index = profile.getInt("avatar");
        let rank = profile.getInt("rank");
        this.level.text = Math.floor(rank / 100).toString();
        let processValue = rank % 100;
        this.levelProcess.value = processValue / 100;
    }

}