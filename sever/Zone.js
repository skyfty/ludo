include("Utils.js")

function init() {
	
	addEventHandler(SFSEventType.USER_LOGIN, onUserLogin);
	addEventHandler(SFSEventType.USER_LOGOUT, onUserLogout);
    addEventHandler(SFSEventType.SERVER_READY, onExtensionReady);

	addRequestHandler("SyncProfile", onSyncProfileRequest);
	addRequestHandler("GetJettonRequest", onGetJettonRequest);
	addRequestHandler("GetCoinRequest", onGetCoinRequest);
	addRequestHandler("BuyGoldRequest", onBuyGoldRequest);
	addRequestHandler("InviteNPC", onInviteNPC);

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
	addRequestHandler("BuyTrimRequest", onBuyTrimRequest);
	addRequestHandler("GetTrimRequest", onGetTrimRequest);
}

function destroy() {

}

var allNPCUsers = [];
var currentNPCIndex = 0;

function onExtensionReady(event)
{
	for(var i = 1; i < 200; ++i) {
		var npcUser = getApi().createNPC("NPC#" +i, getParentZone(), false);
		var userVars = [];
		userVars.push(new SFSUserVariable("userid", 10000000 + i, VariableType.INT));
		getApi().setUserVariables(npcUser, userVars, true);
		allNPCUsers.push(npcUser);
	}
}

var NICK_NAMES = ["Eyal","Sanford","Tate","Kamau","Khalid","Pendant","Kevina","Wynne","Desta","Jerzy","Eyal","Iolana","Kazuko","Sho","Cammie","Nahilla","Haruka","Uorsin","Yezivel","Hawise","Roger","Amerigo","Kilohana","Elkanah", ];

function setNpcUserVariable(npcUser) {
	var userVars = [];
	userVars.push(new SFSUserVariable("avatar", Math.floor(Math.random() * 30), VariableType.INT));
	userVars.push(new SFSUserVariable("nickname", NICK_NAMES[Math.floor(Math.random() * NICK_NAMES.length)], VariableType.STRING));
	userVars.push(new SFSUserVariable("trim", Math.floor(Math.random() * 9).toString() +".png", VariableType.STRING));
	userVars.push(new SFSUserVariable("rank", Math.floor(Math.random()*(1000-10+1)+300), VariableType.INT));
	userVars.push(new SFSUserVariable("gold", Math.floor(Math.random()*(877434-20000+1)+20000), VariableType.INT));
	userVars.push(new SFSUserVariable("pawns", "00", VariableType.STRING));
	getApi().setUserVariables(npcUser, userVars, true);
}


function onInviteNPC(inParams, sender) {	
	var npcUser = null;
	for(var npci in allNPCUsers) {
		if (!allNPCUsers[npci].isPlayer() && !allNPCUsers[npci].isJoining()) {
			npcUser = allNPCUsers[npci];
			break;
		}
	}
	if (npcUser == null) {
		inParams.putInt("npcid", -1);
		send("InviteNPC", inParams, [sender]);
		return;
	}
	setNpcUserVariable(npcUser);

	var room = sender.getLastJoinedRoom();
	var roomVars = [];
	for(var idx in colorOfPlayer) {
		var color = colorOfPlayer[idx];
		var colorVal = room.getVariable(color).value;
		if (colorVal == -1) {
			var stateName = getUserStateName(color, npcUser.getId());
			roomVars.push(new SFSRoomVariable(stateName, "ready", VariableType.STRING));
			roomVars.push(new SFSRoomVariable(color, npcUser.getId(), VariableType.INT));
			break;
		}
	}
	getApi().joinRoom(npcUser, room, null, false, null, true, true);
	getApi().setRoomVariables(null, room, roomVars, true, true);
	var userVars = [];
	userVars.push(new SFSUserVariable("currentIdx", 0, VariableType.INT));
	getApi().setUserVariables(npcUser, userVars, true);
	inParams.putInt("npcid", npcUser.getId());
	send("InviteNPC", inParams, [sender]);
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

		var goldData = [
			myselfid,
			-1,
			amount,
			nowtime,
			"buyTrim"
		];
		db.executeInsert("INSERT INTO gold(userid,ie,amount,createtime,reason) VALUES(?,?,?,?,?)", goldData);
		var earnGold = countGold(myselfid);
		var data = [
			earnGold,
			myselfid
		];
		db.executeUpdate("UPDATE users SET gold=? WHERE id=?", data);
		inParams.putInt("gold", earnGold);
	} else {
		inParams.putInt("amount", -1);
	}
	send("BuyTrimRequest", inParams, [sender]);
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
		if (playerId == null || players[i].isNpc()) {
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

function getNPCUser(userId) {
	for(var npci in allNPCUsers) {
		var playerId = allNPCUsers[npci].getVariable("userid");;
		if (userId == playerId.getIntValue()) {
			 return allNPCUsers[npci];
		}
	}
	return null;
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

function setUserWinState(user, nv) {
	var lost = Math.floor(Math.random() * 200);
	var wins = Math.floor(Math.random() * 50);
	var timers = lost + wins;
	var rate = Math.floor(Math.random()*(1434-300+1)+300);
	user.putInt(nv + "_lost", lost);
	user.putInt(nv + "_wins", wins);
	user.putInt(nv + "_rate", rate);
	user.putInt(nv + "_timer", timers);
}

function onGetProfileRequest(inParams, sender) {
	var user = null;
	var userId = inParams.getInt("id");
	var player = getNPCUser(userId);
	if (player !== null) {
		user = new SFSObject();
		user.putInt("wins", 50);
		user.putInt("losts", 3);
		setUserWinState(user, "vscomputer");
		setUserWinState(user, "online");
		setUserWinState(user, "vsfriend");
		user.putUtfString("nickname", player.getVariable("nickname").getStringValue());
		user.putInt("avatar", player.getVariable("avatar").getIntValue());
		user.putUtfString("trim", player.getVariable("trim").getStringValue());
		user.putUtfString("pawns", player.getVariable("pawns").getStringValue());
		user.putInt("rank", player.getVariable("rank").getIntValue());
	} else {
		user = getUser(userId);
	}
	send("GetProfileRequest", user, [sender]);
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
