include("Utils.js")

var scheduler;
var taskHandle;
var playerOrder = [];
var currentIdx = 0;

function init() {
    scheduler = getApi().newScheduler();
    addRequestHandler("EventRequest", onEventRequest);
	addRequestHandler("Hurl", onHurl);
    addRequestHandler("UsePropsRequest", onUsePropsRequest);
	addEventHandler(SFSEventType.ROOM_VARIABLES_UPDATE, onRoomVariablesUpdate);
	addEventHandler(SFSEventType.USER_LEAVE_ROOM, onUserLeaveRoom);
	addEventHandler(SFSEventType.USER_DISCONNECT, onUserLeaveRoom);

}

function destroy() {
    if (taskHandle != null) {
        taskHandle.cancel(true);
    }
}

function onUserLeaveRoom(event) {
	var room = getParentRoom();
	var users = room.getUserList();
	var cnt = 0;
	for (var i in users) {
		if (users[i].isNpc()) {
			cnt++
		}
	}
	if (cnt === users.length) {
		for (var i in users) {
			getApi().leaveRoom(users[i], room);
		}
	}
}

function getInitPlayer(id, color) {
	return {
		id:id,
		color:color,
		currentDiceNumber:-1,
		chesses:{
			c0:{
				pos:-1
			},
			c1:{
				pos:-1
			},
			c2:{
				pos:-1
			},
			c3:{
				pos:-1
			},
		}
	};
}

function sortSeat(roomPlayers) {
	var playerInSeat = [];
	for(var i in colorOfPlayer) {
		for(var j in roomPlayers) {
			if (roomPlayers[j].color == colorOfPlayer[i]) {
				playerInSeat.push(roomPlayers[j]);
				break;
			}
		}
	}
	return playerInSeat;
}

function onRoomVariablesUpdate(event) {
	var room = getParentRoom();
	var users = room.getUserList();
	var roomVars = room.getVariables();
	var roomPlayers = [];
	for (var i in users) {
		var color = getUserColor(users[i], roomVars);
		var stateName = getUserStateName(color, users[i].getId());
		if (room.containsVariable(stateName)) {
			roomPlayers.push(getInitPlayer(users[i].getId(), color));	
		}
	}
	if (users.length == room.getMaxUsers() && roomPlayers.length == users.length) {
		playerOrder = sortSeat(roomPlayers);
		var user = getApi().getUserById(playerOrder[currentIdx].id);
		if (user !== null && user.isNpc()) {
			taskHandle = scheduler.schedule(advance, 1000);
		}
	}
}

function advance() {
	var user = getApi().getUserById(playerOrder[currentIdx].id);
	if (user === null || !user.isNpc()) {
		return;
	}
	var room = getParentRoom();
    var params = new SFSObject();
    params.putUtfString("event", "ROLL_START");
    getApi().sendObjectMessage(room, user, params);
    taskHandle = scheduler.schedule(infer, 1000);
}

function infer() {
    var num = Math.floor(Math.random() * 6) + 1;
    var room = getParentRoom();
	var user = getApi().getUserById(playerOrder[currentIdx].id);
	playerOrder[currentIdx].currentDiceNumber = num
    var params = new SFSObject();
    params.putUtfString("event", "ROLL_END");
    params.putInt("num", num);
    getApi().sendObjectMessage(room, user, params);
	reckon();
}

function reckon() {
	var room = getParentRoom();
	var user = getApi().getUserById(playerOrder[currentIdx].id);

}

function onEventRequest(inParams, sender) {
	var userid = sender.getVariable("userid");
	if (userid != null) {
		var user = getUser(userid.value);
		if (user != null) {
			var event = inParams.getUtfString("event");
			switch (event) {
				case "VICTORY": {
					onVictory(inParams, sender);
					break;
				}
				case "ACHIEVE": {
					onAchieve(inParams, sender);
					break;
				}
				case "ROLL_END": {
					onRollEnd(inParams, sender);
					break;
				}
			}
			getApi().sendObjectMessage(getParentRoom(), sender, inParams);
		}
	}
}

function onUsePropsRequest(inParams, sender) {
	var nowtime = Date.now() / 1000;
	var myselfid = sender.getVariable("userid").value;
	var userid = inParams.getInt("id");
	var prop = inParams.getInt("prop");
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
			getApi().sendObjectMessage(getParentRoom(), sender ,params);
		}
	}
	send("UsePropsRequest", inParams, [sender]);
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

function onVictory(inParams, sender) {
	var db = getParentZone().getDBManager();
	var room = getParentRoom();
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

function onAchieve(inParams, sender) {
	if (currentIdx == playerOrder.length - 1) {
		currentIdx = 0;
	} else {
		currentIdx++;
	}
	advance();
}

function onRollEnd(inParams, sender) {
	playerOrder[currentIdx].currentDiceNumber = inParams.getInt("num");
	reckon();
}
