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

  // src/Main.ts
  var { regClass, property } = Laya;
  var Main = class extends Laya.Script {
    onStart() {
      console.log("Game start");
    }
  };
  __name(Main, "Main");
  Main = __decorateClass([
    regClass("7bad1742-6eed-4d8d-81c0-501dc5bf03d6", "../src/Main.ts")
  ], Main);

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
})();
//# sourceMappingURL=bundle.js.map
