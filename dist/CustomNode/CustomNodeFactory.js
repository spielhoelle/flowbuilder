"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomNodeFactory = void 0;

var _CustomNodeWidget = require("./CustomNodeWidget");

var _CustomNodeModel = require("./CustomNodeModel");

var React = _interopRequireWildcard(require("react"));

var _reactCanvasCore = require("@projectstorm/react-canvas-core");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class CustomNodeFactory extends _reactCanvasCore.AbstractReactFactory {
  constructor(props) {
    super('custom_question_node');
  }

  generateReactWidget(event) {
    return /*#__PURE__*/React.createElement(_CustomNodeWidget.CustomNodeWidget, {
      engine: this.engine,
      size: 50,
      node: event.model
    });
  }

  generateModel(event) {
    return new _CustomNodeModel.CustomNodeModel(event.initialConfig);
  }

}

exports.CustomNodeFactory = CustomNodeFactory;