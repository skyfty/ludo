include("Utils.js")

var scheduler;
var taskHandle;
var playerOrder = [];
var currentIdx = 0;
var routes = {};

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
		routeBase:routeBaseOfPlayer[colorOfPlayer.indexOf(color)],
		chesses:[
			{
				place:"groove",
				hole:0,
				defended:false,
				safe:false,
				route:0
			},
			{
				place:"groove",
				hole:0,
				defended:false,
				safe:false,
				route:0
			},
			{
				place:"groove",
				hole:0,
				defended:false,
				safe:false,
				route:0
			},
			{
				place:"groove",
				hole:0,
				defended:false,
				safe:false,
				route:0
			},
		]
	};
}


function tracePlayerOrder(tag) {
	var log = "";
	for(var i = 0; i < playerOrder.length; ++i) {
		var chesses = "";
		for(var j = 0; j < playerOrder[i].chesses.length; ++j) {
			chesses += "[ " +
			"place: " + playerOrder[i].chesses[j].place + "," + 
			"hole: " + playerOrder[i].chesses[j].hole + "," + 
			"route: " + playerOrder[i].chesses[j].route + "," + 
			"safe: " + playerOrder[i].chesses[j].safe + ","
			chesses += " ]";
		}

		log += "id=" + playerOrder[i].id 
		+ "  color=" + playerOrder[i].color 
		+ "  routeBase=" + playerOrder[i].routeBase 
		+ "  currentDiceNumber="  + playerOrder[i].currentDiceNumber
		+ "  chesses: "  + chesses
		log += "\n";
	}
	trace("\n[" + tag + "]"  +" currentIdx=" + currentIdx +"\n" + log);
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
			taskHandle = scheduler.schedule(rollStart, 1000);
		}
	}
}


function sendRollEndMessage(num) {
	var user = getApi().getUserById(playerOrder[currentIdx].id);
    var params = new SFSObject();
    params.putUtfString("event", "ROLL_END");
    params.putInt("num", num);
    getApi().sendObjectMessage(getParentRoom(), user, params);
}

function sendChooseMessage(name) {
	var user = getApi().getUserById(playerOrder[currentIdx].id);
    var params = new SFSObject();
    params.putUtfString("event", "CHOOSE");
    params.putInt("name", name);
    getApi().sendObjectMessage(getParentRoom(), user, params);
}
function sendEventMessage(evt) {
	var user = getApi().getUserById(playerOrder[currentIdx].id);
    var params = new SFSObject();
    params.putUtfString("event", evt);
    getApi().sendObjectMessage(getParentRoom(), user, params);
}

function sendGenerateMagicMessage(num, type) {
	var user = getApi().getUserById(playerOrder[currentIdx].id);
    var params = new SFSObject();
    params.putUtfString("event", "GenerateMagic");
    params.putInt("num", num);
    params.putUtfString("type", type);
    getApi().sendObjectMessage(getParentRoom(), user, params);
}
function sendRocketMessage(name, num) {
	var user = getApi().getUserById(playerOrder[currentIdx].id);
    var params = new SFSObject();
    params.putUtfString("event", "Rocket");
    params.putInt("num", num);
    params.putUtfString("name", name);
    getApi().sendObjectMessage(getParentRoom(), user, params);
}
function setNextPlayerIndex() {
	if (currentIdx == playerOrder.length - 1) {
		currentIdx = 0;
	} else {
		currentIdx++;
	}
}

function getHurlNumber() {
	var num = 5;//Math.floor(Math.random() * 6);
	// var currentPlayer = playerOrder[currentIdx];
	// if (currentPlayer.groove.length == 4) {
	// 	num = 5;
	// } else {
	// 	num = 0;
	// }
	return num;
}

function rollStart() {
	var user = getApi().getUserById(playerOrder[currentIdx].id);
	if (user === null || !user.isNpc()) {
		return;
	}
	sendEventMessage("ROLL_START");
    taskHandle = scheduler.schedule(hurl, 1000);
}

function isAllHome(currentPlayer) {
	var cnt = 0;
	for(var i in currentPlayer.chesses) {
		if (currentPlayer.chesses[i].place === "home") {
			cnt++;
		}
	}
	return cnt === 4;
}

function infer() {
	var currentPlayer = playerOrder[currentIdx];
	var chesses = reckon();
	if (chesses.length > 0) {
		var deduceResult = deduce(chesses);
		advance(deduceResult[0]);
		if (deduceResult.length > 1) {
			sendChooseMessage(deduceResult[0]);
		}
	}	
	sendEventMessage("ACHIEVE");
	if (isAllHome(currentPlayer)) {
		sendEventMessage("VICTORY");
	} else {
		setNextPlayerIndex();
	}
}

function hurl() {
	var currentPlayer = playerOrder[currentIdx];
	currentPlayer.currentDiceNumber = getHurlNumber();;
	sendRollEndMessage(currentPlayer.currentDiceNumber);
    taskHandle = scheduler.schedule(infer, 1000);
}

function kick(playerChesses) {
	for(var i1 in playerChesses) {
		var chess = playerChesses[i1].chess;
		if (chess.place === "chippy") {
			chess.place = "groove";
			chess.hole = 0;
		}
	}
}

function generateMagic(type) {
	var num = -1;
	while(true) {
		num = Math.floor(Math.random() * NUMBER_ROUTE);
		if (MagicPersevere.indexOf(num) == -1) {
			break;
		}
	}
	if (num != -1) {
		routes[num].magic = type;
		sendGenerateMagicMessage(num, type);
	}
}

function getNextStepNumber(from, step) {
	var num = from + step;
	if (num > NUMBER_ROUTE) {
		num = num - NUMBER_ROUTE - 1
	}
	return num;
}

function getNextRoute(currentDiceNumber,currentPlayer, chess) {
	return getNextStepNumber(currentPlayer.chesses[chess].route, currentDiceNumber)
}

function isSafeRoute(hole) {
	return hole == 0 ||  hole == 8 ||  hole == 13 ||  hole == 21 ||   hole == 26 ||   hole == 34 ||  hole == 39 ||  hole == 47 ;
}

function advance(chess) {
	var currentPlayer = playerOrder[currentIdx];
	var currentChess = currentPlayer.chesses[chess];
	if (currentChess.place === "home") {
		return;
	}
	var currentDiceNumber = currentPlayer.currentDiceNumber + 1;
	if (currentChess.place === "chippy") {
		currentChess.hole += currentDiceNumber;
		currentChess.route = getNextRoute(currentDiceNumber, currentPlayer, chess);
		currentChess.safe = isSafeRoute(currentChess.hole);
		if (currentChess.hole > NUMBER_UNIVERSAL_HOLD) {
			currentChess.place = "personal";
			currentChess.hole = currentChess.hole - NUMBER_UNIVERSAL_HOLD - 1;
			currentChess.route = 0;
		}
	} else  {
		if (currentChess.place === "groove") {
			currentChess.hole = 0;
			currentChess.route = currentPlayer.routeBase;
			currentChess.safe = true;
			currentChess.place = "chippy";
		} else {
			if (currentChessplace === "personal") {
				var direction = 1;
				var currentHoleNumber = currentChess.hole;
				for(var i = 0; i < currentDiceNumber; ++i) {
					if (currentHoleNumber >= NUMBER_HOME_HOLD || currentHoleNumber < 0) {
						direction *=-1;
					}
					currentHoleNumber += direction;
				}
				currentChess.hole = currentHoleNumber;
				if (currentChess.hole === NUMBER_HOME_HOLD) {
					currentChess.place = "home";
					currentChess.hole = 0;
				}
			}
		}
	}

	if (currentChess.place === "chippy") {
		trap(currentChess);
	}
	tracePlayerOrder("advance   ");
}

function trap(currentChess) {
	var route = currentChess.route;
	var kickChesses = getKickChesses(route);
	if (kickChesses != null && kickChesses.length > 0) {
		kick(kickChesses);
	} else {
		if (routes[route] && routes[route].magic) {
			switch(routes[route].magic) {
				case "defender": {
					currentChess.defended = true;
					break;
				}
				case "rocket": {
					routes[route].magic = null;
					break;
				}
				case "plus": {
					routes[route].magic = null;
					break;
				}
			}
			generateMagic(routes[route].magic);
			routes[route].magic = null;
		}
	}
}
 

function reckon() {
	var chesses= [];
	var currentPlayer = playerOrder[currentIdx];
	var currentDiceNumber = currentPlayer.currentDiceNumber;
	for(var i in currentPlayer.chesses) {
		var chess = currentPlayer.chesses[i];
		if(currentDiceNumber === 5) {
			if (chess.place === "chippy" || chess.place === "groove" ) {
				chesses.push(i);
			}
		} else if (chess.place === "chippy") {
			chesses.push(i);
		}
		if (chess.place === "personal") {
			chesses.push(i);
		}
	}
	return chesses;
}

function getKickChesses(route) {
	var resultChesses = [];
	for(var i = 0; i < playerOrder.length; ++i) {
		if (i == currentIdx) {
			continue;
		}
		var playerChesses = [];
		for(var j = 0; j < playerOrder[i].chesses.length; ++j) {
			var chess = playerOrder[i].chesses[j]
			if (chess.defended || chess.safe) {
				continue;
			}
			if (chess.route === route) {
				playerChesses.push(chess);
			}
		}
		if (playerChesses.length ==1) {
			resultChesses.push({playerIndex:i, chess:playerChesses[0]});
		}
	}
	return resultChesses;
}

function deduce(chesses) {
	var deduceResult = [];
	var deduceLast = [];
	var currentPlayer = playerOrder[currentIdx];

	for(var i in chesses) {
		var currentNumber = currentPlayer.chesses[chesses[i]].hole;
		if (currentPlayer.chesses[chesses[i]].place==="groove" && currentPlayer.currentDiceNumber === 5) {
			deduceResult.push(chesses[i]);
		} else if (currentPlayer.chesses[chesses[i]].place==="chippy") {
			var nextStep = currentPlayer.currentDiceNumber + 1;
			if (currentNumber + nextStep > NUMBER_UNIVERSAL_HOLD) {
				deduceLast.push(chesses[i]);
			} else {
				var nextRoute = getNextRoute(nextStep, currentPlayer, chesses[i]);
				if (nextRoute != -1) {
					var resultChesses = getKickChesses(nextRoute);
					if (resultChesses && resultChesses.length > 0) {
						kick(resultChesses);
						deduceResult.push(chesses[i]);
					} else {
						deduceLast.push(chesses[i]);
					}
				} else {
					deduceLast.push(chesses[i]);
				}
			}
		} else {
			if (currentNumber + currentPlayer.currentDiceNumber == 5) {
				deduceResult.unshift(chesses[i]);
			} else {
				deduceLast.push(chesses[i]);
			}
		}
	}
	return deduceResult.concat(deduceLast);
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
				case "CHOOSE": {
					onChoose(inParams, sender);
					break;
				}
				case "GenerateMagic": {
					onGenerateMagic(inParams, sender);
					break;
				}
				case "Rocket": {
					onRocket(inParams, sender);
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



function onRocket(inParams, sender) {
	// var name = inParams.getInt("name");
	// var step = inParams.getInt("num");
	// var currentPlayer = playerOrder[currentIdx];
	// var currentHoleNumber = currentPlayer.chesses[name].hole;
	// for(var roadIdx = 0; roadIdx < step; ++roadIdx) {
	// 	currentHoleNumber += 1;
	// 	if (currentHoleNumber == 50) {
	// 		currentHoleNumber = 0;
	// 		++roadIdx

	// 		roadway = this.player.personal as Laya.Sprite;
	// 	} else {
	// 		if (currentHoleNumber >  NUMBER_UNIVERSAL_HOLD - 1) {
	// 			currentHoleNumber = currentHoleNumber - NUMBER_UNIVERSAL_HOLD;
	// 		}
	// 	}
	// }
}

function onGenerateMagic(inParams, sender) {
	var type = inParams.getUtfString("type");
	var num = inParams.getInt("num");
	routes[num].magic = type;
}

function onChoose(inParams, sender) {
	var name = inParams.getUtfString("name");
	var chesses = reckon();
	for(var i = 0; i < chesses.length; ++i) {
		if(name ==  chesses[i]) {
			advance(chesses[i]);
			break;
		}
	}
}

function onHurl(params, sender) {
	var userid = sender.getVariable("userid");
	if (userid != null) {
		var user = getUser(userid.value);
		if (user != null) {
			var num = getHurlNumber();;
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
	setNextPlayerIndex();
	rollStart();
}

function onRollEnd(inParams, sender) {
	playerOrder[currentIdx].currentDiceNumber = inParams.getInt("num");
	var chesses = reckon();
	if (chesses.length > 0) {
		chesses = deduce(chesses);
		if (chesses.length === 1) {
			advance(chesses);
		}
	}
}