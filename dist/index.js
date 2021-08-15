"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es6.reflect.construct.js");

require("core-js/modules/es6.object.create.js");

require("core-js/modules/es6.reflect.get.js");

require("core-js/modules/es6.object.get-own-property-descriptor.js");

require("core-js/modules/es6.object.define-property.js");

require("core-js/modules/es6.symbol.js");

require("core-js/modules/es7.object.get-own-property-descriptors.js");

require("core-js/modules/es6.object.define-properties.js");

require("core-js/modules/es6.array.slice.js");

require("core-js/modules/es6.object.freeze.js");

require("core-js/modules/es6.array.is-array.js");

require("core-js/modules/es6.string.iterator.js");

require("core-js/modules/es6.array.iterator.js");

require("core-js/modules/web.dom.iterable.js");

require("core-js/modules/es6.array.from.js");

require("core-js/modules/es6.weak-map.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.object.set-prototype-of.js");

require("core-js/modules/es6.object.get-prototype-of.js");

require("core-js/modules/es6.array.for-each.js");

require("core-js/modules/es7.object.values.js");

require("core-js/modules/es6.function.name.js");

require("core-js/modules/es7.promise.finally.js");

require("core-js/modules/es6.object.to-string.js");

require("core-js/modules/es6.promise.js");

require("core-js/modules/es6.array.filter.js");

require("core-js/modules/es6.array.find.js");

require("core-js/modules/es6.regexp.split.js");

require("core-js/modules/es6.array.map.js");

require("core-js/modules/es6.string.trim.js");

require("core-js/modules/es6.regexp.replace.js");

require("core-js/modules/es6.string.includes.js");

require("core-js/modules/es7.array.includes.js");

require("core-js/modules/es6.object.keys.js");

require("core-js/modules/es6.array.find-index.js");

var _CustomNodeFactory = require("./CustomNode/CustomNodeFactory");

var _react = _interopRequireWildcard(require("react"));

var _reactDiagrams = _interopRequireWildcard(require("@projectstorm/react-diagrams"));

var _reactCanvasCore = require("@projectstorm/react-canvas-core");

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _CustomNodeModel = require("./CustomNode/CustomNodeModel");

var _CustomPortFactory = require("./CustomNode/CustomPortFactory");

var _CustomPortModel = require("./CustomNode/CustomPortModel");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var engine = (0, _reactDiagrams["default"])({
  registerDefaultDeleteItemsAction: false
});

var StartNodeModel = /*#__PURE__*/function (_DiagramModel) {
  _inherits(StartNodeModel, _DiagramModel);

  var _super = _createSuper(StartNodeModel);

  function StartNodeModel() {
    _classCallCheck(this, StartNodeModel);

    return _super.apply(this, arguments);
  }

  _createClass(StartNodeModel, [{
    key: "serialize",
    value: function serialize() {
      return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(StartNodeModel.prototype), "serialize", this).call(this)), {}, {
        extras: this.extras,
        label: this.label,
        icon: this.icon
      });
    }
  }, {
    key: "deserialize",
    value: function deserialize(event, engine) {
      _get(_getPrototypeOf(StartNodeModel.prototype), "deserialize", this).call(this, event, engine);

      this.extras = event.data.extras;
      this.label = event.data.label;
      this.icon = event.data.icon;
    }
  }]);

  return StartNodeModel;
}(_reactDiagrams.DiagramModel);

var model = new StartNodeModel();
engine.getPortFactories().registerFactory(new _CustomPortFactory.CustomPortFactory('tommy', function (config) {
  return new _CustomPortModel.CustomPortModel(PortModelAlignment.LEFT);
}));
engine.getNodeFactories().registerFactory(new _CustomNodeFactory.CustomNodeFactory());
engine.setModel(model);

var CanvasWrapper = _styled["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  overflow: hidden;\n  position: relative;\n  & > div {\n    height: 100%;\n    width: 100%;\n    background: white;\n  }\n"])));

var Loader = _styled["default"].section(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  opacity: ", ";\n  pointer-events: ", ";\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: white;\n  img {\n    left: 50%;\n    opacity: .7;\n    position: absolute;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    animation: shine 1s alternate infinite;\n    @keyframes shine {\n      0% {\n\n        transform: translate(-50%, -50%) rotate(0deg);\n      }\n      50% {\n\n        transform: translate(-50%, -50%) rotate(400deg);\n      }\n      100% {\n        transform: translate(-50%, -50%) rotate(0deg);\n      }\n    }\n  }\n"])), function (props) {
  return props.loading ? 0.8 : 0;
}, function (props) {
  return props.loading ? "all" : "none";
});

var Pre = _styled["default"].pre(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  white-space: unset;\n  padding: 10px;\n  background-color: white;\n"])));

var colorDropdown = "rgb(170, 182, 1)";
var colorFreeanswer = "rgb(182, 133, 1)";
var colorAnswer = "rgb(255, 204, 1)";
var colorError = "rgb(255,0,0)";
var questioncolor = "rgb(0, 128, 129)";
var availableFields = [];

function QuestionsDiagram(props) {
  var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4, _React$createElement5, _React$createElement6;

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setloading = _useState2[1];

  var emptyForm = {
    "question": "",
    'questionidentifier': "",
    'questiontranslation': "",
    "answer": "",
    "answeridentifier": "",
    "answertranslation": "",
    "freeanswer": "",
    "freeanswer_type": "text",
    "dropdown": ""
  };

  var _useState3 = (0, _react.useState)(emptyForm),
      _useState4 = _slicedToArray(_useState3, 2),
      form = _useState4[0],
      setForm = _useState4[1];

  var formRef = (0, _react.useRef)(form);

  var _useState5 = (0, _react.useState)('Add'),
      _useState6 = _slicedToArray(_useState5, 2),
      button = _useState6[0],
      setbutton = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      nodevisibility = _useState8[0],
      setnodevisibility = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      answersvisiblity = _useState10[0],
      setanswersvisiblity = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      allFlows = _useState12[0],
      setallFlows = _useState12[1];

  var _useState13 = (0, _react.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      answers = _useState14[0],
      setanswers = _useState14[1];

  var _useState15 = (0, _react.useState)(""),
      _useState16 = _slicedToArray(_useState15, 2),
      currentModelId = _useState16[0],
      setmodelState = _useState16[1];

  var _useState17 = (0, _react.useState)([]),
      _useState18 = _slicedToArray(_useState17, 2),
      error = _useState18[0],
      seterror = _useState18[1];

  (0, _react.useEffect)(function () {
    formRef.current = form;
  }, [form]);

  var addEventListeners = function addEventListeners(name) {
    Object.values(model.activeNodeLayer.models).forEach(function (item) {
      item.registerListener({
        eventDidFire: function eventDidFire(e) {
          e.stopPropagation();
          e.isSelected ? setbutton('update') : setbutton('add');

          if (e.isSelected) {
            var formFromClickedNode = {
              "question": item.options.extras.customType === "question" ? item.options.name : "",
              'questionidentifier': item.options.extras.customType === "question" ? item.options.extras.questionidentifier : "",
              'questiontranslation': item.options.extras.customType === "question" ? item.options.extras.questiontranslation : "",
              "answer": item.options.extras.customType === "answer" ? item.options.name : "",
              "answeridentifier": item.options.extras.customType === "answer" ? item.options.extras.answeridentifier : "",
              "answertranslation": item.options.extras.customType === "answer" ? item.options.extras.answertranslation : "",
              "freeanswer": item.options.extras.customType === "answer" ? item.options.extras.freeanswer : "",
              "dropdown": item.options.extras.customType === "answer" ? item.options.extras.dropdown : "",
              "freeanswer_type": item.options.extras.customType === "answer" ? item.options.extras.freeanswer_type : "text",
              "flowname": name
            };
            setForm(_objectSpread(_objectSpread({}, formRef.current), formFromClickedNode));
          } else {
            setForm(_objectSpread(_objectSpread({}, formRef.current), emptyForm));
          }
        }
      });
    });
  };

  (0, _react.useEffect)(function () {
    fetch(props.getEndpoint, {
      headers: {
        "content-type": "application/json"
      }
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      if (res.payload.questions.length > 0) {
        availableFields = res.payload.hb_fields;
        setallFlows(res.payload.questions);
        setanswers(res.payload.answers);
        var initialModel = res.payload.questions[0];

        if (initialModel.model) {
          model.deserializeModel(initialModel.model, engine);
        }

        setForm(_objectSpread(_objectSpread({}, form), {}, {
          flowname: initialModel.name,
          active: initialModel.active,
          renderselector: initialModel.renderselector,
          sendaltemail: initialModel.sendaltemail
        }));
        setmodelState(initialModel._id);
        addEventListeners(initialModel.name);
        engine.setModel(model);
      }
    })["catch"](function (err) {
      console.log(err);
    })["finally"](function () {
      setloading(false);
    });
  }, []);

  var addQuestion = function addQuestion(e) {
    e.preventDefault();
    var selectedNodes = Object.values(engine.model.activeNodeLayer.models).filter(function (i) {
      return i.options.selected;
    });
    var node;

    if (selectedNodes.length === 1) {
      node = selectedNodes[0];
      node.options.name = form['question'];
      node.options.extras.questionidentifier = form['questionidentifier'];
      node.options.extras.questiontranslation = form['questiontranslation'];
    } else {
      node = new _CustomNodeModel.CustomNodeModel({
        name: "".concat(e.target.elements.addquestion.value),
        color: e.target.elements.addquestion.dataset.color,
        extras: {
          customType: e.target.elements.addquestion.dataset.type,
          questionidentifier: e.target.elements.addquestionidentifier.value,
          questiontranslation: e.target.elements.addquestiontranslation.value
        }
      });
      node.setPosition(engine.canvas.offsetWidth / 2, engine.canvas.offsetHeight / 2);
      node.addInPort('In');
      node.addOutPort('Out');
    }

    model.addAll(node);
    engine.setModel(model);
    parseAllNodesForHubspotFields();
  };

  var addAnswer = function addAnswer(e) {
    e.preventDefault();
    var selectedNodes = Object.values(engine.model.activeNodeLayer.models).filter(function (i) {
      return i.options.selected;
    });
    var node;

    if (selectedNodes.length === 1) {
      node = selectedNodes[0];
      node.options.name = form['answer'];
      node.options.extras.dropdown = form['dropdown'];
      node.options.extras.freeanswer = form['freeanswer'];
      node.options.extras.answeridentifier = form['answeridentifier'];
      node.options.extras.answertranslation = form['answertranslation'];
      node.options.extras.freeanswer_type = form['freeanswer_type'];
    } else {
      node = new _CustomNodeModel.CustomNodeModel({
        name: e.target.elements.answer.value,
        color: !!e.target.elements.freeanswer && !!e.target.elements.freeanswer.checked ? colorFreeanswer : !!e.target.elements.dropdown.checked ? colorDropdown : e.target.elements.answer.dataset.color,
        extras: {
          customType: e.target.elements.answer.dataset.type,
          freeanswer: !!e.target.elements.freeanswer && !!e.target.elements.freeanswer.checked,
          freeanswer_type: !!e.target.elements.freeanswer_type && !!e.target.elements.freeanswer_type.selectedOptions[0].value,
          dropdown: !!e.target.elements.dropdown && !!e.target.elements.dropdown.checked,
          answeridentifier: e.target.elements.answeridentifier.value,
          answertranslation: e.target.elements.answertranslation.value
        }
      });
      node.setPosition(engine.canvas.offsetWidth / 2, engine.canvas.offsetHeight / 2);
      node.addInPort('In');
      node.addOutPort('Out');
    }

    model.addAll(node);
    engine.setModel(model);
    parseAllNodesForHubspotFields();
  };

  var checkDropDown = function checkDropDown(availableFields, aI) {
    var subHbFields = availableFields.find(function (aF) {
      return aF.name === aI.options.extras.answeridentifier;
    });
    var dropdownAnswers = aI.options.name.split(":").reverse()[0];
    var rawAnswers = dropdownAnswers.split(',').map(function (a) {
      return a.trim();
    });
    var rawAnswersWithoutLabels = rawAnswers.map(function (a) {
      return a.replace(/\(.*\)/, '').trim();
    });
    return rawAnswersWithoutLabels.filter(function (rA) {
      return !subHbFields.options.map(function (s) {
        return s.value;
      }).includes(rA);
    });
  };

  var checkIfQuestionsMatchWithAnswersAndSyncWithHubspot = function checkIfQuestionsMatchWithAnswersAndSyncWithHubspot(question) {
    var errors = [];

    if (Object.values(model.layers[1].models).length > 0) {
      var hbField = availableFields.find(function (a) {
        return a.name === question.options.extras.questionidentifier;
      });
      var As = Object.values(model.layers[1].models).filter(function (m) {
        return m.options.extras.customType === "answer";
      });

      var _answers = As.filter(function (a) {
        return Object.values(a.ports.In.links)[0] && Object.keys(question.ports.Out.links).includes(Object.values(a.ports.In.links)[0].options.id);
      });

      if (_answers.filter(function (a) {
        return !a.options.extras.freeanswer;
      }).length === 0) {
        question.options.color = questioncolor;
      }

      _answers.map(function (answer) {
        if (answer.options.extras.freeanswer) {
          answer.options.color = colorFreeanswer;
        } else if (answer.options.extras.dropdown) {
          var notExistingAnswers = checkDropDown(availableFields, answer);

          if (notExistingAnswers.length == 0) {
            answer.options.color = colorDropdown;
          } else {
            answer.options.color = colorError;
            errors.push("'".concat(notExistingAnswers.join(", "), "' doesnt exist on '").concat(answer.options.name, "'"));
          }
        } else {
          var _notExistingAnswers = hbField.options.filter(function (field) {
            return field.value.toLowerCase() == answer.options.extras.answeridentifier.toLowerCase();
          });

          if (_notExistingAnswers.length === 0 && answer.options.extras.freeanswer_type !== "hidden") {
            answer.options.color = colorError;
            question.options.color = colorError;
            errors.push("'".concat(answer.options.name, "' doesnt exist on '").concat(question.options.name, "'"));
          } else {
            answer.options.color = colorAnswer;
            question.options.color = questioncolor;
          }
        }
      });
    }

    return errors;
  };

  var parseAllNodesForHubspotFields = function parseAllNodesForHubspotFields() {
    var nodes = Object.values(model.layers.find(function (layer) {
      return layer.options.type === "diagram-nodes";
    }).models);
    var errorNodes = [];
    var questions = nodes.filter(function (n) {
      return n.options.extras.customType !== "answer";
    });

    if (props.checkWithHubspot) {
      questions.map(function (q) {
        errorNodes = [].concat(_toConsumableArray(errorNodes), _toConsumableArray(checkIfQuestionsMatchWithAnswersAndSyncWithHubspot(q)));
      });
    }

    seterror(errorNodes);

    if (errorNodes.length === 0) {
      seterror(undefined);
    }
  };

  var cloneSelected = function cloneSelected() {
    setloading(true);
    var itemMap = {};
    model.getSelectedEntities().filter(function (m) {
      return m.parent.options.type === "diagram-nodes";
    }).map(function (item) {
      var newItem = item.clone(itemMap);
      model.addNode(newItem);
      newItem.setPosition(newItem.getX() + 20, newItem.getY() + 20);
      engine.setModel(model);
      item.setSelected(!1);
      setloading(false);
    });
  };

  engine.getActionEventBus().registerAction(new _reactCanvasCore.DeleteItemsAction({
    keyCodes: [8],
    modifiers: {
      shiftKey: true
    }
  }));
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-100 d-flex flex-column"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "Contactforms", /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-secondary badge mx-2",
    type: "button",
    "data-container": "body",
    "data-toggle": "popover",
    "data-trigger": "hover",
    "data-placement": "top",
    "data-content": "Link questions to one or multiple answers. If a question is followed by a freeanswer, it should be the only anwer of that question",
    "data-original-title": "",
    title: ""
  }, " ?"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-outline-secondary text-left mr-2",
    type: "button",
    onClick: function onClick(e) {
      setanswersvisiblity(!answersvisiblity);
    }
  }, "Show answers"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-outline-secondary mr-2",
    onClick: function onClick(e) {
      if (confirm("This will create a new empty flow in the database. Sure?")) {
        if (form.flowname) {
          setloading(true);
          var newModel = new StartNodeModel();
          fetch(props.postEndpoint, {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({
              _id: "",
              name: "New Flow",
              model: newModel.serialize()
            })
          }).then(function (res) {
            return res.json();
          }).then(function (res) {
            if (res.error) {
              seterror([].concat(_toConsumableArray(error), [res.error]));
            } else {
              setallFlows([].concat(_toConsumableArray(allFlows), [res.payload]));
              setForm(_objectSpread(_objectSpread({}, formRef.current), {}, {
                flowname: res.payload.name,
                active: false,
                sendaltemail: false,
                renderselector: ""
              }));
              setmodelState(res.payload._id);
              model.deserializeModel(res.payload.model, engine);
              engine.setModel(newModel);
            }

            setloading(false);
          });
          seterror(error.splice(error.findIndex(function (e) {
            return e === "Name must be provided";
          }), 1));
        } else {
          seterror([].concat(_toConsumableArray(error), ["Name must be provided"]));
        }
      }
    }
  }, "Add new Flow"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-secondary mr-2 word-break-break-all",
    onClick: function onClick(e) {
      setnodevisibility(!nodevisibility);
    }
  }, !nodevisibility ? "Configure current flow " : "Hide nodespanel", " ")), /*#__PURE__*/_react["default"].createElement("div", {
    className: !answersvisiblity ? "d-none" : ""
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card"
  }, answers.map(function (a, i) {
    return /*#__PURE__*/_react["default"].createElement(Pre, {
      key: i,
      className: ""
    }, JSON.stringify(a.answers));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: !nodevisibility ? "d-none" : ""
  }, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: addQuestion
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-row align-items-end"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-auto flex-column d-flex"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "flowselector"
  }, "flowselector"), /*#__PURE__*/_react["default"].createElement("select", {
    id: "flowselector",
    className: "custom-select w-auto mr-2",
    value: currentModelId,
    onChange: function onChange(e) {
      var theModelToSet = allFlows.find(function (f) {
        return f._id === e.target.selectedOptions[0].value;
      });

      if (theModelToSet.model) {
        model.deserializeModel(theModelToSet.model, engine);
        setForm(_objectSpread(_objectSpread({}, form), {}, {
          flowname: theModelToSet.name,
          active: theModelToSet.active,
          renderselector: theModelToSet.renderselector,
          sendaltemail: theModelToSet.sendaltemail
        }));
        setmodelState(theModelToSet._id);
        engine.setModel(model);
      } else {
        var newModel = new StartNodeModel();
        model.deserializeModel(newModel, engine);
        engine.setModel(newModel);
      }

      addEventListeners(theModelToSet.name);
    }
  }, /*#__PURE__*/_react["default"].createElement("option", {
    disabled: true
  }, "select flow..."), allFlows.map(function (f, i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: i,
      value: f._id
    }, f.name);
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-auto"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "flowname"
  }, "Flow name"), /*#__PURE__*/_react["default"].createElement("input", (_React$createElement = {
    className: "form-control",
    id: "flowname",
    name: "flowname",
    value: form['formname']
  }, _defineProperty(_React$createElement, "value", form.flowname), _defineProperty(_React$createElement, "onChange", function onChange(e) {
    e.stopPropagation();
    setForm(_objectSpread(_objectSpread({}, form), {}, _defineProperty({}, e.target.name, e.target.value)));
  }), _React$createElement))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-auto "
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "renderselector"
  }, "Flow renderselector"), /*#__PURE__*/_react["default"].createElement("input", (_React$createElement2 = {
    className: "form-control",
    id: "renderselector",
    name: "renderselector",
    value: form['formname']
  }, _defineProperty(_React$createElement2, "value", form.renderselector), _defineProperty(_React$createElement2, "onChange", function onChange(e) {
    e.stopPropagation();
    setForm(_objectSpread(_objectSpread({}, form), {}, _defineProperty({}, e.target.name, e.target.value)));
  }), _React$createElement2))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-auto px-3 align-items-center d-flex"
  }, /*#__PURE__*/_react["default"].createElement("input", (_React$createElement3 = {
    checked: form['active'],
    name: "active",
    type: "checkbox"
  }, _defineProperty(_React$createElement3, "name", "active"), _defineProperty(_React$createElement3, "className", "form-check-input"), _defineProperty(_React$createElement3, "onChange", function onChange(e) {
    e.stopPropagation();
    setForm(_objectSpread(_objectSpread({}, form), {}, _defineProperty({}, e.target.name, e.target.checked)));
  }), _defineProperty(_React$createElement3, "style", {
    borderColor: colorAnswer,
    borderStyle: "solid"
  }), _defineProperty(_React$createElement3, "id", "active"), _React$createElement3)), /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-check-label",
    htmlFor: "active"
  }, "Active?")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-auto px-3 align-items-center d-flex"
  }, /*#__PURE__*/_react["default"].createElement("input", (_React$createElement4 = {
    checked: form['sendaltemail'],
    name: "sendaltemail",
    type: "checkbox"
  }, _defineProperty(_React$createElement4, "name", "sendaltemail"), _defineProperty(_React$createElement4, "className", "form-check-input"), _defineProperty(_React$createElement4, "onChange", function onChange(e) {
    e.stopPropagation();
    setForm(_objectSpread(_objectSpread({}, form), {}, _defineProperty({}, e.target.name, e.target.checked)));
  }), _defineProperty(_React$createElement4, "style", {
    borderColor: colorAnswer,
    borderStyle: "solid"
  }), _defineProperty(_React$createElement4, "id", "sendaltemail"), _React$createElement4)), /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-check-label",
    htmlFor: "sendaltemail"
  }, "Send alt email?"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: " row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "addquestion"
  }, "Add Question"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-control",
    name: "question",
    type: "text",
    value: form['question'],
    onChange: function onChange(e) {
      e.stopPropagation();
      setForm(_objectSpread(_objectSpread({}, form), {}, _defineProperty({}, e.target.name, e.target.value)));
    },
    "data-type": "question",
    "data-color": questioncolor,
    style: {
      borderColor: {
        questioncolor: questioncolor
      },
      borderStyle: "solid"
    },
    id: "addquestion",
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "addquestiontranslation"
  }, "DE Questiontranslation"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-control",
    name: "questiontranslation",
    type: "text",
    value: form['questiontranslation'],
    onChange: function onChange(e) {
      e.stopPropagation();
      setForm(_objectSpread(_objectSpread({}, form), {}, _defineProperty({}, e.target.name, e.target.value)));
    },
    "data-type": "questiontranslation",
    "data-color": questioncolor,
    style: {
      borderColor: {
        questioncolor: questioncolor
      },
      borderStyle: "solid"
    },
    id: "addquestiontranslation",
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex align-items-end"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "addquestionidentifier"
  }, "Questionidentifier"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-control",
    name: "questionidentifier",
    type: "text",
    value: form['questionidentifier'],
    onChange: function onChange(e) {
      e.stopPropagation();
      setForm(_objectSpread(_objectSpread({}, form), {}, _defineProperty({}, e.target.name, e.target.value)));
    },
    "data-type": "questionidentifier",
    "data-color": questioncolor,
    style: {
      borderColor: {
        questioncolor: questioncolor
      },
      borderStyle: "solid"
    },
    id: "addquestionidentifier",
    required: true
  })), /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-primary ml-1",
    type: "submit"
  }, button))))), /*#__PURE__*/_react["default"].createElement("form", {
    className: "",
    onSubmit: addAnswer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: " row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "addanswer"
  }, "Add Answer"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-control w-99",
    name: "answer",
    value: form['answer'],
    onChange: function onChange(e) {
      e.stopPropagation();
      setForm(_objectSpread(_objectSpread({}, form), {}, _defineProperty({}, e.target.name, e.target.value)));
    },
    type: "text",
    "data-type": "answer",
    "data-color": "rgb(256, 204, 1)",
    style: {
      borderColor: "rgb(255, 204, 1)",
      borderStyle: "solid"
    },
    id: "addanswer"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "answertranslation"
  }, "Answertranslation"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-control w-99",
    name: "answertranslation",
    type: "text",
    value: form['answertranslation'],
    onChange: function onChange(e) {
      e.stopPropagation();
      setForm(_objectSpread(_objectSpread({}, form), {}, _defineProperty({}, e.target.name, e.target.value)));
    },
    "data-type": "answertranslation",
    "data-color": questioncolor,
    style: {
      borderColor: "rgb(256, 204, 1)",
      borderStyle: "solid"
    },
    id: "answertranslation",
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex align-items-end flex-wrap"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-grow-1"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "answeridentifier"
  }, "Answeridentifier"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-control ",
    name: "answeridentifier",
    type: "text",
    value: form['answeridentifier'],
    onChange: function onChange(e) {
      e.stopPropagation();
      setForm(_objectSpread(_objectSpread({}, form), {}, _defineProperty({}, e.target.name, e.target.value)));
    },
    "data-type": "answeridentifier",
    "data-color": questioncolor,
    style: {
      borderColor: "rgb(255, 204, 1)",
      borderStyle: "solid"
    },
    id: "answeridentifier",
    required: true
  })), /*#__PURE__*/_react["default"].createElement("select", {
    id: "type",
    className: "custom-select w-auto mr-2",
    value: form['freeanswer_type'],
    onChange: function onChange(e) {
      setForm(_objectSpread(_objectSpread({}, form), {}, {
        freeanswer_type: e.target.selectedOptions[0].value,
        dropdown: false,
        freeanswer: true
      }));
    }
  }, /*#__PURE__*/_react["default"].createElement("option", {
    disabled: true
  }, "select type"), ["text", "email", "number", "tel", "textarea", "hidden"].map(function (f, i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: i,
      value: f
    }, f);
  })), /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-primary ml-1",
    type: "submit"
  }, button)))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex w-100 mt-2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-check d-flex align-items-center mr-3 mb-3"
  }, /*#__PURE__*/_react["default"].createElement("input", (_React$createElement5 = {
    checked: form['freeanswer'],
    name: "freeanswer",
    type: "checkbox"
  }, _defineProperty(_React$createElement5, "name", "freeanswer"), _defineProperty(_React$createElement5, "className", "form-check-input"), _defineProperty(_React$createElement5, "onChange", function onChange(e) {
    var _objectSpread12;

    e.stopPropagation();
    setForm(_objectSpread(_objectSpread({}, form), {}, (_objectSpread12 = {}, _defineProperty(_objectSpread12, e.target.name, e.target.checked), _defineProperty(_objectSpread12, "dropdown", false), _objectSpread12)));
  }), _defineProperty(_React$createElement5, "style", {
    borderColor: "rgb(255, 204, 1)",
    borderStyle: "solid"
  }), _defineProperty(_React$createElement5, "id", "freeanswer"), _React$createElement5)), /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-check-label",
    htmlFor: "freeanswer"
  }, "Free answer"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-secondary badge ml-2",
    type: "button",
    "data-container": "body",
    "data-toggle": "popover",
    "data-trigger": "hover",
    "data-placement": "top",
    "data-content": "If checked you can split by a ':' between the fieldlabel and the placeholder. Eg: fieldlabel:placeholder or Phone:+490987654321",
    "data-original-title": "",
    title: ""
  }, " ? ")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group form-check d-flex align-items-center mr-3 mb-3"
  }, /*#__PURE__*/_react["default"].createElement("input", (_React$createElement6 = {
    checked: form['dropdown'],
    name: "dropdown",
    type: "checkbox"
  }, _defineProperty(_React$createElement6, "name", "dropdown"), _defineProperty(_React$createElement6, "className", "form-check-input"), _defineProperty(_React$createElement6, "onChange", function onChange(e) {
    var _objectSpread13;

    e.stopPropagation();
    setForm(_objectSpread(_objectSpread({}, form), {}, (_objectSpread13 = {}, _defineProperty(_objectSpread13, e.target.name, e.target.checked), _defineProperty(_objectSpread13, "freeanswer", false), _objectSpread13)));
  }), _defineProperty(_React$createElement6, "style", {
    borderColor: "rgb(255, 204, 1)",
    borderStyle: "solid"
  }), _defineProperty(_React$createElement6, "id", "dropdown"), _React$createElement6)), /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-check-label",
    htmlFor: "dropdown"
  }, "Is dropdown"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-secondary badge ml-2",
    type: "button",
    "data-container": "body",
    "data-toggle": "popover",
    "data-trigger": "hover",
    "data-placement": "top",
    "data-content": "If checked, the name field gets more complex. Use a label followed by semicolon and then a comma seperated list to define the dropdown and its items. You can provide a optional dropdown label also with putting it in ().Eg: 'Whats your language level: A1(Beginner), A2, B1, B2(Mother tongue)' - or: 'State: Berlin(Haupstadt), Bayern'.",
    "data-original-title": "",
    title: ""
  }, " ? ")))), /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-primary btn-sm mr-2",
    disabled: loading,
    onClick: function onClick() {
      cloneSelected();
    }
  }, loading ? "Loading" : "Clone selected"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-success btn-sm",
    disabled: loading,
    onClick: function onClick() {
      setloading(true);
      parseAllNodesForHubspotFields();
      fetch(props.updateEndpoint, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          _id: currentModelId,
          name: form['flowname'],
          model: model.serialize(),
          active: form.active,
          sendaltemail: form.sendaltemail,
          renderselector: form.renderselector
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        allFlows[allFlows.findIndex(function (f) {
          return f._id === res.payload._id;
        })] = res.payload;
        setloading(false);
      })["catch"](function (e) {
        setloading(false);
      });
    }
  }, loading ? "Loading" : "Save")), error && error.length > 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: " m-0 mr-3 alert alert-danger"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "close",
    onClick: function onClick(e) {
      seterror([]);
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")), "Errors: ", error.map(function (e, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i
    }, e);
  })), /*#__PURE__*/_react["default"].createElement(CanvasWrapper, null, /*#__PURE__*/_react["default"].createElement(_reactCanvasCore.CanvasWidget, {
    id: "canvas",
    engine: engine
  }), /*#__PURE__*/_react["default"].createElement(Loader, {
    loading: loading
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/media/dci.svg"
  }))));
}

var _default = QuestionsDiagram;
exports["default"] = _default;