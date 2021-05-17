"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const colors_scss_1 = __importDefault(require("../../theme/colors.scss"));
const withSoftKeyManager_1 = require("../SoftKey/withSoftKeyManager");
require("./Slider.scss");
const prefixCls = 'kai-slider';
const Slider = react_1.default.memo(props => {
    const { header, initialValue, maxValue, minValue, stepSize, focusColor, forwardedRef, index, onFocusChange, softKeyManager, softKeyLeftText, softKeyRightText, } = props;
    const [isFocused, setFocused] = react_1.useState(false);
    const [sliderValue, setSliderValue] = react_1.useState(initialValue);
    const lineCls = `${prefixCls}-line`;
    const headerCls = `${prefixCls}-header`;
    const trackerCls = `${prefixCls}-tracker`;
    const sliderWrapperCls = `${prefixCls}-slider-wrapper`;
    const handleFocusChange = react_1.useCallback(isNowFocused => {
        setFocused(isNowFocused);
        if (isNowFocused) {
            softKeyManager.setSoftKeyTexts({
                leftText: softKeyLeftText,
                rightText: softKeyRightText,
            });
            softKeyManager.setSoftKeyCallbacks({
                leftCallback: handleDecrementSlider,
                rightCallback: handleIncrementSlider,
            });
            onFocusChange(index);
        }
        else {
            softKeyManager.unregisterSoftKeys();
        }
    }, [index, onFocusChange, softKeyManager, softKeyLeftText, softKeyRightText]);
    const handleDecrementSlider = () => setSliderValue(prevVal => prevVal - 1);
    const handleIncrementSlider = () => setSliderValue(prevVal => prevVal + 1);
    const handleSliderChange = event => setSliderValue(event.target.value);
    const style = {
        '--min': minValue,
        '--max': maxValue,
        '--val': sliderValue,
        '--slider-left-filler-color': isFocused ? colors_scss_1.default.white : (focusColor || colors_scss_1.default.defaultFocusColor),
        '--slider-thumb-border-color': isFocused
            ? (focusColor || colors_scss_1.default.defaultFocusColor)
            : colors_scss_1.default.white,
    };
    return (react_1.default.createElement("div", { tabIndex: 0, className: prefixCls, style: { backgroundColor: isFocused ? (focusColor || colors_scss_1.default.defaultFocusColor) : colors_scss_1.default.white }, ref: forwardedRef, onFocus: () => handleFocusChange(true), onBlur: () => handleFocusChange(false) },
        react_1.default.createElement("div", { className: lineCls },
            react_1.default.createElement("span", { className: headerCls }, header),
            react_1.default.createElement("span", { className: trackerCls }, `${sliderValue}/${maxValue}`)),
        react_1.default.createElement("div", { className: sliderWrapperCls },
            react_1.default.createElement("input", { ref: forwardedRef, type: "range", min: minValue, max: maxValue, step: stepSize, value: sliderValue, onChange: handleSliderChange, style: style }))));
});
exports.default = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(withSoftKeyManager_1.SoftKeyConsumer, null, context => (react_1.default.createElement(Slider, Object.assign({ softKeyManager: context, forwardedRef: ref }, props))))));
