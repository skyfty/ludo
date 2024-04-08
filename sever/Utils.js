var colorOfPlayer = ["red", "green", "yellow", "blue"];
var routeBaseOfPlayer = [0, 13, 26, 39];

var NUMBER_UNIVERSAL_HOLD = 50;
var NUMBER_PERSONAL_HOLD = 6;
var NUMBER_HOME_HOLD = NUMBER_PERSONAL_HOLD -1;
var NUMBER_ROUTE = 51;
var MagicMap = [{"makeup":{"6":{"name":"plus","clip":1},"11":{"name":"plus","clip":1},"14":{"name":"rocket","clip":2},"15":{"name":"rocket","clip":2},"22":{"name":"rocket","clip":2},"23":{"name":"rocket","clip":2},"40":{"name":"defender","clip":0},"46":{"name":"defender","clip":0},"48":{"name":"defender","clip":0}}},{"makeup":{"14":{"name":"defender","clip":0},"15":{"name":"defender","clip":0},"18":{"name":"defender","clip":0},"25":{"name":"plus","clip":1},"28":{"name":"rocket","clip":2},"33":{"name":"rocket","clip":2},"35":{"name":"plus","clip":1},"41":{"name":"rocket","clip":2},"50":{"name":"plus","clip":1}}},{"makeup":{"3":{"name":"plus","clip":1},"11":{"name":"defender","clip":0},"22":{"name":"rocket","clip":2},"28":{"name":"rocket","clip":2},"31":{"name":"rocket","clip":2},"33":{"name":"defender","clip":0},"37":{"name":"plus","clip":1},"41":{"name":"defender","clip":0},"51":{"name":"plus","clip":1}}},{"makeup":{"5":{"name":"rocket","clip":2},"12":{"name":"rocket","clip":2},"16":{"name":"defender","clip":0},"23":{"name":"plus","clip":1},"33":{"name":"plus","clip":1},"41":{"name":"rocket","clip":2},"46":{"name":"defender","clip":0},"50":{"name":"plus","clip":1},"51":{"name":"defender","clip":0}}},{"makeup":{"2":{"name":"plus","clip":1},"12":{"name":"rocket","clip":2},"27":{"name":"defender","clip":0},"31":{"name":"defender","clip":0},"37":{"name":"rocket","clip":2},"38":{"name":"plus","clip":1},"41":{"name":"rocket","clip":2},"42":{"name":"defender","clip":0},"48":{"name":"plus","clip":1}}},{"makeup":{"12":{"name":"defender","clip":0},"15":{"name":"rocket","clip":2},"19":{"name":"plus","clip":1},"25":{"name":"defender","clip":0},"27":{"name":"rocket","clip":2},"37":{"name":"plus","clip":1},"40":{"name":"rocket","clip":2},"42":{"name":"defender","clip":0},"43":{"name":"plus","clip":1}}},{"makeup":{"5":{"name":"plus","clip":1},"7":{"name":"rocket","clip":2},"11":{"name":"defender","clip":0},"15":{"name":"rocket","clip":2},"17":{"name":"plus","clip":1},"18":{"name":"defender","clip":0},"24":{"name":"defender","clip":0},"31":{"name":"plus","clip":1},"48":{"name":"rocket","clip":2}}},{"makeup":{"5":{"name":"rocket","clip":2},"11":{"name":"plus","clip":1},"20":{"name":"rocket","clip":2},"22":{"name":"plus","clip":1},"25":{"name":"defender","clip":0},"28":{"name":"rocket","clip":2},"35":{"name":"plus","clip":1},"45":{"name":"defender","clip":0},"49":{"name":"defender","clip":0}}},{"makeup":{"1":{"name":"plus","clip":1},"2":{"name":"rocket","clip":2},"7":{"name":"defender","clip":0},"11":{"name":"rocket","clip":2},"18":{"name":"defender","clip":0},"20":{"name":"plus","clip":1},"29":{"name":"plus","clip":1},"38":{"name":"rocket","clip":2},"40":{"name":"defender","clip":0}}},{"makeup":{"1":{"name":"defender","clip":0},"6":{"name":"plus","clip":1},"14":{"name":"rocket","clip":2},"18":{"name":"defender","clip":0},"19":{"name":"rocket","clip":2},"22":{"name":"rocket","clip":2},"35":{"name":"plus","clip":1},"41":{"name":"plus","clip":1},"44":{"name":"defender","clip":0}}},{"makeup":{"2":{"name":"defender","clip":0},"5":{"name":"plus","clip":1},"7":{"name":"defender","clip":0},"14":{"name":"rocket","clip":2},"18":{"name":"rocket","clip":2},"22":{"name":"rocket","clip":2},"25":{"name":"plus","clip":1},"42":{"name":"defender","clip":0},"50":{"name":"plus","clip":1}}},{"makeup":{"2":{"name":"plus","clip":1},"4":{"name":"defender","clip":0},"6":{"name":"rocket","clip":2},"18":{"name":"plus","clip":1},"24":{"name":"rocket","clip":2},"31":{"name":"defender","clip":0},"33":{"name":"plus","clip":1},"36":{"name":"defender","clip":0},"44":{"name":"rocket","clip":2}}},{"makeup":{"6":{"name":"plus","clip":1},"14":{"name":"plus","clip":1},"17":{"name":"defender","clip":0},"25":{"name":"rocket","clip":2},"27":{"name":"rocket","clip":2},"35":{"name":"defender","clip":0},"40":{"name":"plus","clip":1},"50":{"name":"rocket","clip":2},"51":{"name":"defender","clip":0}}},{"makeup":{"5":{"name":"defender","clip":0},"6":{"name":"rocket","clip":2},"10":{"name":"plus","clip":1},"27":{"name":"plus","clip":1},"28":{"name":"defender","clip":0},"29":{"name":"rocket","clip":2},"30":{"name":"rocket","clip":2},"37":{"name":"plus","clip":1},"41":{"name":"defender","clip":0}}},{"makeup":{"6":{"name":"rocket","clip":2},"16":{"name":"defender","clip":0},"22":{"name":"plus","clip":1},"24":{"name":"defender","clip":0},"31":{"name":"plus","clip":1},"32":{"name":"rocket","clip":2},"37":{"name":"rocket","clip":2},"41":{"name":"defender","clip":0},"46":{"name":"plus","clip":1}}},{"makeup":{"2":{"name":"plus","clip":1},"4":{"name":"plus","clip":1},"9":{"name":"rocket","clip":2},"23":{"name":"defender","clip":0},"25":{"name":"defender","clip":0},"32":{"name":"plus","clip":1},"36":{"name":"rocket","clip":2},"37":{"name":"defender","clip":0},"42":{"name":"rocket","clip":2}}},{"makeup":{"1":{"name":"rocket","clip":2},"12":{"name":"defender","clip":0},"20":{"name":"plus","clip":1},"28":{"name":"defender","clip":0},"35":{"name":"rocket","clip":2},"41":{"name":"rocket","clip":2},"43":{"name":"defender","clip":0},"48":{"name":"plus","clip":1},"49":{"name":"plus","clip":1}}},{"makeup":{"17":{"name":"defender","clip":0},"19":{"name":"plus","clip":1},"27":{"name":"plus","clip":1},"28":{"name":"rocket","clip":2},"30":{"name":"rocket","clip":2},"41":{"name":"defender","clip":0},"44":{"name":"plus","clip":1},"49":{"name":"rocket","clip":2},"50":{"name":"defender","clip":0}}},{"makeup":{"4":{"name":"defender","clip":0},"12":{"name":"plus","clip":1},"17":{"name":"plus","clip":1},"19":{"name":"rocket","clip":2},"28":{"name":"defender","clip":0},"37":{"name":"rocket","clip":2},"41":{"name":"plus","clip":1},"48":{"name":"rocket","clip":2},"51":{"name":"defender","clip":0}}},{"makeup":{"1":{"name":"rocket","clip":2},"2":{"name":"rocket","clip":2},"3":{"name":"plus","clip":1},"23":{"name":"defender","clip":0},"27":{"name":"plus","clip":1},"37":{"name":"defender","clip":0},"41":{"name":"plus","clip":1},"45":{"name":"defender","clip":0},"46":{"name":"rocket","clip":2}}},{"makeup":{"2":{"name":"rocket","clip":2},"3":{"name":"plus","clip":1},"10":{"name":"defender","clip":0},"15":{"name":"plus","clip":1},"17":{"name":"defender","clip":0},"18":{"name":"rocket","clip":2},"29":{"name":"defender","clip":0},"31":{"name":"rocket","clip":2},"38":{"name":"plus","clip":1}}},{"makeup":{"5":{"name":"plus","clip":1},"6":{"name":"rocket","clip":2},"14":{"name":"plus","clip":1},"16":{"name":"defender","clip":0},"22":{"name":"plus","clip":1},"28":{"name":"rocket","clip":2},"29":{"name":"defender","clip":0},"46":{"name":"defender","clip":0},"48":{"name":"rocket","clip":2}}},{"makeup":{"6":{"name":"rocket","clip":2},"14":{"name":"defender","clip":0},"15":{"name":"rocket","clip":2},"27":{"name":"plus","clip":1},"28":{"name":"plus","clip":1},"30":{"name":"rocket","clip":2},"40":{"name":"defender","clip":0},"42":{"name":"plus","clip":1},"49":{"name":"defender","clip":0}}},{"makeup":{"5":{"name":"rocket","clip":2},"7":{"name":"rocket","clip":2},"9":{"name":"plus","clip":1},"30":{"name":"plus","clip":1},"31":{"name":"defender","clip":0},"35":{"name":"plus","clip":1},"36":{"name":"defender","clip":0},"40":{"name":"defender","clip":0},"50":{"name":"rocket","clip":2}}},{"makeup":{"7":{"name":"plus","clip":1},"15":{"name":"defender","clip":0},"20":{"name":"plus","clip":1},"24":{"name":"plus","clip":1},"29":{"name":"rocket","clip":2},"41":{"name":"defender","clip":0},"42":{"name":"defender","clip":0},"46":{"name":"rocket","clip":2},"48":{"name":"rocket","clip":2}}},{"makeup":{"5":{"name":"rocket","clip":2},"10":{"name":"rocket","clip":2},"23":{"name":"defender","clip":0},"27":{"name":"defender","clip":0},"28":{"name":"defender","clip":0},"31":{"name":"plus","clip":1},"32":{"name":"plus","clip":1},"37":{"name":"rocket","clip":2},"40":{"name":"plus","clip":1}}},{"makeup":{"1":{"name":"plus","clip":1},"5":{"name":"rocket","clip":2},"17":{"name":"defender","clip":0},"20":{"name":"rocket","clip":2},"27":{"name":"plus","clip":1},"30":{"name":"defender","clip":0},"35":{"name":"plus","clip":1},"46":{"name":"rocket","clip":2},"51":{"name":"defender","clip":0}}},{"makeup":{"3":{"name":"rocket","clip":2},"4":{"name":"plus","clip":1},"16":{"name":"plus","clip":1},"20":{"name":"rocket","clip":2},"25":{"name":"defender","clip":0},"29":{"name":"defender","clip":0},"46":{"name":"plus","clip":1},"48":{"name":"defender","clip":0},"51":{"name":"rocket","clip":2}}},{"makeup":{"3":{"name":"defender","clip":0},"10":{"name":"rocket","clip":2},"19":{"name":"rocket","clip":2},"22":{"name":"plus","clip":1},"29":{"name":"rocket","clip":2},"30":{"name":"defender","clip":0},"32":{"name":"defender","clip":0},"40":{"name":"plus","clip":1},"42":{"name":"plus","clip":1}}},{"makeup":{"17":{"name":"plus","clip":1},"27":{"name":"defender","clip":0},"31":{"name":"rocket","clip":2},"35":{"name":"rocket","clip":2},"38":{"name":"defender","clip":0},"40":{"name":"defender","clip":0},"45":{"name":"plus","clip":1},"49":{"name":"rocket","clip":2},"51":{"name":"plus","clip":1}}}];  
var MagicPersevere = [0, 8, 13, 21, 26, 34, 39, 47];

function countGold(userId) {
	var db = getParentZone().getDBManager();
	var nowtime = Date.now() / 1000;
	var sumRankResult = db.executeQuery("SELECT SUM(amount*ie) AS num FROM gold WHERE userid=?", [userId]);
	var num = sumRankResult.getSFSObject(0).getDouble("num");
	var data = [
		num,
		nowtime,
		userId
	];
	db.executeUpdate("UPDATE users SET gold=?,updatetime=? WHERE id=?", data);
	return num;
}

function getUserColor(user, roomVars) {
	for (var rvidx in roomVars) {
		var rv = roomVars[rvidx];
		if (rv.isNull() || rv.getType() !== VariableType.INT) {
			continue;
		}
		var rvvalue = rv.getIntValue();
		if (rvvalue !== -1 && rvvalue === user.getId()) {
			return rv.name;
		}
	}
	return null;
}

function getUserStateName(color, id) {
	return color + id;
}


function getUser(id) {
	if (id == null) {
		return null;
	}
	var db = getParentZone().getDBManager();
	var user = db.executeQuery("SELECT * FROM users WHERE id=?", [id]);
	if (user == null || user.size() != 1) {
		return null;
	}
	return user.getSFSObject(0);
}

function countTotalData(userId) {
	var db = getParentZone().getDBManager();
	sumRankResult = db.executeQuery("SELECT (vscomputer_wins + online_wins + vsfriend_wins) AS WinTotal, (vscomputer_lost + online_lost + vsfriend_lost) AS LostTotal, (vscomputer_timer + online_timer + vsfriend_timer) AS TimerTotal FROM users WHERE id=?", [userId]);
	var result = sumRankResult.getSFSObject(0);
	var WinTotal = result.getLong("WinTotal");
	var LostTotal = result.getLong("LostTotal");
	var TimerTotal = result.getLong("TimerTotal");
	var data = [
		WinTotal,
		LostTotal,
		TimerTotal,
		userId
	];
	db.executeUpdate("UPDATE users SET wins=?, losts=?, timers=? WHERE id=?", data);
	return [WinTotal,LostTotal,TimerTotal];
}

function getContestData(userId, type) {
	var db = getParentZone().getDBManager();
	var sumRankResult = db.executeQuery("SELECT COUNT(id) as WinsCount, SUM(rate) AS RateSum, SUM(duration) AS DurationSum FROM contest WHERE userid=? AND type=?", [userId, type]);
	var result = sumRankResult.getSFSObject(0);
	var RateSum = result.getDouble("RateSum");
	var DurationSum = result.getDouble("DurationSum");
	var WinsCount = result.getLong("WinsCount");
	return [WinsCount, RateSum, DurationSum, userId];
}

function countRank(userId) {
	var db = getParentZone().getDBManager();
	var nowtime = Date.now() / 1000;
	var sumRankResult = db.executeQuery("SELECT SUM(amount*ie) AS num FROM rank WHERE userid=?", [userId]);
	var rank = sumRankResult.getSFSObject(0).getDouble("num");
	var data = [
		rank,
		nowtime,
		userId
	];
	db.executeUpdate("UPDATE users SET rank=?,updatetime=? WHERE id=?", data);
	return rank;
}


function addUser(nickname, avatar, trim,pawns, syncTime) {
	var db = getParentZone().getDBManager();
	var data = [
		nickname,
		avatar,
		trim,
		pawns,
		syncTime,
		syncTime,
		syncTime,
	];
	var userId = db.executeInsert("INSERT INTO users(nickname,avatar,trim,pawns,updatetime,createtime,logintime) VALUES(?,?,?,?,?,?,?)", data);
	var scoreData = [
		userId,
		20,
		syncTime,
		"newuser"
	];
	db.executeInsert("INSERT INTO rank(userid,amount,createtime,reason) VALUES(?,?,?,?)", scoreData);

	return userId;
}

function syncUserVariable(userId, inParams, sender) {
	var userVars = [];
	userVars.push(new SFSUserVariable("userid", userId, VariableType.INT));
	userVars.push(new SFSUserVariable("avatar", inParams.getInt("avatar"), VariableType.INT));
	userVars.push(new SFSUserVariable("nickname", inParams.getUtfString("nickname"), VariableType.STRING));
	userVars.push(new SFSUserVariable("trim", inParams.getUtfString("trim"), VariableType.STRING));
	userVars.push(new SFSUserVariable("rank", inParams.getInt("rank"), VariableType.INT));
	userVars.push(new SFSUserVariable("gold", inParams.getInt("gold"), VariableType.INT));
	userVars.push(new SFSUserVariable("pawns", inParams.getUtfString("pawns"), VariableType.STRING));
	getApi().setUserVariables(sender, userVars, true);
}

