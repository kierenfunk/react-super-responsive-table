"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tableContext = require("../utils/tableContext");

var _allowed = _interopRequireDefault(require("../utils/allowed"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Table = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Table, _React$Component);

  var _super = _createSuper(Table);

  function Table(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Table);
    _this = _super.call(this, props);
    _this.state = {
      headers: {}
    };
    return _this;
  }

  (0, _createClass2["default"])(Table, [{
    key: "render",
    value: function render() {
      var headers = this.state.headers;
      var _this$props = this.props,
          className = _this$props.className,
          forwardedRef = _this$props.forwardedRef;
      var classes = "".concat(className || '', " responsiveTable");
      return /*#__PURE__*/_react["default"].createElement(_tableContext.Provider, {
        value: headers
      }, /*#__PURE__*/_react["default"].createElement("table", (0, _extends2["default"])({
        "data-testid": "table"
      }, (0, _allowed["default"])(this.props), {
        className: classes,
        ref: forwardedRef
      })));
    }
  }]);
  return Table;
}(_react["default"].Component);

Table.propTypes = {
  className: _propTypes["default"].string,
  forwardedRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].instanceOf(global.Element)
  })])
};
Table.defaultProps = {
  className: undefined,
  forwardedRef: undefined
};

var TableForwardRef = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(Table, (0, _extends2["default"])({}, props, {
    forwardedRef: ref
  }));
});

TableForwardRef.displayName = Table.name;
var _default = TableForwardRef;
exports["default"] = _default;