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
const useFocus_1 = require("../../hooks/useFocus");
require("./Button.scss");
const prefixCls = 'kai-button';
const Button = react_1.default.memo(props => {
    const { text, icon, iconSrc, iconSide, onClick, focusColor, form, formAction, formEncType, formMethod, formNoValidate, formTarget, name, type, onFocusChange, index, forwardedRef } = props;
    const handleFocusChange = react_1.useCallback(isNowFocused => {
        if (isNowFocused) {
            onFocusChange(index);
        }
    }, [index, onFocusChange, onClick]);
    const isFocused = useFocus_1.useFocus(forwardedRef, handleFocusChange, false);
    const buttonCls = prefixCls;
    const inputCls = `${prefixCls}-input`;
    const lineCls = `${prefixCls}-line ${iconSide === 'left' ? 'right' : iconSide === 'right' ? 'left' : ''}`;
    const textCls = `${prefixCls}-text`;
    const iconCls = `${prefixCls}-icon-${isFocused ? 'focused' : 'unfocused'}`;
    const renderedIcon = !!iconSrc ?
        react_1.default.createElement("img", { src: iconSrc, alt: "" }) :
        react_1.default.createElement("span", { className: icon });
    const iconComp = (react_1.default.createElement("div", { className: iconCls }, renderedIcon));
    return (react_1.default.createElement("div", { className: buttonCls },
        react_1.default.createElement("button", { tabIndex: 0, className: inputCls, style: { backgroundColor: isFocused ? (focusColor || colors_scss_1.default.defaultFocusColor) : colors_scss_1.default.grayscale20 }, form: form, formAction: formAction, formEncType: formEncType, formMethod: formMethod, formNoValidate: formNoValidate, formTarget: formTarget, name: name, type: type, ref: forwardedRef, onClick: onClick, onFocus: () => handleFocusChange(true), onBlur: () => handleFocusChange(false) },
            iconSide === 'left' ? iconComp : null,
            react_1.default.createElement("div", { className: lineCls },
                react_1.default.createElement("span", { className: textCls }, text)),
            iconSide === 'right' ? iconComp : null)));
});
exports.default = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(withSoftKeyManager_1.SoftKeyConsumer, null, context => (react_1.default.createElement(Button, Object.assign({ softKeyManager: context, forwardedRef: ref }, props))))));
