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

  // assets/Script.ts
  var { regClass, property } = Laya;
  var Script = class extends Laya.Script {
    constructor() {
      super();
      this.text = "";
    }
    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    //onAwake(): void {}
    /**
     * 组件被启用后执行，例如节点被添加到舞台后
     */
    //onEnable(): void {}
    /**
     * 组件被禁用时执行，例如从节点从舞台移除后
     */
    //onDisable(): void {}
    /**
     * 第一次执行update之前执行，只会执行一次
     */
    //onStart(): void {}
    /**
     * 手动调用节点销毁时执行
     */
    //onDestroy(): void {
    /**
     * 每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
     */
    //onUpdate(): void {}
    /**
     * 每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
     */
    //onLateUpdate(): void {}
    /**
     * 鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
     */
    //onMouseClick(): void {}
  };
  __name(Script, "Script");
  __decorateClass([
    property(String)
  ], Script.prototype, "text", 2);
  Script = __decorateClass([
    regClass("28427133-6af9-475d-8edc-33eecae53767", "Script.ts")
  ], Script);

  // src/Player.ts
  var { regClass: regClass2, property: property2 } = Laya;
  var Event = class {
  };
  __name(Event, "Event");
  Event.EntryRoom = "ENTRY_ROOM";
  Event.ExitRoom = "EXIT_ROOM";
  Event.StateChange = "STATE_CHANGE";
  Event.RollStart = "ROLL_START";
  Event.RollEnd = "ROLL_END";
  Event.Choose = "CHOOSE";
  Event.Achieve = "ACHIEVE";
  Event.Victory = "VICTORY";
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
    }
    onAwake() {
      this.numberUniversalHold = this.universal.numChildren;
      this.numberPersonalHold = this.personal.numChildren;
    }
    onStart() {
      this.owner.on(Event.StateChange, this, this.onStateChange);
    }
    onStateChange(state) {
      if (state == 1 /* Running */) {
        this.originTwinkle.getComponent(Laya.Animator2D).play("gleam");
      } else {
        this.originTwinkle.getComponent(Laya.Animator2D).play("recess");
      }
    }
    setDiceNumber(idx) {
      this.diceDefault.visible = true;
      this.diceRoll.visible = false;
      this.diceDefault.index = idx;
    }
    scaleChessInHole(node) {
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
    reckonChess(diceNumber, complete) {
      if (diceNumber != 5 && this.chippy.length > 0) {
        if (this.chippy.length > 1) {
          complete.runWith([this.chippy]);
        } else {
          complete.runWith([new Array(this.chippy[0])]);
        }
      } else if (diceNumber == 5) {
        let chesses = [];
        chesses = chesses.concat(this.chippy);
        for (let i = 0; i < this.groove.numChildren; ++i) {
          chesses.push(this.groove.getChildAt(i));
        }
        complete.runWith([chesses]);
      } else {
        complete.runWith(null);
      }
    }
    isAllHome() {
      return this.home.length == 4;
    }
    onAdvanceComplete(node, complete) {
      let chess = node.getComponent(Chess);
      this.scaleChessInHole(node);
      if (chess.hole == this.goal) {
        let idx = this.chippy.indexOf(node);
        if (idx != -1) {
          this.home.push(this.chippy.splice(idx, 1)[0]);
        }
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
  ], Player.prototype, "originTwinkle", 2);
  __decorateClass([
    property2(Laya.Prefab)
  ], Player.prototype, "chessPrefab", 2);
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
    jump(dest, parent, complete) {
      let ownerSprite = this.owner;
      let parentSprite = this.owner.parent;
      let originPoint = parentSprite.localToGlobal(new Laya.Point(ownerSprite.x, ownerSprite.y));
      Laya.stage.addChild(ownerSprite.pos(originPoint.x, originPoint.y));
      let destPoint = parent.localToGlobal(new Laya.Point(dest.x, dest.y));
      Laya.Tween.to(ownerSprite, { y: destPoint.y, x: destPoint.x }, 200, Laya.Ease.quintInOut, Laya.Handler.create(this, () => {
        this.hole = dest;
        parent.addChild(ownerSprite.pos(dest.x, dest.y));
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
        this.jump(this.player.entry, this.player.universal, complete);
      } else if (this.hole == this.player.door) {
        let personal = this.player.personal;
        let firstHole = personal.getChildByName("0");
        this.jump(firstHole, this.player.personal, Laya.Handler.create(this, () => {
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
        this.moveTo(nextHole, Laya.Handler.create(this, () => {
          this.step(--step, director, complete);
        }));
      }
    }
    moveTo(nextHole, complete) {
      let destPoint = new Laya.Point(nextHole.x, nextHole.y);
      Laya.Tween.to(this.owner, { y: destPoint.y, x: destPoint.x }, 200, Laya.Ease.quintInOut, Laya.Handler.create(this, () => {
        this.hole = nextHole;
        complete.run();
      }));
    }
    hop() {
      this.chess.getComponent(Laya.Animator2D).play("hop");
    }
    stop() {
      this.chess.getComponent(Laya.Animator2D).play("idle");
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
      this.owner.event(Event.StateChange, [state]);
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
      this.owner.on(Event.StateChange, this, this.onStateChange);
    }
    onStateChange() {
      if (this.state != 1 /* Running */) {
        return;
      }
      this.startRoll();
    }
    startRoll() {
      this.owner.event(Event.RollStart, this.owner);
      this.player.startRoll();
      Laya.timer.once(600, this, this.onRollTimeout);
    }
    onRollTimeout() {
      this.currentDiceNumber = 5;
      this.player.stopRoll(Laya.Handler.create(this, this.onRollStop));
    }
    onRollStop() {
      this.owner.event(Event.RollEnd, [this.owner, this.currentDiceNumber]);
      this.player.setDiceNumber(this.currentDiceNumber);
      this.player.reckonChess(this.currentDiceNumber, Laya.Handler.create(this, (chesses) => {
        if (chesses != null) {
          this.owner.event(Event.Choose, [this.owner]);
          let idx = Math.floor(Math.random() * chesses.length);
          this.player.advance(chesses[idx], this.currentDiceNumber, Laya.Handler.create(this, this.onAdvanceComplete));
        } else {
          this.owner.event(Event.Achieve, null);
        }
      }));
    }
    onAdvanceComplete(node) {
      let chess = node.getComponent(Chess);
      if (chess.hole == this.player.entry) {
        this.startRoll();
        return;
      }
      this.owner.event(Event.Achieve, node);
      if (this.player.isAllHome()) {
        this.owner.event(Event.Victory);
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
      this.owner.on(Event.StateChange, this, this.onStateChange);
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
        this.owner.event(Event.EntryRoom, [Intelligent.colors[i], 1 /* Computer */, Event.EntryRoom, info]);
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
      this.owner.event(Event.RollStart, this.owner);
      this.player.startRoll();
      Laya.timer.once(600, this, this.onRollTimeout);
    }
    onRollTimeout() {
      this.currentDiceNumber = 5;
      this.player.stopRoll(Laya.Handler.create(this, this.onRollStop));
    }
    onRollStop() {
      this.owner.event(Event.RollEnd, [this.owner, this.currentDiceNumber]);
      this.player.setDiceNumber(this.currentDiceNumber);
      this.player.reckonChess(this.currentDiceNumber, Laya.Handler.create(this, (chesses) => {
        if (chesses != null) {
          this.owner.event(Event.Choose, [this.owner]);
          this.onReckonChessComplete(chesses, Laya.Handler.create(this, this.onChooseChessesComplete));
        } else {
          this.isAdvanceing = false;
          this.owner.event(Event.Achieve, null);
        }
      }));
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
      this.owner.event(Event.Achieve, node);
      if (this.player.isAllHome()) {
        this.owner.event(Event.Victory);
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
      this.owner.event(Event.EntryRoom, ["red", 2 /* Oneself */, Event.EntryRoom, info]);
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
      this.redPlayer.on(Event.Achieve, this, this.onAchieve);
      this.greenPlayer.on(Event.Achieve, this, this.onAchieve);
      this.yellowPlayer.on(Event.Achieve, this, this.onAchieve);
      this.bluePlayer.on(Event.Achieve, this, this.onAchieve);
      this.redPlayer.on(Event.Victory, this, this.onVictory);
      this.greenPlayer.on(Event.Victory, this, this.onVictory);
      this.yellowPlayer.on(Event.Victory, this, this.onVictory);
      this.bluePlayer.on(Event.Victory, this, this.onVictory);
      this.owner.on(Event.EntryRoom, this, this.onEntryRoom);
      this.owner.on(Event.ExitRoom, this, this.onExitRoom);
    }
    onStart() {
      this.numberOfPlayer = 2;
      this.initEventListener();
      this.owner.addComponentInstance(new Principal());
      this.owner.addComponentInstance(new Intelligent(1));
      this.owner.addComponentInstance(new Online());
    }
    onVictory(player) {
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
