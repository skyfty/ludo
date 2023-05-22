(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // src/Route.ts
  var { regClass, property } = Laya;
  var Safe = /* @__PURE__ */ ((Safe2) => {
    Safe2[Safe2["no"] = 0] = "no";
    Safe2[Safe2["yes"] = 1] = "yes";
    return Safe2;
  })(Safe || {});
  var Event = class {
  };
  __name(Event, "Event");
  Event.Enter = "ROUTE_ENTER";
  Event.Exit = "ROUTE_EXIT";
  var Route = class extends Laya.Script {
    constructor() {
      super();
      this.safe = 0 /* no */;
      this.chess = [];
    }
    onAwake() {
      super.onAwake();
      this.owner.on(Event.Enter, this, this.onChessEnter);
      this.owner.on(Event.Exit, this, this.onChessExit);
    }
    onChessEnter(node) {
      this.scaleChess();
    }
    onChessExit(node) {
      this.scaleChess();
    }
    puddleAni(color) {
      let idxs = { "red": [0, 5], "green": [6, 11], "yellow": [12, 17], "blue": [18, 23] }[color];
      this.puddle.visible = true;
      this.puddle.play(idxs[0], idxs[1]);
      Laya.timer.once(700, this, () => {
        this.puddle.visible = false;
      });
    }
    scaleChess() {
      let hole = this.owner;
      if (this.chess.length == 1) {
        this.chess[0].scale(1, 1).pos(hole.x, hole.y);
      } else if (this.chess.length == 2) {
        this.chess[0].scale(0.7, 0.7).pos(hole.x, hole.y);
        this.chess[1].scale(0.7, 0.7).pos(hole.x + 14, hole.y + 14);
      } else if (this.chess.length == 3) {
        this.chess[0].scale(0.7, 0.7).pos(hole.x - 6, hole.y - 5);
        this.chess[1].scale(0.7, 0.7).pos(hole.x + 15, hole.y - 5);
        this.chess[2].scale(0.7, 0.7).pos(hole.x + 6, hole.y + 14);
      } else if (this.chess.length == 4) {
        this.chess[0].scale(0.7, 0.7).pos(hole.x - 6, hole.y - 5);
        this.chess[1].scale(0.7, 0.7).pos(hole.x + 15, hole.y - 5);
        this.chess[2].scale(0.7, 0.7).pos(hole.x - 6, hole.y + 14);
        this.chess[3].scale(0.7, 0.7).pos(hole.x + 15, hole.y + 14);
      } else if (this.chess.length == 5) {
        this.chess[0].scale(0.6, 0.6).pos(hole.x - 6, hole.y - 6);
        this.chess[1].scale(0.6, 0.6).pos(hole.x + 19, hole.y - 6);
        this.chess[2].scale(0.6, 0.6).pos(hole.x - 6, hole.y + 20);
        this.chess[3].scale(0.6, 0.6).pos(hole.x + 19, hole.y + 20);
        this.chess[4].scale(0.6, 0.6).pos(hole.x + 7, hole.y + 7);
      } else {
        let x = 0;
        let y = hole.y - 20;
        for (let i = 0; i < this.chess.length; ++i) {
          if (i % 3 == 0) {
            y += 15;
            x = hole.x - 6;
          } else {
            x += 15;
          }
          this.chess[i].scale(0.5, 0.5).pos(x, y);
        }
      }
    }
  };
  __name(Route, "Route");
  __decorateClass([
    property(Laya.Clip)
  ], Route.prototype, "puddle", 2);
  __decorateClass([
    property({ type: Safe })
  ], Route.prototype, "safe", 2);
  __decorateClass([
    property([Laya.Sprite])
  ], Route.prototype, "chess", 2);
  Route = __decorateClass([
    regClass("f65b0a36-8072-43b6-ba82-0cc45e25162f", "../src/Route.ts")
  ], Route);

  // src/Player.ts
  var { regClass: regClass2, property: property2 } = Laya;
  var Event2 = class {
  };
  __name(Event2, "Event");
  Event2.EntryRoom = "ENTRY_ROOM";
  Event2.ExitRoom = "EXIT_ROOM";
  Event2.StateChange = "STATE_CHANGE";
  Event2.RollStart = "ROLL_START";
  Event2.RollEnd = "ROLL_END";
  Event2.Choose = "CHOOSE";
  Event2.Achieve = "ACHIEVE";
  Event2.Victory = "VICTORY";
  var Type = /* @__PURE__ */ ((Type2) => {
    Type2[Type2["Online"] = 0] = "Online";
    Type2[Type2["Computer"] = 1] = "Computer";
    Type2[Type2["Oneself"] = 2] = "Oneself";
    return Type2;
  })(Type || {});
  var State = /* @__PURE__ */ ((State2) => {
    State2[State2["Idle"] = 0] = "Idle";
    State2[State2["Running"] = 1] = "Running";
    return State2;
  })(State || {});
  var Player = class extends Laya.Script {
    constructor() {
      super();
      this.chippy = [];
      this.home = [];
      this.ggg = 0;
    }
    onAwake() {
      this.numberUniversalHold = this.universal.numChildren;
      this.numberPersonalHold = this.personal.numChildren;
    }
    onStart() {
      this.owner.on(Event2.StateChange, this, this.onStateChange);
    }
    onStateChange(state) {
    }
    setDiceNumber(idx) {
      this.diceDefault.visible = true;
      this.diceRoll.visible = false;
      this.diceDefault.index = idx;
    }
    startRoll() {
      this.diceDefault.visible = false;
      this.diceRoll.visible = true;
      this.diceRoll.play(0, -1);
    }
    stopRoll(complete) {
      this.diceRoll.stop();
      complete.run();
    }
    hopChesses(chesses) {
      for (let i = 0; i < chesses.length; ++i) {
        chesses[i].getComponent(Chess).hop();
      }
    }
    stopChesses(chesses) {
      for (let i = 0; i < chesses.length; ++i) {
        chesses[i].getComponent(Chess).stop();
      }
    }
    reckonChess(diceNumber) {
      let chesses = [];
      if (diceNumber != 5 && this.chippy.length > 0) {
        if (this.chippy.length > 1) {
          chesses = this.chippy;
        } else {
          chesses.push(this.chippy[0]);
        }
      } else if (diceNumber == 5) {
        chesses = chesses.concat(this.chippy);
        for (let i = 0; i < this.groove.numChildren; ++i) {
          chesses.push(this.groove.getChildAt(i));
        }
      }
      return chesses;
    }
    getUniversalNextNumber(currentNumber, step) {
      let num = currentNumber + step;
      if (num > this.numberUniversalHold) {
        num = num - this.numberUniversalHold + 1;
      } else if (num < 0) {
        num = this.numberUniversalHold - num;
      }
      return num;
    }
    getUniversalNextHole(currentNumber, step) {
      let nextNumber = this.getUniversalNextNumber(currentNumber, step);
      return this.universal.getChildByName(nextNumber.toString());
    }
    deduce(diceNumber, chesses, complete) {
      let deduceResult = [];
      let deduceLast = [];
      for (let i = 0; i < chesses.length; ++i) {
        let chess = chesses[i].getComponent(Chess);
        if (chesses[i].parent == this.groove && diceNumber == 5) {
          deduceResult.push({ chess: chesses[i], reason: "entry" });
        } else if (chesses[i].parent == this.universal) {
          let currentNumber = Number.parseInt(chess.hole.name);
          let nextStep = diceNumber + 1;
          let nextNumber = currentNumber + nextStep;
          if (nextNumber > Number.parseInt(this.door.name)) {
            deduceLast.push({ chess: chesses[i], reason: "advance" });
          } else {
            let nextHole = this.getUniversalNextHole(currentNumber, nextStep);
            if (nextHole != null) {
              let resultChesses = this.getKickChesses(nextHole.getComponent(Route));
              if (resultChesses.length > 0) {
                resultChesses.map((c) => {
                  c.kicked();
                });
                deduceResult.push({ chess: chesses[i], reason: "kick" });
              } else {
                deduceLast.push({ chess: chesses[i], reason: "advance" });
              }
            } else {
              deduceLast.push({ chess: chesses[i], reason: "advance" });
            }
          }
        } else {
          let currentHoleNumber = Number.parseInt(chess.hole.name);
          if (currentHoleNumber + diceNumber == 5) {
            deduceResult.unshift({ chess: chesses[i], reason: "home" });
          } else {
            deduceLast.push({ chess: chesses[i], reason: "advance" });
          }
        }
      }
      deduceLast.sort(() => Math.random() - 0.5);
      complete.runWith([deduceResult.concat(deduceLast)]);
    }
    isAllHome() {
      return this.home.length == 4;
    }
    getChesses(route, player) {
      let chesses = [];
      for (let i = 0; i < route.chess.length; ++i) {
        let chess = route.chess[i].getComponent(Chess);
        if (chess.player == player) {
          chesses.push(chess);
        }
      }
      return chesses;
    }
    getKickChesses(route) {
      let resultChesses = [];
      if (route.safe == 1 /* yes */) {
        return resultChesses;
      }
      for (let i = 0; i < route.chess.length; ++i) {
        let chess = route.chess[i].getComponent(Chess);
        let chesses = this.getChesses(route, chess.player);
        if (chesses.length == 1) {
          resultChesses.push(chess);
        }
      }
      return resultChesses;
    }
    kick(route) {
      let chesses = this.getKickChesses(route);
      chesses.map((chess) => {
        chess.revert(Laya.Handler.create(this, () => {
        }));
      });
    }
    onAdvanceComplete(node, complete) {
      let chess = node.getComponent(Chess);
      if (chess.hole == this.goal) {
        let idx = this.chippy.indexOf(node);
        if (idx != -1) {
          this.home.push(this.chippy.splice(idx, 1)[0]);
        }
      }
      this.ggg++;
      if (this.ggg > 5) {
        let route = chess.hole.getComponent(Route);
        this.kick(route);
      }
      if (this.isAllHome()) {
        this.crown.visible = true;
        this.crown.getComponent(Laya.Animator2D).play("elastic");
      } else {
      }
      complete.runWith(node);
    }
    advance(node, diceNumber, complete) {
      let chess = node.getComponent(Chess);
      if (this.chippy.indexOf(node) != -1) {
        chess.step(diceNumber + 1, 1, Laya.Handler.create(this, () => {
          this.onAdvanceComplete(node, complete);
        }));
      } else if (node.parent == this.groove) {
        chess.step(1, 1, Laya.Handler.create(this, () => {
          this.chippy.push(node);
          this.onAdvanceComplete(node, complete);
        }));
      }
    }
  };
  __name(Player, "Player");
  __decorateClass([
    property2(Laya.Sprite)
  ], Player.prototype, "entry", 2);
  __decorateClass([
    property2(Laya.Sprite)
  ], Player.prototype, "goal", 2);
  __decorateClass([
    property2(Laya.Sprite)
  ], Player.prototype, "door", 2);
  __decorateClass([
    property2(Laya.Clip)
  ], Player.prototype, "diceRoll", 2);
  __decorateClass([
    property2(Laya.Clip)
  ], Player.prototype, "diceDefault", 2);
  __decorateClass([
    property2(Laya.Sprite)
  ], Player.prototype, "groove", 2);
  __decorateClass([
    property2(Laya.Sprite)
  ], Player.prototype, "universal", 2);
  __decorateClass([
    property2(Laya.Sprite)
  ], Player.prototype, "trade", 2);
  __decorateClass([
    property2(Laya.Sprite)
  ], Player.prototype, "personal", 2);
  __decorateClass([
    property2(Laya.Sprite)
  ], Player.prototype, "crown", 2);
  __decorateClass([
    property2(Laya.Sprite)
  ], Player.prototype, "origin", 2);
  __decorateClass([
    property2(Laya.Prefab)
  ], Player.prototype, "chessPrefab", 2);
  __decorateClass([
    property2([Laya.Sprite])
  ], Player.prototype, "chippy", 2);
  Player = __decorateClass([
    regClass2("c5f16793-ae8c-43aa-80e7-cdc3ce175664", "../src/Player.ts")
  ], Player);

  // src/Chess.ts
  var { regClass: regClass3, property: property3 } = Laya;
  var Chess = class extends Laya.Script {
    constructor() {
      super();
    }
    onAwake() {
      super.onAwake();
    }
    jump(dest, complete) {
      let parent = dest.parent;
      let ownerSprite = this.owner;
      let parentSprite = this.owner.parent;
      let originPoint = parentSprite.localToGlobal(new Laya.Point(ownerSprite.x, ownerSprite.y));
      Laya.stage.addChild(ownerSprite.pos(originPoint.x, originPoint.y));
      let destPoint = parent.localToGlobal(new Laya.Point(dest.x, dest.y));
      Laya.Tween.to(ownerSprite, { y: destPoint.y, x: destPoint.x }, 200, Laya.Ease.quintInOut, Laya.Handler.create(this, () => {
        this.pass(dest);
        this.hole.event(Event.Exit, [ownerSprite]);
        this.hole = dest;
        parent.addChild(ownerSprite.pos(dest.x, dest.y));
        this.hole.event(Event.Enter), [ownerSprite];
        complete.run();
      }));
    }
    step(step, director, complete) {
      let roadway = this.owner.parent;
      if (step == 0) {
        complete.run();
        return;
      }
      if (roadway == this.player.groove) {
        this.jump(this.player.entry, complete);
      } else if (this.hole == this.player.door) {
        let personal = this.player.personal;
        let firstHole = personal.getChildByName("0");
        this.jump(firstHole, Laya.Handler.create(this, () => {
          this.step(--step, director, complete);
        }));
      } else {
        let currentHoleNumber = Number.parseInt(this.hole.name);
        if (roadway == this.player.personal) {
          if (currentHoleNumber >= this.player.numberPersonalHold - 1 || currentHoleNumber < 0) {
            director *= -1;
          }
          currentHoleNumber += director;
        } else if (currentHoleNumber < 0) {
          currentHoleNumber = this.player.numberUniversalHold - 1;
        } else {
          currentHoleNumber += director;
        }
        let nextHole = roadway.getChildByName(currentHoleNumber.toString());
        if (nextHole == null) {
          nextHole = roadway.getChildByName("0");
        }
        this.moveTo(nextHole, 200, Laya.Handler.create(this, () => {
          this.step(--step, director, complete);
        }));
      }
    }
    pass(nextHole) {
      let route = this.hole.getComponent(Route);
      if (route != null) {
        let idx = route.chess.indexOf(this.owner);
        if (idx != -1) {
          route.chess.splice(idx, 1);
        }
      }
      let nextRoute = nextHole.getComponent(Route);
      if (nextRoute != null) {
        nextRoute.chess.push(this.owner);
        nextRoute.puddleAni(this.player.owner.name);
      }
    }
    backoff(dest, complete) {
      if (dest == this.hole) {
        complete.run();
        return;
      }
      let roadway = this.owner.parent;
      let currentHoleNumber = Number.parseInt(this.hole.name);
      if (currentHoleNumber < 0) {
        currentHoleNumber = this.player.numberUniversalHold - 1;
      } else {
        currentHoleNumber -= 1;
      }
      let nextHole = roadway.getChildByName(currentHoleNumber.toString());
      if (nextHole == null) {
        nextHole = roadway.getChildByName("0");
      }
      this.moveTo(nextHole, 20, Laya.Handler.create(this, () => {
        this.backoff(dest, complete);
      }));
    }
    revert(complete) {
      this.backoff(this.player.entry, Laya.Handler.create(this, () => {
        let dest = this.player.origin.getChildByName(this.owner.name);
        this.jump(dest, complete);
      }));
    }
    moveTo(nextHole, duration, complete) {
      let destPoint = new Laya.Point(nextHole.x, nextHole.y);
      Laya.Tween.to(this.owner, { y: destPoint.y, x: destPoint.x }, duration, Laya.Ease.quintInOut, Laya.Handler.create(this, () => {
        this.pass(nextHole);
        this.hole.event(Event.Exit, [this.owner]);
        this.hole = nextHole;
        this.hole.event(Event.Enter, [this.owner]);
        complete.run();
      }));
    }
    hop() {
      this.chess.getComponent(Laya.Animator2D).play("hop");
    }
    stop() {
      this.shoe.visible = false;
      this.chess.getComponent(Laya.Animator2D).play("idle");
    }
    kicked() {
      this.shoe.visible = true;
      this.chess.getComponent(Laya.Animator2D).play("kick");
    }
  };
  __name(Chess, "Chess");
  __decorateClass([
    property3(Player)
  ], Chess.prototype, "player", 2);
  __decorateClass([
    property3(Laya.Sprite)
  ], Chess.prototype, "hole", 2);
  __decorateClass([
    property3(Laya.Sprite)
  ], Chess.prototype, "chess", 2);
  __decorateClass([
    property3(Laya.Image)
  ], Chess.prototype, "image", 2);
  __decorateClass([
    property3(Laya.Image)
  ], Chess.prototype, "shoe", 2);
  Chess = __decorateClass([
    regClass3("2be80ad6-1bcc-440d-a7c9-809c6c1eef91", "../src/Chess.ts")
  ], Chess);

  // src/Performer.ts
  var { regClass: regClass4, property: property4 } = Laya;
  var Performer = class extends Laya.Script {
    constructor() {
      super();
      this.currentDiceNumber = 0;
      this.state = 0 /* Idle */;
    }
    onAwake() {
      let node = this.owner;
      this.player = node.getComponent(Player);
      node.visible = true;
    }
    setState(state) {
      this.state = state;
      this.owner.event(Event2.StateChange, [state]);
    }
  };
  __name(Performer, "Performer");
  Performer = __decorateClass([
    regClass4("a1b4fee2-5dd4-483e-bf42-a9f391634e69", "../src/Performer.ts")
  ], Performer);

  // src/Computer.ts
  var { regClass: regClass5, property: property5 } = Laya;
  var Computer = class extends Performer {
    constructor() {
      super();
    }
    onStart() {
      this.owner.on(Event2.StateChange, this, this.onStateChange);
    }
    onStateChange() {
      if (this.state != 1 /* Running */) {
        return;
      }
      this.startRoll();
    }
    startRoll() {
      this.owner.event(Event2.RollStart, this.owner);
      this.player.startRoll();
      Laya.timer.once(600, this, this.onRollTimeout);
    }
    onRollTimeout() {
      this.currentDiceNumber = Math.floor(Math.random() * 6);
      this.player.stopRoll(Laya.Handler.create(this, this.onRollStop));
    }
    onRollStop() {
      this.owner.event(Event2.RollEnd, [this.owner, this.currentDiceNumber]);
      this.player.setDiceNumber(this.currentDiceNumber);
      let chesses = this.player.reckonChess(this.currentDiceNumber);
      if (chesses.length > 0) {
        this.owner.event(Event2.Choose, [this.owner]);
        this.player.hopChesses(chesses);
        this.player.deduce(this.currentDiceNumber, chesses, Laya.Handler.create(this, (deduceResult) => {
          Laya.timer.once(500, this, () => {
            this.player.stopChesses(chesses);
            this.player.advance(deduceResult[0].chess, this.currentDiceNumber, Laya.Handler.create(this, this.onAdvanceComplete));
          });
        }));
      } else {
        this.owner.event(Event2.Achieve, null);
      }
    }
    onAdvanceComplete(node) {
      let chess = node.getComponent(Chess);
      if (chess.hole == this.player.entry) {
        this.startRoll();
        return;
      }
      this.owner.event(Event2.Achieve, node);
      if (this.player.isAllHome()) {
        this.owner.event(Event2.Victory);
      }
    }
  };
  __name(Computer, "Computer");
  Computer = __decorateClass([
    regClass5("34445544-5dc4-4031-a198-be7466abfb1c", "../src/Computer.ts")
  ], Computer);

  // src/Dice.ts
  var { regClass: regClass6, property: property6 } = Laya;
  var Dice = class extends Laya.Script {
    constructor() {
      super();
    }
  };
  __name(Dice, "Dice");
  Dice = __decorateClass([
    regClass6("26418778-2a8b-4ac8-aa46-9e423be83978", "../src/Dice.ts")
  ], Dice);

  // src/Door.ts
  var { regClass: regClass7, property: property7 } = Laya;
  var Door = class extends Laya.Script {
    constructor() {
      super();
    }
  };
  __name(Door, "Door");
  __decorateClass([
    property7(Laya.Sprite)
  ], Door.prototype, "player", 2);
  Door = __decorateClass([
    regClass7("679087f6-f6b5-4a60-9f2e-ff9a7d356e0f", "../src/Door.ts")
  ], Door);

  // src/Entry.ts
  var { regClass: regClass8, property: property8 } = Laya;
  var Entry = class extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    constructor() {
      super();
    }
  };
  __name(Entry, "Entry");
  Entry = __decorateClass([
    regClass8("e3ae5b8d-b787-4412-854b-2c694a132fb2", "../src/Entry.ts")
  ], Entry);

  // src/Extreme.ts
  var { regClass: regClass9, property: property9 } = Laya;
  var Extreme = class extends Performer {
    //declare owner : Laya.Sprite3D;
    constructor() {
      super();
    }
    onStart() {
      this.owner.on(Event2.StateChange, this, this.onStateChange);
    }
    onStateChange() {
      if (this.state == 1 /* Running */) {
      }
    }
  };
  __name(Extreme, "Extreme");
  Extreme = __decorateClass([
    regClass9("054e9a6b-c8fa-4318-af0a-6684a99b4f50", "../src/Extreme.ts")
  ], Extreme);

  // src/Groove.ts
  var { regClass: regClass10, property: property10 } = Laya;
  var Groove = class extends Laya.Script {
    constructor() {
      super();
    }
    /**
     * 组件被禁用时执行，例如从节点从舞台移除后
     */
    onDisable() {
    }
  };
  __name(Groove, "Groove");
  Groove = __decorateClass([
    regClass10("9423b787-8e07-485d-bf20-a0797b54ba35", "../src/Groove.ts")
  ], Groove);

  // src/Intelligent.ts
  var { regClass: regClass11, property: property11 } = Laya;
  var Intelligent = class extends Laya.Script {
    constructor(num) {
      super();
      this.num = 0;
      this.num = Math.min(num, 3);
    }
    onStart() {
      let info = {
        "name": "sdfsdf",
        "avatar": ""
      };
      for (let i = 0; i < this.num; ++i) {
        this.owner.event(Event2.EntryRoom, [Intelligent.colors[i], 1 /* Computer */, Event2.EntryRoom, info]);
      }
    }
  };
  __name(Intelligent, "Intelligent");
  Intelligent.colors = ["yellow", "green", "blue"];
  Intelligent = __decorateClass([
    regClass11("d7c1a2b6-2bc8-401a-bfb0-325e0a8341ac", "../src/Intelligent.ts")
  ], Intelligent);

  // src/Main.ts
  var { regClass: regClass12, property: property12 } = Laya;
  var Main = class extends Laya.Script {
    onStart() {
      console.log("Game start");
    }
  };
  __name(Main, "Main");
  Main = __decorateClass([
    regClass12("7bad1742-6eed-4d8d-81c0-501dc5bf03d6", "../src/Main.ts")
  ], Main);

  // src/Oneself.ts
  var { regClass: regClass13, property: property13 } = Laya;
  var Oneself = class extends Performer {
    constructor() {
      super();
      this.isAdvanceing = false;
    }
    /**
     * 第一次执行update之前执行，只会执行一次
     */
    onStart() {
      this.player.trade.on(Laya.Event.CLICK, this, this.onClickTrade);
    }
    onClickTrade() {
      if (this.state != 1 /* Running */ || this.isAdvanceing) {
        return;
      }
      this.isAdvanceing = true;
      this.owner.event(Event2.RollStart, this.owner);
      this.player.startRoll();
      Laya.timer.once(600, this, this.onRollTimeout);
    }
    onRollTimeout() {
      this.currentDiceNumber = 5;
      this.player.stopRoll(Laya.Handler.create(this, this.onRollStop));
    }
    onRollStop() {
      this.owner.event(Event2.RollEnd, [this.owner, this.currentDiceNumber]);
      this.player.setDiceNumber(this.currentDiceNumber);
      let chesses = this.player.reckonChess(this.currentDiceNumber);
      if (chesses.length > 0) {
        this.owner.event(Event2.Choose, [this.owner]);
        this.player.deduce(this.currentDiceNumber, chesses, Laya.Handler.create(this, () => {
          this.onReckonChessComplete(chesses, Laya.Handler.create(this, this.onChooseChessesComplete));
        }));
      } else {
        this.isAdvanceing = false;
        this.owner.event(Event2.Achieve, null);
      }
    }
    onChooseChessesComplete(chess) {
      this.player.advance(chess, this.currentDiceNumber, Laya.Handler.create(this, this.onAdvanceComplete));
    }
    onAdvanceComplete(node) {
      this.isAdvanceing = false;
      let chess = node.getComponent(Chess);
      if (chess.hole == this.player.entry) {
        return;
      }
      this.owner.event(Event2.Achieve, node);
      if (this.player.isAllHome()) {
        this.owner.event(Event2.Victory);
      }
    }
    onReckonMultiChessComplete(chesses, complete) {
      let o = "chooseChess";
      for (let i = 0; i < chesses.length; ++i) {
        chesses[i].on(Laya.Event.CLICK, o, () => {
          this.player.stopChesses(chesses);
          for (let i2 = 0; i2 < chesses.length; ++i2) {
            chesses[i2].offAllCaller(o);
          }
          complete.runWith(chesses[i]);
        });
      }
      this.player.hopChesses(chesses);
    }
    onReckonChessComplete(chesses, complete) {
      if (chesses.length == 1) {
        complete.runWith(chesses[0]);
      } else {
        this.onReckonMultiChessComplete(chesses, complete);
      }
    }
    onDestroy() {
      this.player.trade.offAllCaller(this);
    }
  };
  __name(Oneself, "Oneself");
  Oneself = __decorateClass([
    regClass13("8803a688-3028-462c-83c9-bb52e00eb643", "../src/Oneself.ts")
  ], Oneself);

  // src/Online.ts
  var { regClass: regClass14, property: property14 } = Laya;
  var Online = class extends Laya.Script {
    constructor() {
      super();
    }
  };
  __name(Online, "Online");
  Online = __decorateClass([
    regClass14("5cbe8df7-2989-4a1c-91eb-0242529c5c83", "../src/Online.ts")
  ], Online);

  // src/Principal.ts
  var { regClass: regClass15, property: property15 } = Laya;
  var Principal = class extends Laya.Script {
    constructor() {
      super();
    }
    onStart() {
      let info = {
        "name": "sdfsdf",
        "avatar": ""
      };
      this.owner.event(Event2.EntryRoom, ["red", 2 /* Oneself */, Event2.EntryRoom, info]);
    }
  };
  __name(Principal, "Principal");
  Principal = __decorateClass([
    regClass15("90b87526-7df3-43b1-ba8e-f6b9dcd24c3e", "../src/Principal.ts")
  ], Principal);

  // src/Room.ts
  var { regClass: regClass16, property: property16 } = Laya;
  var Room = class extends Laya.Script {
    constructor() {
      super();
      this.numberOfPlayer = 0;
      this.currentIdx = 0;
      this.players = [];
    }
    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    onAwake() {
      this.redPlayer.visible = false;
      this.greenPlayer.visible = false;
      this.bluePlayer.visible = false;
      this.yellowPlayer.visible = false;
    }
    initEventListener() {
      this.redPlayer.on(Event2.Achieve, this, this.onAchieve);
      this.greenPlayer.on(Event2.Achieve, this, this.onAchieve);
      this.yellowPlayer.on(Event2.Achieve, this, this.onAchieve);
      this.bluePlayer.on(Event2.Achieve, this, this.onAchieve);
      this.redPlayer.on(Event2.Victory, this, this.onVictory);
      this.greenPlayer.on(Event2.Victory, this, this.onVictory);
      this.yellowPlayer.on(Event2.Victory, this, this.onVictory);
      this.bluePlayer.on(Event2.Victory, this, this.onVictory);
      this.owner.on(Event2.EntryRoom, this, this.onEntryRoom);
      this.owner.on(Event2.ExitRoom, this, this.onExitRoom);
    }
    onStart() {
      this.numberOfPlayer = 2;
      this.initEventListener();
      this.owner.addComponentInstance(new Principal());
      this.owner.addComponentInstance(new Intelligent(1));
      this.owner.addComponentInstance(new Online());
    }
    onVictory(player) {
      this.players.map((node) => {
        node.getComponent(Performer).setState(0 /* Idle */);
      });
    }
    onAchieve(player) {
      let current = this.players[this.currentIdx].getComponent(Performer);
      current.setState(0 /* Idle */);
      if (this.currentIdx == this.players.length - 1) {
        this.currentIdx = 0;
      } else {
        this.currentIdx++;
      }
      let next = this.players[this.currentIdx].getComponent(Performer);
      next.setState(1 /* Running */);
    }
    getPlayer(color) {
      let player = null;
      switch (color) {
        case "red": {
          player = this.redPlayer;
          break;
        }
        case "blue": {
          player = this.bluePlayer;
          break;
        }
        case "yellow": {
          player = this.yellowPlayer;
          break;
        }
        case "green": {
          player = this.greenPlayer;
          break;
        }
      }
      return player;
    }
    onEntryRoom(color, type, profile) {
      let player = this.getPlayer(color);
      if (player == null) {
        return;
      }
      this.players.push(player);
      switch (type) {
        case 2 /* Oneself */: {
          player.addComponentInstance(new Oneself());
          break;
        }
        case 0 /* Online */: {
          player.addComponentInstance(new Extreme());
          break;
        }
        case 1 /* Computer */: {
          player.addComponentInstance(new Computer());
          break;
        }
      }
      if (this.players.length == this.numberOfPlayer) {
        let current = this.players[this.currentIdx].getComponent(Performer);
        current.setState(1 /* Running */);
      }
    }
    onExitRoom(player) {
      let idx = this.players.indexOf(player);
      if (idx != -1) {
        this.players.splice(idx, 1);
      }
    }
  };
  __name(Room, "Room");
  __decorateClass([
    property16(Laya.Sprite)
  ], Room.prototype, "redPlayer", 2);
  __decorateClass([
    property16(Laya.Sprite)
  ], Room.prototype, "greenPlayer", 2);
  __decorateClass([
    property16(Laya.Sprite)
  ], Room.prototype, "bluePlayer", 2);
  __decorateClass([
    property16(Laya.Sprite)
  ], Room.prototype, "yellowPlayer", 2);
  Room = __decorateClass([
    regClass16("fed491b4-6b8a-46f9-8167-977c47e8a79b", "../src/Room.ts")
  ], Room);
})();
//# sourceMappingURL=bundle.js.map
