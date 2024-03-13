var colorOfPlayer = ["red", "green", "yellow", "blue"];
var NUMBER_UNIVERSAL_HOLD = 52;
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
	];
	var userId = db.executeInsert("INSERT INTO users(nickname,avatar,trim,pawns,updatetime) VALUES(?,?,?,?,?)", data);
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

