const { regClass, property } = Laya;
import { Station } from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";

export class Profile {
    
    public static getSyncParam() {
        let params = new SFS2X.SFSObject();

        let userId = Laya.LocalStorage.getItem("userid");
        if (userId != null) {
            params.putInt("id", Number.parseInt(userId));
        }

        let nickname = Laya.LocalStorage.getItem("nickname");
        if (nickname != null) {
            params.putUtfString("nickname", nickname);
        }

        let avatar = Laya.LocalStorage.getItem("avatar");
        if (avatar != null) {
            params.putInt("avatar", Number.parseInt(avatar));
        }

        let trim = Laya.LocalStorage.getItem("trim");
        if (trim != null) {
            params.putUtfString("trim", trim);
        }

        let pawns = Laya.LocalStorage.getItem("pawns");
        if (pawns != null) {
            params.putUtfString("pawns", pawns);
        }
        let checkinday = Laya.LocalStorage.getItem("checkinday");
        if (checkinday != null) {
            params.putInt("checkinday", Number.parseInt(checkinday));
        }

        let updatetime = Laya.LocalStorage.getItem("updatetime");
        if (updatetime == null) {
            updatetime = Profile.getCurrentUpdateTime();
        }
        params.putLong("updatetime", Number.parseInt(updatetime));
        return params;
    }

    public static setSyncParam(params:SFS2X.SFSObject) {
        let userId = params.get("id");
        if (userId != null) {
            Laya.LocalStorage.setItem("userid", userId);
        }
        let nickname = params.get("nickname");
        if (nickname != null) {
            Laya.LocalStorage.setItem("nickname", nickname);
        }
        let avatar = params.get("avatar");
        if (avatar != null) {
            Laya.LocalStorage.setItem("avatar", avatar);
        }
        let trim = params.get("trim");
        if (trim != null) {
            Laya.LocalStorage.setItem("trim", trim);
        } else {
            Laya.LocalStorage.setItem("trim", "0.png");
        }
        
        let pawns = params.get("pawns");
        if (pawns != null) {
            Laya.LocalStorage.setItem("pawns", pawns);
        } else {
            Laya.LocalStorage.setItem("pawns", "00");
        }
        let rank = params.get("rank");
        if (rank != null) {
            Laya.LocalStorage.setItem("rank", rank);
        }
        let checkinday = params.get("checkinday");
        if (checkinday != null) {
            Laya.LocalStorage.setItem("checkinday", checkinday);
        }
        let gold = params.get("gold");
        if (gold != null) {
            Laya.LocalStorage.setItem("gold", gold);
        }
        let updatetime = params.get("updatetime");
        if (updatetime != null) {
            Laya.LocalStorage.setItem("updatetime", updatetime);
        }
    }

    public static getCurrentUpdateTime() {
        return (Date.now() / 1000).toString();
    }

    public static setNickname(nickname:string) {
        Laya.LocalStorage.setItem("nickname",nickname);
        Laya.LocalStorage.setItem("updatetime",Profile.getCurrentUpdateTime());
        Station.sync();
        Station.updateBuddyInfo();
    }

    public static setAvatar(avatar:number) {
        Laya.LocalStorage.setItem("avatar",avatar.toString());
        Laya.LocalStorage.setItem("updatetime",Profile.getCurrentUpdateTime());
        Station.sync();
        Station.updateBuddyInfo();
    }

    public static setPawns(pawns:string) {
        Laya.LocalStorage.setItem("pawns",pawns);
        Laya.LocalStorage.setItem("updatetime",Profile.getCurrentUpdateTime());
        Station.sync();
        Station.updateBuddyInfo();
    }

    public static setTrim(trim:string) {
        Laya.LocalStorage.setItem("trim",trim);
        Laya.LocalStorage.setItem("updatetime",Profile.getCurrentUpdateTime());
        Station.sync();
        Station.updateBuddyInfo();
    }
    public static getUserId() {
        let userId = Laya.LocalStorage.getItem("userid");
        return userId == null?null:Number.parseInt(userId);
    }

    public static setUserId(userId:number) {
        Laya.LocalStorage.setItem("userid", userId.toString());
    }
    public static getNickname() {
        let nickname = Laya.LocalStorage.getItem("nickname");
        return nickname;
    }

    public static getAvatar() {
        let avatar = Laya.LocalStorage.getItem("avatar");
        return avatar == null?1:Number.parseInt(avatar);
    }

    public static getTrim() {
        let trim = Laya.LocalStorage.getItem("trim");
        return trim != null ? trim:"0.png";
    }

    public static getTrimImage(trim:string) {
        return "resources/images/trims/" + trim;
    }

    public static getPawns() {
        let pawns = Laya.LocalStorage.getItem("pawns");
        return pawns != null ? pawns:"00";
    }
    public static getGold() {
        let gold = Laya.LocalStorage.getItem("gold");
        return gold == null?0:Number.parseInt(gold);
    }

    public static getCheckinDay() {
        let checkinday = Laya.LocalStorage.getItem("checkinday");
        return checkinday == null?0:Number.parseInt(checkinday);
    }

    public static setCheckinDay(v:number) {
        Laya.LocalStorage.setItem("checkinday",v.toString());
    }
    public static setGold(gold:number) {
        Laya.LocalStorage.setItem("gold",gold.toString());
    }
    
    public static getRank() {
        let rank = Laya.LocalStorage.getItem("rank");
        return rank == null?0:Number.parseInt(rank);
    }

    public static setRank(v:number) {
        Laya.LocalStorage.setItem("rank",v.toString());
    }

    public static getLevel(rank:number) {
        return Math.floor(rank / 100).toString();
    }

    
    public static getMyLevel() {
        let rank = Profile.getRank();
        return  Profile.getLevel(rank);
    }
}