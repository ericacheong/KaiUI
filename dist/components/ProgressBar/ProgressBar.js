"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const colors_scss_1 = __importDefault(require("../../theme/colors.scss"));
const useFocus_1 = require("../../hooks/useFocus");
require("./ProgressBar.scss");
const prefixCls = 'kai-pbar';
const ProgressBar = react_1.default.memo(props => {
    const { header, type, percentage, focusColor, forwardedRef, index, onFocusChange } = props;
    const handleFocusChange = isNowFocused => {
        if (isNowFocused && onFocusChange) {
            onFocusChange(index || 0);
        }
    };
    const isFocused = useFocus_1.useFocus(forwardedRef, handleFocusChange, false);
    const lineCls = `${prefixCls}-line`;
    const barWrapperCls = `${prefixCls}-bar-wrapper`;
    const leftFillerCls = `${prefixCls}-left-filler-${isFocused ? 'focused' : 'unfocused'}`;
    const rightFillerCls = `${prefixCls}-right-filler-${type}-${isFocused ? 'focused' : 'unfocused'}`;
    return (react_1.default.createElement("div", { tabIndex: 0, className: prefixCls, style: { backgroundColor: isFocused ? (focusColor || colors_scss_1.default.defaultFocusColor) : colors_scss_1.default.white }, ref: forwardedRef },
        react_1.default.createElement("span", { className: lineCls }, header),
        react_1.default.createElement("div", { className: barWrapperCls },
            react_1.default.createElement("div", { className: leftFillerCls, style: {
                    width: `${percentage}%`,
                    backgroundColor: isFocused ? colors_scss_1.default.grayscale20 : (focusColor || colors_scss_1.default.defaultFocusColor),
                } }),
            react_1.default.createElement("div", { className: rightFillerCls, style: { width: `${100 - percentage}%` } }))));
});
exports.default = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(ProgressBar, Object.assign({ forwardedRef: ref }, props))));
