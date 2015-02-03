System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, _prototypeProperties, Game;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      Game = _export("Game", (function () {
        function Game(router) {
          this.parentRouter = router.parent;
          this.antidotes = [{ color: "red" }, { color: "yellow" }, { color: "green" }, { color: "blue" }];
          this.cells = ["red", "red", "green", "blue"];
        }

        _prototypeProperties(Game, {
          inject: {
            value: function inject() {
              return [Router];
            },
            writable: true,
            configurable: true
          }
        });

        return Game;
      })());
    }
  };
});