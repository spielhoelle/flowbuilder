"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomNodeWidget = exports.PortsContainer = exports.Ports = exports.TitleName = exports.Title = exports.Node = exports.Port = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var React = _interopRequireWildcard(require("react"));

var _reactDiagrams = require("@projectstorm/react-diagrams");

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Port = _styled.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\twidth: 16px;\n\t\theight: 16px;\n\t\tz-index: 10;\n\t\tbackground: rgba(0, 0, 0, 0.5);\n\t\tborder-radius: 8px;\n\t\tcursor: pointer;\n\t\t&:hover {\n\t\t\tbackground: rgba(0, 0, 0, 1);\n\t\t}\n\t"])));

exports.Port = Port;

const Node = _styled.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\tbackground-color: ", ";\n\t\tborder-radius: 5px;\n\t\tfont-family: sans-serif;\n\t\tcolor: white;\n\t\tborder: solid 2px black;\n\t\toverflow: visible;\n\t\tfont-size: 11px;\n\t\tborder: solid 2px ", ";\n\t\tmax-width: 120px;\n\t"])), p => p.background, p => p.selected ? 'rgb(0,192,255)' : 'black');

exports.Node = Node;

const Title = _styled.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\t\tbackground: rgba(0, 0, 0, 0.3);\n\t\tdisplay: flex;\n\t\twhite-space: normal;\n\t\tjustify-items: center;\n\t"])));

exports.Title = Title;

const TitleName = _styled.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\t\tflex-grow: 1;\n\t\tpadding: 5px 5px;\n\t"])));

exports.TitleName = TitleName;

const Ports = _styled.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n\t\tdisplay: flex;\n\t\tbackground-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));\n\t"])));

exports.Ports = Ports;

const PortsContainer = _styled.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n\t\tflex-grow: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\t&:first-of-type {\n\t\t\tmargin-right: 10px;\n\t\t}\n\t\t&:only-child {\n\t\t\tmargin-right: 0px;\n\t\t}\n\t"])));

exports.PortsContainer = PortsContainer;

class CustomNodeWidget extends _reactDiagrams.DefaultNodeWidget {
  constructor() {
    super(...arguments);

    _defineProperty(this, "generatePort", port => {
      return /*#__PURE__*/React.createElement(_reactDiagrams.DefaultPortLabel, {
        engine: this.props.engine,
        port: port,
        key: port.getID()
      });
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(Node, {
      style: {
        opacity: this.props.node.options.extras.freeanswer_type === 'hidden' ? '0.5' : ''
      },
      "data-default-node-name": this.props.node.getOptions().name,
      selected: this.props.node.isSelected(),
      background: this.props.node.getOptions().color
    }, " ", /*#__PURE__*/React.createElement(Title, null, /*#__PURE__*/React.createElement(TitleName, null, this.props.node.getOptions().name)), this.props.node.options.extras.customType === "question" && /*#__PURE__*/React.createElement(TitleName, null, "DE trans: ", this.props.node.options.extras.questiontranslation), this.props.node.options.extras.customType === "question" && /*#__PURE__*/React.createElement(TitleName, null, "Key: ", this.props.node.options.extras.questionidentifier), this.props.node.options.extras.customType === "answer" && this.props.node.options.extras.dropdown && /*#__PURE__*/React.createElement(TitleName, null, "Type: dropdown"), this.props.node.options.extras.customType === "answer" && this.props.node.options.extras.answeridentifier && /*#__PURE__*/React.createElement(TitleName, null, "Key: ", this.props.node.options.extras.answeridentifier), this.props.node.options.extras.customType === "answer" && this.props.node.options.extras.answertranslation && /*#__PURE__*/React.createElement(TitleName, null, "DE trans: ", this.props.node.options.extras.answertranslation), this.props.node.options.extras.customType === "answer" && this.props.node.options.extras.freeanswer && /*#__PURE__*/React.createElement(TitleName, null, "Type: Freeanswer"), this.props.node.options.extras.customType === "answer" && this.props.node.options.extras.freeanswer_type && this.props.node.options.extras.freeanswer && /*#__PURE__*/React.createElement(TitleName, null, "Type: ", this.props.node.options.extras.freeanswer_type), /*#__PURE__*/React.createElement(Ports, null, /*#__PURE__*/React.createElement(PortsContainer, null, _.map(this.props.node.getInPorts(), this.generatePort)), /*#__PURE__*/React.createElement(PortsContainer, null, _.map(this.props.node.getOutPorts(), this.generatePort))));
  }

}

exports.CustomNodeWidget = CustomNodeWidget;