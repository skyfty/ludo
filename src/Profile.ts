const { regClass, property } = Laya;
import { Station } from "./Station";
import * as SFS2X from "../node_modules/sfs2x-api";

export class Profile {
    

    public static getSyncParam() {
        let params = new SFS2X.SFSObject();
        let userId = Laya.LocalStorage.getItem("userId");
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
            Laya.LocalStorage.setItem("userId", userId);
        }

        let nickname = params.get("nickname");
        if (nickname != null) {
            Laya.LocalStorage.setItem("nickname", nickname);
        }
        let avatar = params.get("avatar");
        if (avatar != null) {
            Laya.LocalStorage.setItem("avatar", avatar);
        }
        let rank = params.get("rank");
        if (rank != null) {
            Laya.LocalStorage.setItem("rank", rank);
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

    private static getCurrentUpdateTime() {
        return (Date.now() / 1000).toString();
    }

    public static setNickname(nickname:string) {
        Laya.LocalStorage.setItem("nickname",nickname);
        Laya.LocalStorage.setItem("updatetime",Profile.getCurrentUpdateTime());
        Station.sync();
    }

    public static setAvatar(avatar:number) {
        Laya.LocalStorage.setItem("avatar",avatar.toString());
        Laya.LocalStorage.setItem("updatetime",Profile.getCurrentUpdateTime());
        Station.sync();
    }

    public static getNickname() {
        let nickname = Laya.LocalStorage.getItem("nickname");
        return nickname;
    }

    public static getAvatar() {
        let avatar = Laya.LocalStorage.getItem("avatar");
        return avatar == null?1:Number.parseInt(avatar);
    }

    
    public static getGold() {
        let gold = Laya.LocalStorage.getItem("gold");
        return gold == null?0:Number.parseInt(gold);
    }
    
    public static getRank() {
        let rank = Laya.LocalStorage.getItem("rank");
        return rank == null?0:Number.parseInt(rank);
    }
}