"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomPortModel = void 0;

var _reactDiagrams = require("@projectstorm/react-diagrams");

class CustomPortModel extends _reactDiagrams.PortModel {
  constructor(_ref) {
    let {} = _ref;
    super({
      type: 'custom_question_node'
    });
  }

  createLinkModel() {
    return new _reactDiagrams.DefaultLinkModel();
  }

}

exports.CustomPortModel = CustomPortModel;