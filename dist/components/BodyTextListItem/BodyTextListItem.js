"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useFocus_1 = require("../../hooks/useFocus");
const colors_scss_1 = __importDefault(require("../../theme/colors.scss"));
require("./BodyTextListItem.scss");
const prefixCls = 'kai-btl';
const BodyTextListItem = react_1.default.memo(props => {
    const { header, body, focusColor, forwardedRef, index, onFocusChange } = props;
    const handleFocusChange = isNowFocused => {
        if (isNowFocused) {
            onFocusChange(index);
        }
    };
    const isFocused = useFocus_1.useFocus(forwardedRef, handleFocusChange, false);
    const itemCls = prefixCls;
    const headerCls = `${prefixCls}-header`;
    const bodyCls = `${prefixCls}-body ${body ? '' : 'hidden'}`;
    return (react_1.default.createElement("div", { tabIndex: 0, className: itemCls, style: { backgroundColor: isFocused ? (focusColor || colors_scss_1.default.defaultFocusColor) : colors_scss_1.default.white }, ref: forwardedRef },
        react_1.default.createElement("span", { className: headerCls }, header),
        react_1.default.createElement("label", { className: bodyCls }, body)));
});
exports.default = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(BodyTextListItem, Object.assign({ forwardedRef: ref }, props))));
