System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, _prototypeProperties, Dashboard;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      Dashboard = _export("Dashboard", (function () {
        function Dashboard(router) {
          this.parentRouter = router.parent;
        }

        _prototypeProperties(Dashboard, {
          inject: {
            value: function inject() {
              return [Router];
            },
            writable: true,
            configurable: true
          }
        });

        return Dashboard;
      })());
    }
  };
});