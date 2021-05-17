"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useFocus_1 = require("../../hooks/useFocus");
require("./TextListItem.scss");
const classnames_1 = __importDefault(require("classnames"));
const prefixCls = 'kai-tl';
const TextListItem = react_1.default.memo(props => {
    const { primary, secondary, tertiary, focusClass, forwardedRef, index, onFocusChange, className } = props;
    const handleFocusChange = isNowFocused => {
        if (isNowFocused) {
            onFocusChange(index);
        }
    };
    const isFocused = useFocus_1.useFocus(forwardedRef, handleFocusChange, false);
    const itemCls = prefixCls;
    const primaryCls = `${prefixCls}-primary`;
    const secondaryCls = `${prefixCls}-secondary ${secondary ? '' : 'hidden'}`;
    const tertiaryCls = `${prefixCls}-tertiary ${tertiary ? '' : 'hidden'}`;
    const focusedCls = isFocused ? `${prefixCls}-focused ${(focusClass || 'defaultFocusCls')}` : '';
    return (react_1.default.createElement("div", { tabIndex: 0, className: classnames_1.default(itemCls, (className || ''), focusedCls), ref: forwardedRef },
        react_1.default.createElement("span", { className: classnames_1.default(primaryCls, (className || '')) }, primary),
        react_1.default.createElement("label", { className: secondaryCls }, secondary),
        react_1.default.createElement("label", { className: tertiaryCls }, tertiary)));
});
exports.default = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(TextListItem, Object.assign({ forwardedRef: ref }, props))));
