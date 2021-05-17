"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useFocus_1 = require("../../hooks/useFocus");
require("./ArrowListItem.scss");
const classnames_1 = __importDefault(require("classnames"));
const withSoftKeyManager_1 = require("../SoftKey/withSoftKeyManager");
const prefixCls = 'kai-al';
const ArrowListItem = react_1.default.memo(props => {
    const { primary, secondary, focusClass, forwardedRef, index, onFocusChange, onClick, softKeyManager } = props;
    const handleFocusChange = isNowFocused => {
        if (isNowFocused) {
            if (onFocusChange) {
                onFocusChange(index);
            }
            if (onClick) {
                softKeyManager.setCenterCallback(onClick);
            }
        }
    };
    const isFocused = useFocus_1.useFocus(forwardedRef, handleFocusChange, false);
    const itemCls = prefixCls;
    const iconCls = `${prefixCls}-icon-${isFocused ? 'focused' : 'unfocused'}`;
    const lineCls = `${prefixCls}-line`;
    const primaryCls = `${prefixCls}-primary`;
    const secondaryCls = `${prefixCls}-secondary ${secondary ? '' : 'hidden'}`;
    const focusedCls = isFocused ? `${prefixCls}-focused ${(focusClass || 'defaultFocusCls')}` : '';
    return (react_1.default.createElement("div", { tabIndex: 0, className: classnames_1.default(itemCls, focusedCls), ref: forwardedRef, onClick: onClick },
        react_1.default.createElement("div", { className: lineCls },
            react_1.default.createElement("span", { className: primaryCls }, primary),
            react_1.default.createElement("label", { className: secondaryCls }, secondary)),
        react_1.default.createElement("div", { className: iconCls },
            react_1.default.createElement("span", { className: "kai-icon-arrow" }))));
});
exports.default = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(withSoftKeyManager_1.SoftKeyConsumer, null, context => (react_1.default.createElement(ArrowListItem, Object.assign({ softKeyManager: context, forwardedRef: ref }, props))))));
