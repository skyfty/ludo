const { regClass, property } = Laya;
import * as SFS2X from "../node_modules/sfs2x-api";

@regClass()
export class UserInfo extends Laya.Script {

    @property(Laya.Label)
    public name: Laya.Label;

    
    @property(Laya.Label)
    public level: Laya.Label;

 
    @property(Laya.Clip)
    public avatar: Laya.Clip;


    @property(Laya.Label)
    public winsOfVsComputer: Laya.Label;

  
    @property(Laya.Label)
    public timerOfVsComputer: Laya.Label;


    @property(Laya.Label)
    public rateOfVsComputer: Laya.Label;


    
    @property(Laya.Label)
    public winsOfOnline: Laya.Label;

  
    @property(Laya.Label)
    public timerOfOnline: Laya.Label;


    @property(Laya.Label)
    public rateOfOnline: Laya.Label;

    
    
    @property(Laya.Label)
    public winsOfVsFriend: Laya.Label;

  
    @property(Laya.Label)
    public timerOfVsFriend: Laya.Label;


    @property(Laya.Label)
    public rateOfVsFriend: Laya.Label;

    constructor() {
        super();
    }

    onAwake(): void {
    }

    public setProfile(profile:SFS2X.SFSObject) {
        this.name.text = profile.getUtfString("nickname");
        this.avatar.index = profile.getInt("avatar");
        let rank = profile.getInt("rank");
        this.level.text = Math.floor(rank / 100).toString();

        this.winsOfVsComputer.text =  profile.getInt("vscomputer_wins");
        this.timerOfVsComputer.text =  profile.getInt("vscomputer_timer");
        this.rateOfVsComputer.text =  profile.getInt("vscomputer_rate");

        this.winsOfOnline.text =  profile.getInt("online_wins");
        this.timerOfOnline.text =  profile.getInt("online_timer");
        this.rateOfOnline.text =  profile.getInt("online_rate");
        
        this.winsOfVsFriend.text =  profile.getInt("vsfriend_wins");
        this.timerOfVsFriend.text =  profile.getInt("vsfriend_timer");
        this.rateOfVsFriend.text =  profile.getInt("vsfriend_rate");
    }

}