System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, Cell;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      Cell = _export("Cell", (function () {
        function Cell(element) {
          this.element = element;
          this.y = "test";
        }

        _prototypeProperties(Cell, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("cell").withProperty("color").withProperty("x").withProperty("y").withProperty("cellType");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          cellTypeChanged: {
            value: function cellTypeChanged(newValue, oldValue) {
              var child = this.element.querySelector(".cell");

              if (child) {
                if (oldValue) {
                  child.classList.remove(oldValue);
                }

                if (newValue) {
                  child.classList.add(newValue);
                }
              }
            },
            writable: true,
            configurable: true
          },
          colorChanged: {
            value: function colorChanged(newValue, oldValue) {
              var child = this.element.querySelector(".cell");

              if (child) {
                if (oldValue) {
                  child.classList.remove(oldValue);
                }

                if (newValue) {
                  child.classList.add(newValue);
                }
              }
            },
            writable: true,
            configurable: true
          }
        });

        return Cell;
      })());
    }
  };
});