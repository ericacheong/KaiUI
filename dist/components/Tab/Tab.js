"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const colors_scss_1 = __importDefault(require("../../theme/colors.scss"));
require("./Tab.scss");
const prefixCls = 'kai-tab';
const Tab = react_1.default.memo(props => {
    const { index, label, onTabChange, isActive, focusColor, forwardedRef } = props;
    const actPrefixCls = `${prefixCls}${isActive ? '-active' : '-inactive'}`;
    const handleClick = () => onTabChange(index);
    const style = { '--tab-underline-color': (focusColor || colors_scss_1.default.defaultFocusColor) };
    return (react_1.default.createElement("div", { onClick: handleClick, className: actPrefixCls, style: style, ref: forwardedRef },
        react_1.default.createElement("div", { className: `${actPrefixCls}-label` }, label)));
});
exports.default = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(Tab, Object.assign({ forwardedRef: ref }, props))));
