function init() {
	addRequestHandler("Hurl", onHurl);
	addRequestHandler("SyncProfile", onSyncProfileRequest);
	addRequestHandler("EventRequest", onEventRequest);
	addRequestHandler("GetJettonRequest", onGetJettonRequest);
	addRequestHandler("GetCoinRequest", onGetCoinRequest);
	addRequestHandler("GetProfileRequest", onGetProfileRequest);
	addRequestHandler("GeneralizeRequest", onGeneralizeRequest);

}

function destroy() {
	trace("Simple JS Example destroyed");
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

function getContestData(userId,type) {
	var db = getParentZone().getDBManager();
	var sumRankResult = db.executeQuery("SELECT COUNT(id) as WinsCount, SUM(rate) AS RateSum, SUM(duration) AS DurationSum FROM contest WHERE userid=? AND type=?", [userId,type]);
	var RateSum = sumRankResult.getSFSObject(0).getDouble("RateSum");
	var DurationSum = sumRankResult.getSFSObject(0).getDouble("DurationSum");
	var WinsCount = sumRankResult.getSFSObject(0).getLong("WinsCount");
	return [WinsCount,RateSum,DurationSum,userId];
}

function onGeneralizeRequest(inParams, sender) {
	var db = getParentZone().getDBManager();
	var params = new SFSObject();
	var userId = inParams.getInt("id");
	var user = getUser(userId);
	if (user != null) {
		var nowtime = Date.now() / 1000;
		var rate = 10;
		params.putInt("rate", rate);

		var rankData = [
			userId,
			rate,
			nowtime,
			"victory"
		];
		db.executeInsert("INSERT INTO rank(userid,amount,createtime,reason) VALUES(?,?,?,?)", rankData);
		var rank = countRank(userId);

		var type = inParams.getUtfString("type");
		var duration = inParams.getInt("duration");
		var contestData = [
			userId,
			nowtime,
			type,
			duration,
			rate
		];
		db.executeInsert("INSERT INTO contest(userid,createtime,type,duration,rate) VALUES(?,?,?,?,?)", contestData);

		switch(type) {
            case "extreme": {
				db.executeUpdate("UPDATE users SET online_wins=?,online_rate=?,online_timer=? WHERE id=?", getContestData(userId,type));
                break;
            }
            case "friend": {
				db.executeUpdate("UPDATE users SET vsfriend_wins=?,vsfriend_rate=?,vsfriend_timer=? WHERE id=?", getContestData(userId,type));
                break;
            }
            default: {
				db.executeUpdate("UPDATE users SET vscomputer_wins=?,vscomputer_rate=?,vscomputer_timer=? WHERE id=?", getContestData(userId,type));
				break;
            }
        }
		params.putInt("rank", rank);
	}
	send("GeneralizeRequest", params, [sender]);
}

function onGetJettonRequest(inParams, sender) {
	var db = getParentZone().getDBManager();
	var result = db.executeQuery("SELECT * FROM jetton");
	var params = new SFSObject();
	params.putSFSArray("list", result);
	send("GetJettonRequest", params, [sender]);
}

function onGetProfileRequest(inParams, sender) {
	var userId = inParams.getInt("id");
	var user = getUser(userId);
	send("GetProfileRequest", user, [sender]);
}

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

function onGetCoinRequest(inParams, sender) {
	var db = getParentZone().getDBManager();
	var result = db.executeQuery("SELECT * FROM coin");
	var params = new SFSObject();
	params.putSFSArray("list", result);
	send("GetCoinRequest", params, [sender]);
}

function onVictory(inParams, sender) {
	var db = getParentZone().getDBManager();
	var room = sender.getLastJoinedRoom();
	var nowtime = Date.now() / 1000;

	var players = room.getUserList();
	for (i = 0; i < players.length; ++i) {
		var player = players[i];
		var userid = player.getVariable("userid");
		if (userid == null) {
			continue;
		}
		var jetton = room.getVariable("jetton" + player.id);
		if (jetton == null) {
			continue;
		}

		var session = player.getSession();
		if (player.id == sender.id) {
			var earn = jetton.value.getDouble("earn");
			var data = [
				userid.value,
				1,
				earn,
				nowtime,
				"victory"
			];
			db.executeInsert("INSERT INTO gold(userid,ie,amount,createtime,reason) VALUES(?,?,?,?,?)", data);
			var amount = countGold(userid.value);

			var params = new SFSObject();
			params.putInt("earn", earn);
			params.putInt("amount", amount);
			getApi().sendModeratorMessage(null, "Winner", params, [session]);
		} else {
			var pay = jetton.value.getDouble("pay");
			var data = [
				userid.value,
				-1,
				pay,
				nowtime,
				"lost"
			];
			db.executeInsert("INSERT INTO gold(userid,ie,amount,createtime,reason) VALUES(?,?,?,?,?)", data);
			var amount = countGold(userid.value);

			var params = new SFSObject();
			params.putInt("pay", pay);
			params.putInt("amount", amount);
			getApi().sendModeratorMessage(null, "Loser", params, [session]);
		}
	}

	var gameOver = new SFSRoomVariable("GameOver", nowtime, VariableType.INT);
	var winner = new SFSRoomVariable("Winner", sender.id, VariableType.INT);
	getApi().setRoomVariables(null, room, [gameOver, winner], true);
}

function onEventRequest(inParams, sender) {
	var userid = sender.getVariable("userid");
	if (userid != null) {
		var user = getUser(userid.value);
		if (user != null) {
			var room = sender.getLastJoinedRoom();
			switch (inParams.getUtfString("event")) {
				case "VICTORY": {
					onVictory(inParams, sender);
					break;
				}
			}
			getApi().sendObjectMessage(room, sender, inParams);
		}
	}
}

function onHurl(params, sender) {
	var userid = sender.getVariable("userid");
	if (userid != null) {
		var user = getUser(userid.value);
		if (user != null) {
			var num = Math.floor(Math.random() * 6);
			var params = new SFSObject();
			params.putInt("number", num);
			params.putInt("playerid", sender.id);
			send("Hurl", params, [sender]);
		}
	}
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

function syncUserVariable(userId, nickname, avatar, sender) {
	var userVars = [];
	userVars.push(new SFSUserVariable("userid", userId, VariableType.INT));
	userVars.push(new SFSUserVariable("avatar", avatar, VariableType.INT));
	userVars.push(new SFSUserVariable("nickname", nickname, VariableType.STRING));
	getApi().setUserVariables(sender, userVars, true);
}


function onSyncProfileRequest(inParams, sender) {
	var nowTime = Date.now() / 1000;
	var db = getParentZone().getDBManager();
	var resultSet = db.executeQuery("SELECT count(*) cnt FROM users");
	var rowCount = resultSet.getSFSObject(0).getLong("cnt");
	var syncTime = inParams.getLong("updatetime");
	if (syncTime == null) {
		syncTime = nowTime;
	}
	var nickname = inParams.getUtfString("nickname");
	if (nickname == null || nickname == "") {
		nickname = "Guest" + rowCount;
		inParams.putUtfString("nickname", nickname)
	}
	var avatar = inParams.getInt("avatar");
	if (avatar == null) {
		avatar = 0;
	}
	var userId = inParams.getInt("id");

	if (userId == null) {
		var data = [
			nickname,
			avatar,
			syncTime,
		];
		userId = db.executeInsert("INSERT INTO users(nickname,avatar,updatetime) VALUES(?,?,?)", data);
		var scoreData = [
			userId,
			20,
			syncTime,
			"newuser"
		];
		db.executeInsert("INSERT INTO rank(userid,amount,createtime,reason) VALUES(?,?,?,?)", scoreData);
		inParams.putInt("rank", countRank(userId));
		inParams.putInt("gold", 0);
		inParams.putInt("id", userId);
		syncUserVariable(userId, nickname, avatar, sender);
	} else {
		var user = getUser(userId);
		if (user != null) {
			var updateTime = user.getInt("updatetime");
			if (updateTime > syncTime) {
				inParams = user;
				nickname = inParams.getUtfString("nickname");
				avatar = inParams.getInt("avatar");
			} else {
				userId = user.getInt("id");
				var data = [
					nickname,
					avatar,
					syncTime,
					userId
				];
				db.executeUpdate("UPDATE users SET nickname=?,avatar=?,updatetime=? WHERE id=?", data);
				inParams.putInt("rank", user.getInt("rank"));
				inParams.putInt("gold", user.getInt("gold"));
			}
			if ((nowTime - updateTime) > (24 * 60 * 60)) {
				var scoreData = [
					userId,
					5,
					nowTime,
					"login"
				];
				db.executeInsert("INSERT INTO rank(userid,amount,createtime,reason) VALUES(?,?,?,?)", scoreData);
				inParams.putInt("rank", countRank(userId));
			}
			syncUserVariable(userId, nickname, avatar, sender);
		}
	}
	send("SyncProfile", inParams, [sender]);
}
