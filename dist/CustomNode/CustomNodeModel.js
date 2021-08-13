"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomNodeModel = void 0;

var _reactDiagrams = require("@projectstorm/react-diagrams");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CustomNodeModel extends _reactDiagrams.DefaultNodeModel {
  constructor(props) {
    super({
      name: props.name,
      color: props.color,
      extras: props.extras,
      type: 'custom_question_node'
    });
  }

  serialize() {
    return _objectSpread({}, super.serialize());
  }

  deserialize(event, engine) {
    super.deserialize(event, engine);
  }

}

exports.CustomNodeModel = CustomNodeModel;