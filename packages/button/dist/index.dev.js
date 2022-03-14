"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("./src/index.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_index["default"].install = function (Vue) {
  Vue.component(_index["default"].name, _index["default"]);
};

var _default = _index["default"];
exports["default"] = _default;