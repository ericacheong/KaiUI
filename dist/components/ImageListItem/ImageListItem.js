"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useFocus_1 = require("../../hooks/useFocus");
const classnames_1 = __importDefault(require("classnames"));
require("./ImageListItem.scss");
const prefixCls = 'kai-il-img';
const ImageListItem = react_1.default.memo(props => {
    const { id, primary, secondary, icon, iconSrc, selectedClass, isSelected, focusClass, forwardedRef, index, onFocusChange, linkTo, iconWidth, className, counter } = props;
    const handleFocusChange = isNowFocused => {
        if (isNowFocused) {
            onFocusChange(index);
        }
    };
    const handleClick = () => {
        if (linkTo) {
            window.location.href = linkTo;
        }
    };
    const isFocused = useFocus_1.useFocus(forwardedRef, handleFocusChange, false);
    const itemCls = prefixCls;
    const iconCls = `${prefixCls}-icon-${isFocused ? 'focused' : 'unfocused'}`;
    const lineCls = `${prefixCls}-line`;
    const primaryCls = `${prefixCls}-primary`;
    const secondaryCls = `${prefixCls}-secondary ${secondary ? '' : 'hidden'}`;
    const counterCls = `counter`;
    const focusedCls = isFocused ? `${prefixCls}-focused ${(focusClass || '')}` : '';
    const selectedCls = isSelected ? `${prefixCls}-selected ${(selectedClass || '')}` : '';
    const renderedIcon = !iconSrc ?
        react_1.default.createElement("span", { className: icon }) :
        react_1.default.createElement("img", { src: iconSrc, alt: "", width: iconWidth || 50, height: "100%" });
    return (react_1.default.createElement("div", { tabIndex: index, className: classnames_1.default(itemCls, (className || ''), focusedCls, selectedCls), ref: forwardedRef, onClick: handleClick },
        react_1.default.createElement("div", { className: lineCls },
            react_1.default.createElement("span", { className: primaryCls },
                counter ? react_1.default.createElement("span", { className: counterCls }, counter) : null,
                primary),
            react_1.default.createElement("label", { className: secondaryCls }, secondary)),
        react_1.default.createElement("div", { className: iconCls }, renderedIcon)));
});
exports.default = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(ImageListItem, Object.assign({ forwardedRef: ref }, props))));
