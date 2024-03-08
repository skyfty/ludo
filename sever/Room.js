include("Utils.js")

var scheduler;
var taskHandle;

function init() {
    scheduler = getApi().newScheduler();
    addRequestHandler("EventRequest", onEventRequest);
	addRequestHandler("Hurl", onHurl);
    addRequestHandler("UsePropsRequest", onUsePropsRequest);
}

function destroy() {
	trace("Simple JS Example destroyed");
    if (taskHandle != null) {
        taskHandle.cancel(true);
    }
}


function onEventRequest(inParams, sender) {
	var userid = sender.getVariable("userid");
	if (userid != null) {
		var user = getUser(userid.value);
		if (user != null) {
			switch (inParams.getUtfString("event")) {
				case "VICTORY": {
					onVictory(inParams, sender);
					break;
				}
				case "ACHIEVE": {
					onAchieve(inParams, sender);
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
	var room = getParentRoom();
    var user = getApi().getUserByName(getParentZone(), "NPC#1");
    var params = new SFSObject();
    params.putUtfString("event", "ROLL_START");
    getApi().sendObjectMessage(room, user, params);
    taskHandle = scheduler.schedule(onRollEnd, 1000);
}

function onRollEnd() {
    var num = Math.floor(Math.random() * 6) + 1;
    var room = getParentRoom();
    var user = getApi().getUserByName(getParentZone(), "NPC#1");
    var params = new SFSObject();
    params.putUtfString("event", "ROLL_END");
    params.putInt("num", num);
    getApi().sendObjectMessage(room, user, params);

    

}

function onReckonChess() {

}