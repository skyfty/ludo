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

  // src/Dice.ts
  var { regClass, property } = Laya;
  var Event = class {
    constructor() {
      this.RollEnd = "Dice.Event.RollEnd";
    }
  };
  __name(Event, "Event");
  var Dice = class extends Laya.Script {
    constructor() {
      super();
    }
  };
  __name(Dice, "Dice");
  Dice = __decorateClass([
    regClass("26418778-2a8b-4ac8-aa46-9e423be83978", "../src/Dice.ts")
  ], Dice);

  // src/Door.ts
  var { regClass: regClass2, property: property2 } = Laya;
  var Door = class extends Laya.Script {
    constructor() {
      super();
      this.color = "";
    }
  };
  __name(Door, "Door");
  __decorateClass([
    property2(String)
  ], Door.prototype, "color", 2);
  Door = __decorateClass([
    regClass2("679087f6-f6b5-4a60-9f2e-ff9a7d356e0f", "../src/Door.ts")
  ], Door);

  // src/home.ts
  var { regClass: regClass3, property: property3 } = Laya;
  var Home = class extends Laya.Script {
    constructor() {
      super();
      this.color = "";
    }
  };
  __name(Home, "Home");
  __decorateClass([
    property3(String)
  ], Home.prototype, "color", 2);
  Home = __decorateClass([
    regClass3("89bff9be-f51c-4750-99d3-78678aa44983", "../src/home.ts")
  ], Home);

  // src/Main.ts
  var { regClass: regClass4, property: property4 } = Laya;
  var Main = class extends Laya.Script {
    onStart() {
      console.log("Game start");
    }
  };
  __name(Main, "Main");
  Main = __decorateClass([
    regClass4("7bad1742-6eed-4d8d-81c0-501dc5bf03d6", "../src/Main.ts")
  ], Main);

  // src/Origin.ts
  var { regClass: regClass5, property: property5 } = Laya;
  var Origin = class extends Laya.Script {
    constructor() {
      super();
    }
  };
  __name(Origin, "Origin");
  Origin = __decorateClass([
    regClass5("e36a4cc4-5c60-47d3-b295-dd7dcfe4fd6c", "../src/Origin.ts")
  ], Origin);

  // src/Chess.ts
  var { regClass: regClass6, property: property6 } = Laya;
  var Chess = class extends Laya.Script {
    constructor() {
      super();
    }
    step(step, complete) {
      if (step == 0) {
        complete.run();
        return;
      }
      let currentHoleNumber = Number.parseInt(this.hole.name);
      currentHoleNumber++;
      let nextHole = this.owner.parent.getChildByName(currentHoleNumber.toString());
      let destPoint = new Laya.Point(nextHole.x, nextHole.y);
      Laya.Tween.to(this.owner, { y: destPoint.y, x: destPoint.x }, 200, Laya.Ease.quintInOut, Laya.Handler.create(this, () => {
        this.step(--step, complete);
      }));
      this.hole = nextHole;
    }
  };
  __name(Chess, "Chess");
  __decorateClass([
    property6(Laya.Sprite)
  ], Chess.prototype, "hole", 2);
  Chess = __decorateClass([
    regClass6("2be80ad6-1bcc-440d-a7c9-809c6c1eef91", "../src/Chess.ts")
  ], Chess);

  // src/Player.ts
  var { regClass: regClass7, property: property7 } = Laya;
  var Player = class extends Laya.Script {
    constructor() {
      super();
      this.currentDiceNumber = 0;
      this.chippy = [];
    }
    /**
     * 鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
     */
    onMouseClick() {
      this.startRoll();
    }
    setDiceNumber(idx) {
      this.diceDefault.visible = true;
      this.diceRoll.visible = false;
      this.diceDefault.index = idx;
    }
    onRollTimeout() {
      this.diceRoll.stop();
      this.setDiceNumber(this.currentDiceNumber);
      this.chooseChess(Laya.Handler.create(this, () => {
      }));
    }
    chooseChess(complete) {
    }
    cloneNewChess(childNode) {
      let newChess = this.chessPrefab.create();
      newChess.width = childNode.width;
      newChess.height = childNode.height;
      let newChessImage = newChess.getChildByName("Image");
      newChessImage.skin = childNode.skin;
      return newChess;
    }
    departure(destNode) {
      let groove = this.origin.owner.getChildByName("groove");
      let childNode = groove.getChildAt(0);
      let newChess = this.cloneNewChess(childNode);
      let newChessHole = newChess.getComponent(Chess);
      newChessHole.hole = destNode;
      let originPoint = groove.localToGlobal(new Laya.Point(childNode.x, childNode.y));
      Laya.stage.addChild(newChess.pos(originPoint.x, originPoint.y));
      let destPoint = this.universal.localToGlobal(new Laya.Point(destNode.x, destNode.y));
      Laya.Tween.to(newChess, { y: destPoint.y, x: destPoint.x }, 700, Laya.Ease.quintInOut, Laya.Handler.create(this, () => {
        this.universal.addChild(newChess.pos(destNode.x, destNode.y));
      }));
      childNode.visible = false;
      this.chippy.push(newChess);
    }
    startRoll() {
      this.currentDiceNumber = Math.floor(Math.random() * 6);
      this.diceDefault.visible = false;
      this.diceRoll.visible = true;
      this.diceRoll.play(0, -1);
      Laya.timer.once(100, this, this.onRollTimeout);
    }
  };
  __name(Player, "Player");
  __decorateClass([
    property7(Laya.Sprite)
  ], Player.prototype, "entry", 2);
  __decorateClass([
    property7(Laya.Clip)
  ], Player.prototype, "diceRoll", 2);
  __decorateClass([
    property7(Laya.Clip)
  ], Player.prototype, "diceDefault", 2);
  __decorateClass([
    property7(Origin)
  ], Player.prototype, "origin", 2);
  __decorateClass([
    property7(Laya.Sprite)
  ], Player.prototype, "universal", 2);
  __decorateClass([
    property7(Laya.Sprite)
  ], Player.prototype, "personal", 2);
  __decorateClass([
    property7(Laya.Prefab)
  ], Player.prototype, "chessPrefab", 2);
  Player = __decorateClass([
    regClass7("c5f16793-ae8c-43aa-80e7-cdc3ce175664", "../src/Player.ts")
  ], Player);

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
})();
//# sourceMappingURL=bundle.js.map
