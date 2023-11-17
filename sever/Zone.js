function init() {
	addEventHandler(SFSEventType.USER_LOGIN, onUserLogin);
	addEventHandler(SFSEventType.USER_LOGOUT, onUserLogout);
    addEventHandler(SFSEventType.SERVER_READY, onExtensionReady);

	addRequestHandler("Hurl", onHurl);
	addRequestHandler("SyncProfile", onSyncProfileRequest);
	addRequestHandler("EventRequest", onEventRequest);
	addRequestHandler("GetJettonRequest", onGetJettonRequest);
	addRequestHandler("GetCoinRequest", onGetCoinRequest);
	addRequestHandler("BuyGoldRequest", onBuyGoldRequest);

	addRequestHandler("GetProfileRequest", onGetProfileRequest);
	addRequestHandler("GeneralizeRequest", onGeneralizeRequest);
	addRequestHandler("CombatRequest", onCombatRequest);
	addRequestHandler("RanklistRequest", onRanklistRequest);
	addRequestHandler("CheckinListRequest", onCheckinListRequest);
	addRequestHandler("CheckinRequest", onCheckinRequest);
	addRequestHandler("TestRequest", onTestRequest);
	addRequestHandler("AddRecentRequest", onAddRecentRequest);
	addRequestHandler("GetRecentRequest", onGetRecentRequest);
	addRequestHandler("AddRecentBuddyRequest", onAddRecentBuddyRequest);
	addRequestHandler("UsePropsRequest", onUsePropsRequest);
	addRequestHandler("BuyTrimRequest", onBuyTrimRequest);
	addRequestHandler("GetTrimRequest", onGetTrimRequest);

}

function destroy() {
	trace("Simple JS Example destroyed");
}
function onExtensionReady(event)
{
    trace("Extension is ready");
}

function onUserLogout(event)
{
}


function onGetTrimRequest(inParams, sender) {
	var myselfid = sender.getVariable("userid").value;
	var params = new SFSObject();
	var db = getParentZone().getDBManager();
	var recent = db.executeQuery("SELECT * FROM trims WHERE userid=?", [myselfid]);
	params.putSFSArray("list", recent);
	send("GetTrimRequest", params, [sender]);
}

function onBuyTrimRequest(inParams, sender) {
	var nowtime = Date.now() / 1000;
	var myselfgold = sender.getVariable("gold").value;
	var myselfid = sender.getVariable("userid").value;
	var amount = inParams.getInt("amount");
	if (myselfgold > amount) {
		var type = inParams.getUtfString("type");
		var fund = inParams.getUtfString("fund");
		var data = [
			myselfid,
			nowtime,
			type,
			fund
		];
		var db = getParentZone().getDBManager();
		db.executeInsert("INSERT INTO trims(userid,createtime,type,fund) VALUES(?,?,?,?)", data);
		send("BuyTrimRequest", inParams, [sender]);
	}
}
function onUsePropsRequest(inParams, sender) {
	var nowtime = Date.now() / 1000;
	var myselfid = sender.getVariable("userid").value;
	var userid = inParams.getInt("id");
	var prop = inParams.getInt("prop");
	var room = sender.getLastJoinedRoom();
	var myselfgold = sender.getVariable("gold").value;
	var amount = inParams.getInt("amount");

	if (myselfgold > amount) {
		var recipient = getApi().getUserByName(getParentZone(),userid);
		if (recipient != null) {
			var db = getParentZone().getDBManager();
			var data = [
				myselfid,
				-1,
				amount,
				nowtime,
				"props"
			];
			db.executeInsert("INSERT INTO gold(userid,ie,amount,createtime,reason) VALUES(?,?,?,?,?)", data);
			inParams.putInt("gold", countGold(myselfid));
		
			var params = new SFSObject();
			params.putInt("prop", prop);
			params.putInt("userid", userid);
			params.putUtfString("event", "UseProps");
			getApi().sendObjectMessage(room, sender ,params);
		}
	}
	send("UsePropsRequest", inParams, [sender]);
}

function onUserLogin(event) {
	var outData =event.getParameter(SFSEventParam.LOGIN_OUT_DATA);
	var nowtime = Date.now() / 1000;
	var userid =event.getParameter(SFSEventParam.LOGIN_NAME);

	var user = getUser(userid);

	if (user == null) {
		var resultSet =  getParentZone().getDBManager().executeQuery("SELECT count(*) cnt FROM users");
		var rowCount = resultSet.getSFSObject(0).getLong("cnt");
		var nickname = "Guest" + rowCount;
		userid = addUser(nickname, 0, "0.png", nowtime);
		outData.putInt("userid",userid);
	}
}

function onAddRecentBuddyRequest(inParams, sender) {
	var myselfid = sender.getVariable("userid").value;
	var userid = inParams.getInt("id");
	var db = getParentZone().getDBManager();
	db.executeUpdate("DELETE FROM recent WHERE userid=? AND extremeid=?", [myselfid,userid]);
	send("AddRecentBuddyRequest", inParams, [sender]);
}
function onGetRecentRequest(inParams, sender) {
	var myselfid = sender.getVariable("userid").value;
	var params = new SFSObject();
	var db = getParentZone().getDBManager();
	var recent = db.executeQuery("SELECT users.id,users.nickname,users.avatar FROM recent LEFT JOIN users ON recent.extremeid=users.id  WHERE recent.userid=? ORDER BY recent.updatetime LIMIT 20", [myselfid]);
	params.putSFSArray("list", recent);
	send("GetRecentRequest", params, [sender]);
}

function onAddRecentRequest(inParams, sender) {
	var db = getParentZone().getDBManager();
	var room = sender.getLastJoinedRoom();
	var nowtime = Date.now() / 1000;

	var myselfid = sender.getVariable("userid").value;
	var players = room.getUserList();
	for (i = 0; i < players.length; ++i) {
		var playerId =  players[i].getVariable("userid");
		if (playerId == null) {
			break;
		}
		var user = getUser(playerId.value);
		if (user == null) {
			break;
		}		
		var userid = user.getInt("id");

		if (players[i].id != sender.id) {
			var recent = db.executeQuery("SELECT * FROM recent WHERE userid=? AND extremeid=?", [myselfid,userid]);
			if (recent == null || recent.size() == 0) {
				db.executeInsert("INSERT INTO recent(userid,extremeid,updatetime) VALUES(?,?,?)", [myselfid,userid,nowtime]);
			} else {
				var id = recent.getSFSObject(0).getInt("id");
				db.executeUpdate("UPDATE recent SET updatetime=? WHERE id=?", [nowtime,id]);
			}
		}
	}
}

function onTestRequest(inParams, sender) {
	var userid = inParams.getInt("id");
	countTotalData(userid);
}

function onCheckinRequest(inParams, sender) {
	var nowtime = Date.now() / 1000;
	var db = getParentZone().getDBManager();
	var params = new SFSObject();
	var userid = inParams.getInt("id");
	var user = getUser(userid);
	if (user != null) {
		var checkintime = user.getInt("checkintime");
		if ((nowtime - checkintime) < (24 * 60 * 60)) {
			return;
		}
		var checkinday = user.getInt("checkinday") + 1;
		if (checkinday > 6) {
			checkinday = 0;
		}
		params.putInt("checkinday", checkinday);

		if (checkinday == 0) {
			var data = [
				checkinday,
				userid
			];
			db.executeUpdate("UPDATE users SET checkinday=? WHERE id=?", data);
		} else {
			var checkin = db.executeQuery("SELECT * FROM checkin WHERE day=?", [checkinday]);
			if (checkin != null) {
				var goldCheckin = checkin.getSFSObject(0).getInt("gold");
				var goldData = [
					userid,
					1,
					goldCheckin,
					nowtime,
					"checkin"
				];
				db.executeInsert("INSERT INTO gold(userid,ie,amount,createtime,reason) VALUES(?,?,?,?,?)", goldData);
				var earnGold = countGold(userid);
				params.putInt("gold", earnGold);
				params.putInt("reword", goldCheckin);

				var data = [
					earnGold,
					checkinday,
					nowtime,
					userid
				];
				db.executeUpdate("UPDATE users SET gold=?,checkinday=?,checkintime=? WHERE id=?", data);
			}
		}
	}
	send("CheckinRequest", params, [sender]);
}

function onCheckinListRequest(inParams, sender) {
	var params = new SFSObject();

	var db = getParentZone().getDBManager();
	var result = db.executeQuery("SELECT * FROM checkin");
	params.putSFSArray("list", result);
	send("CheckinListRequest", params, [sender]);
}

function onRanklistRequest(inParams, sender) {
	var db = getParentZone().getDBManager();
	var result = db.executeQuery("SELECT * FROM users ORDER BY rank DESC LIMIT 50");
	var params = new SFSObject();
	params.putSFSArray("list", result);
	send("RanklistRequest", params, [sender]);
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

function getContestData(userId, type) {
	var db = getParentZone().getDBManager();
	var sumRankResult = db.executeQuery("SELECT COUNT(id) as WinsCount, SUM(rate) AS RateSum, SUM(duration) AS DurationSum FROM contest WHERE userid=? AND type=?", [userId, type]);
	var result = sumRankResult.getSFSObject(0);
	var RateSum = result.getDouble("RateSum");
	var DurationSum = result.getDouble("DurationSum");
	var WinsCount = result.getLong("WinsCount");
	return [WinsCount, RateSum, DurationSum, userId];
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

		switch (type) {
			case "extreme": {
				db.executeUpdate("UPDATE users SET online_wins=?,online_rate=?,online_timer=? WHERE id=?", getContestData(userId, type));
				countTotalData(userId);
				break;
			}
			case "friend": {
				db.executeUpdate("UPDATE users SET vsfriend_wins=?,vsfriend_rate=?,vsfriend_timer=? WHERE id=?", getContestData(userId, type));
				countTotalData(userId);
				break;
			}
		}
		params.putInt("rank", rank);
	}
	send("GeneralizeRequest", params, [sender]);
}

function onGetJettonRequest(inParams, sender) {
	var scope = inParams.getUtfString("scope");
	var db = getParentZone().getDBManager();
	var result = db.executeQuery("SELECT * FROM jetton WHERE scope=?", [scope]);
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



function onBuyGoldRequest(inParams, sender) {
	var nowtime = Date.now() / 1000;
	var userid = inParams.getInt("id");
	var user = getUser(userid);
	if (user != null) {
		var amount = inParams.getInt("amount");
		var db = getParentZone().getDBManager();
		var data = [
			userid,
			1,
			amount,
			nowtime,
			"buy"
		];
		db.executeInsert("INSERT INTO gold(userid,ie,amount,createtime,reason) VALUES(?,?,?,?,?)", data);
		inParams.putInt("gold", countGold(userid));
		send("BuyGoldRequest", inParams, [sender]);
	}
}

function onGetCoinRequest(inParams, sender) {
	var db = getParentZone().getDBManager();
	var result = db.executeQuery("SELECT * FROM coin");
	var params = new SFSObject();
	params.putSFSArray("list", result);
	send("GetCoinRequest", params, [sender]);
}

function onCombatRequest(inParams, sender) {
	var db = getParentZone().getDBManager();
	var nowtime = Date.now() / 1000;
	var userid = inParams.getInt("id");
	var user = getUser(userid);
	if (user != null) {
		var type = "computer";
		var params = new SFSObject();

		var rate = 10;
		var rankData = [
			userid,
			rate,
			nowtime,
			"victory"
		];
		db.executeInsert("INSERT INTO rank(userid,amount,createtime,reason) VALUES(?,?,?,?)", rankData);
		countRank(userid);

		if (inParams.getInt("victory") == 0) {
			var contestData = [
				userid,
				nowtime,
				type,
				0,
				rate,
				"victory"
			];
			db.executeInsert("INSERT INTO contest(userid,createtime,type,duration,rate,reason) VALUES(?,?,?,?,?,?)", contestData);

			var sumRankResult = db.executeQuery("SELECT COUNT(id) as WinsCount FROM contest WHERE userid=? AND type=? AND reason=?", [userid, type, "victory"]);
			var WinsCount = sumRankResult.getSFSObject(0).getLong("WinsCount");
			db.executeUpdate("UPDATE users SET vscomputer_wins=? WHERE id=?", [WinsCount, userid]);
			countTotalData(userid);

			var earn = 500;
			var data = [
				userid,
				1,
				earn,
				nowtime,
				"victory"
			];
			db.executeInsert("INSERT INTO gold(userid,ie,amount,createtime,reason) VALUES(?,?,?,?,?)", data);
			params.putInt("earn", earn);
			params.putInt("amount", countGold(userid));

		} else {
			var contestData = [
				userid,
				nowtime,
				type,
				0,
				rate,
				"lost"
			];
			db.executeInsert("INSERT INTO contest(userid,createtime,type,duration,rate,reason) VALUES(?,?,?,?,?,?)", contestData);

			var sumRankResult = db.executeQuery("SELECT COUNT(id) as LostCount FROM contest WHERE userid=? AND type=? AND  reason=?", [userid, type, "lost"]);
			var LostCount = sumRankResult.getSFSObject(0).getLong("LostCount");
			db.executeUpdate("UPDATE users SET vscomputer_lost=? WHERE id=?", [LostCount, userid]);
			countTotalData(userid);
		}
		var user = getUser(userid);
		params.putInt("vscomputer_lost", user.getInt("vscomputer_lost"));
		params.putInt("vscomputer_wins", user.getInt("vscomputer_wins"));
		send("CombatRequest", params, [sender]);
	}
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
			if (earn > 0) {
				var data = [
					userid.value,
					1,
					earn,
					nowtime,
					"victory"
				];
				db.executeInsert("INSERT INTO gold(userid,ie,amount,createtime,reason) VALUES(?,?,?,?,?)", data);
			}
			var amount = countGold(userid.value);

			var params = new SFSObject();
			params.putInt("earn", earn);
			params.putInt("amount", amount);
			params.putInt("winner", sender.id);
			getApi().sendModeratorMessage(null, "Winner", params, [session]);
		} else {
			var pay = jetton.value.getDouble("pay");
			if (pay > 0) {
				var data = [
					userid.value,
					-1,
					pay,
					nowtime,
					"lost"
				];
				db.executeInsert("INSERT INTO gold(userid,ie,amount,createtime,reason) VALUES(?,?,?,?,?)", data);
			}
			var amount = countGold(userid.value);

			var params = new SFSObject();
			params.putInt("pay", pay);
			params.putInt("amount", amount);
			params.putInt("winner", sender.id);
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


function onSyncProfileRequest(inParams, sender) {
	var nowtime = Date.now() / 1000;
	var db = getParentZone().getDBManager();
	var resultSet = db.executeQuery("SELECT count(*) cnt FROM users");
	var rowCount = resultSet.getSFSObject(0).getLong("cnt");
	var syncTime = inParams.getLong("updatetime");
	if (syncTime == null) {
		syncTime = nowtime;
	}
	var nickname = inParams.getUtfString("nickname");
	if (nickname == null || nickname == "") {
		nickname = "Guest" + rowCount;
		inParams.putUtfString("nickname", nickname)
	}
	var avatar = inParams.getInt("avatar");
	if (avatar == null) {
		avatar = 0;
		inParams.putInt("avatar", avatar);
	}
	
	var trim = inParams.getUtfString("trim");
	if (trim == null || trim == "") {
		trim = "0.png";
		inParams.putUtfString("trim", trim)
	}
	
	var pawns = inParams.getUtfString("pawns");
	if (pawns == null || pawns == "") {
		pawns = "00";
		inParams.putUtfString("pawns", pawns)
	}

	var user = getUser(inParams.getInt("id"));
	if (user == null) {
		userId = addUser(nickname, avatar,trim,pawns, syncTime);
		inParams.putInt("rank", countRank(userId));
		inParams.putInt("gold", 0);
		inParams.putInt("id", userId);
		syncUserVariable(userId, inParams, sender);
	} else {
		var userId =  user.getInt("id");
		var updateTime = user.getInt("updatetime");
		if (updateTime > syncTime) {
			inParams = user;
			nickname = inParams.getUtfString("nickname");
			avatar = inParams.getInt("avatar");
			trim = inParams.getUtfString("trim");
			pawns = inParams.getUtfString("pawns");
		} else {
			userId = user.getInt("id");
			var data = [
				nickname,
				avatar,
				trim,
				pawns,
				syncTime,
				userId
			];
			db.executeUpdate("UPDATE users SET nickname=?,avatar=?,trim=?,pawns=?,updatetime=? WHERE id=?", data);
			inParams = getUser(userId);
		}
		if ((nowtime - updateTime) > (24 * 60 * 60)) {
			var scoreData = [
				userId,
				5,
				nowtime,
				"login"
			];
			db.executeInsert("INSERT INTO rank(userid,amount,createtime,reason) VALUES(?,?,?,?)", scoreData);
			inParams.putInt("rank", countRank(userId));
		}
		syncUserVariable(userId, inParams, sender);
	}
	send("SyncProfile", inParams, [sender]);
}
