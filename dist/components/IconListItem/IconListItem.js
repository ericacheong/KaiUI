"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const useFocus_1 = require("../../hooks/useFocus");
require("./IconListItem.scss");
const prefixCls = 'kai-il';
const IconListItem = react_1.default.memo(props => {
    const { id, primary, secondary, icon, iconSrc, focusClass, forwardedRef, index, onFocusChange, linkTo, iconWidth, disabled, className, onClick } = props;
    const handleFocusChange = isNowFocused => {
        if (isNowFocused) {
            onFocusChange(index);
        }
    };
    const isFocused = useFocus_1.useFocus(forwardedRef, handleFocusChange, false) && !disabled;
    const itemCls = prefixCls;
    const iconCls = `${prefixCls}-icon-${isFocused ? 'focused' : 'unfocused'}`;
    const lineCls = `${prefixCls}-line`;
    const primaryCls = `${prefixCls}-primary`;
    const secondaryCls = `${prefixCls}-secondary ${secondary ? '' : 'hidden'}`;
    const disabledCls = disabled ? `${prefixCls}-disabled` : "";
    const focusedCls = isFocused ? `${prefixCls}-focused ${(focusClass || '')}` : '';
    let renderedIcon;
    if (iconSrc) {
        renderedIcon = react_1.default.createElement("img", { src: iconSrc, alt: "", width: iconWidth || 50 });
    }
    else if (react_1.default.isValidElement(icon)) {
        renderedIcon = react_1.default.createElement("span", null, icon);
    }
    else {
        renderedIcon = react_1.default.createElement("span", { className: icon, style: { width: iconWidth } });
    }
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
        else if (linkTo) {
            window.location.href = linkTo;
        }
    };
    return (react_1.default.createElement("div", { tabIndex: !disabled ? index : undefined, className: classnames_1.default(itemCls, disabledCls, (className || ''), focusedCls), ref: forwardedRef, onClick: handleClick },
        react_1.default.createElement("div", { className: iconCls }, renderedIcon),
        react_1.default.createElement("div", { className: lineCls },
            react_1.default.createElement("span", { className: primaryCls }, primary),
            react_1.default.createElement("label", { className: secondaryCls }, secondary))));
});
exports.default = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(IconListItem, Object.assign({ forwardedRef: ref }, props))));
