"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomPortFactory = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _reactCanvasCore = require("@projectstorm/react-canvas-core");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CustomPortFactory extends _reactCanvasCore.AbstractFactory {
  constructor() {
    super(...arguments);

    _defineProperty(this, "generateModel", function (event) {
      return this.cb(event.initialConfig);
    });
  }

  CustomPortFactory(type, cb) {
    _this = _super.call(this, type) || this;
    this.cb = cb;
  }

}

exports.CustomPortFactory = CustomPortFactory;