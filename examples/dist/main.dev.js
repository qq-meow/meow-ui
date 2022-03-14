"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _packages = _interopRequireDefault(require("../packages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;
console.log(_packages["default"], 333333333);

_vue["default"].use(_packages["default"]);

new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');