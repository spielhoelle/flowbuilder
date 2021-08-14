"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es6.array.slice.js");

require("core-js/modules/es6.object.freeze.js");

require("core-js/modules/es6.object.define-properties.js");

require("core-js/modules/es6.object.define-property.js");

require("core-js/modules/es6.object.set-prototype-of.js");

require("core-js/modules/es6.object.get-prototype-of.js");

require("core-js/modules/es6.reflect.construct.js");

require("core-js/modules/es6.object.create.js");

require("core-js/modules/es6.weak-map.js");

require("core-js/modules/es6.string.iterator.js");

require("core-js/modules/es6.object.to-string.js");

require("core-js/modules/es6.array.iterator.js");

require("core-js/modules/web.dom.iterable.js");

require("core-js/modules/es6.object.get-own-property-descriptor.js");

require("core-js/modules/es6.symbol.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomNodeWidget = exports.PortsContainer = exports.Ports = exports.TitleName = exports.Title = exports.Node = exports.Port = void 0;

require("core-js/modules/es6.function.name.js");

require("core-js/modules/es6.array.map.js");

var React = _interopRequireWildcard(require("react"));

var _reactDiagrams = require("@projectstorm/react-diagrams");

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Port = _styled["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\twidth: 16px;\n\t\theight: 16px;\n\t\tz-index: 10;\n\t\tbackground: rgba(0, 0, 0, 0.5);\n\t\tborder-radius: 8px;\n\t\tcursor: pointer;\n\t\t&:hover {\n\t\t\tbackground: rgba(0, 0, 0, 1);\n\t\t}\n\t"])));

exports.Port = Port;

var Node = _styled["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\tbackground-color: ", ";\n\t\tborder-radius: 5px;\n\t\tfont-family: sans-serif;\n\t\tcolor: white;\n\t\tborder: solid 2px black;\n\t\toverflow: visible;\n\t\tfont-size: 11px;\n\t\tborder: solid 2px ", ";\n\t\tmax-width: 120px;\n\t"])), function (p) {
  return p.background;
}, function (p) {
  return p.selected ? 'rgb(0,192,255)' : 'black';
});

exports.Node = Node;

var Title = _styled["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\t\tbackground: rgba(0, 0, 0, 0.3);\n\t\tdisplay: flex;\n\t\twhite-space: normal;\n\t\tjustify-items: center;\n\t"])));

exports.Title = Title;

var TitleName = _styled["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\t\tflex-grow: 1;\n\t\tpadding: 5px 5px;\n\t"])));

exports.TitleName = TitleName;

var Ports = _styled["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n\t\tdisplay: flex;\n\t\tbackground-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));\n\t"])));

exports.Ports = Ports;

var PortsContainer = _styled["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n\t\tflex-grow: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\t&:first-of-type {\n\t\t\tmargin-right: 10px;\n\t\t}\n\t\t&:only-child {\n\t\t\tmargin-right: 0px;\n\t\t}\n\t"])));

exports.PortsContainer = PortsContainer;

var CustomNodeWidget = /*#__PURE__*/function (_DefaultNodeWidget) {
  _inherits(CustomNodeWidget, _DefaultNodeWidget);

  var _super = _createSuper(CustomNodeWidget);

  function CustomNodeWidget() {
    var _this;

    _classCallCheck(this, CustomNodeWidget);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "generatePort", function (port) {
      return /*#__PURE__*/React.createElement(_reactDiagrams.DefaultPortLabel, {
        engine: _this.props.engine,
        port: port,
        key: port.getID()
      });
    });

    return _this;
  }

  _createClass(CustomNodeWidget, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Node, {
        style: {
          opacity: this.props.node.options.extras.freeanswer_type === 'hidden' ? '0.5' : ''
        },
        "data-default-node-name": this.props.node.getOptions().name,
        selected: this.props.node.isSelected(),
        background: this.props.node.getOptions().color
      }, " ", /*#__PURE__*/React.createElement(Title, null, /*#__PURE__*/React.createElement(TitleName, null, this.props.node.getOptions().name)), this.props.node.options.extras.customType === "question" && /*#__PURE__*/React.createElement(TitleName, null, "DE trans: ", this.props.node.options.extras.questiontranslation), this.props.node.options.extras.customType === "question" && /*#__PURE__*/React.createElement(TitleName, null, "Key: ", this.props.node.options.extras.questionidentifier), this.props.node.options.extras.customType === "answer" && this.props.node.options.extras.dropdown && /*#__PURE__*/React.createElement(TitleName, null, "Type: dropdown"), this.props.node.options.extras.customType === "answer" && this.props.node.options.extras.answeridentifier && /*#__PURE__*/React.createElement(TitleName, null, "Key: ", this.props.node.options.extras.answeridentifier), this.props.node.options.extras.customType === "answer" && this.props.node.options.extras.answertranslation && /*#__PURE__*/React.createElement(TitleName, null, "DE trans: ", this.props.node.options.extras.answertranslation), this.props.node.options.extras.customType === "answer" && this.props.node.options.extras.freeanswer && /*#__PURE__*/React.createElement(TitleName, null, "Type: Freeanswer"), this.props.node.options.extras.customType === "answer" && this.props.node.options.extras.freeanswer_type && this.props.node.options.extras.freeanswer && /*#__PURE__*/React.createElement(TitleName, null, "Type: ", this.props.node.options.extras.freeanswer_type), /*#__PURE__*/React.createElement(Ports, null, /*#__PURE__*/React.createElement(PortsContainer, null, _.map(this.props.node.getInPorts(), this.generatePort)), /*#__PURE__*/React.createElement(PortsContainer, null, _.map(this.props.node.getOutPorts(), this.generatePort))));
    }
  }]);

  return CustomNodeWidget;
}(_reactDiagrams.DefaultNodeWidget);

exports.CustomNodeWidget = CustomNodeWidget;