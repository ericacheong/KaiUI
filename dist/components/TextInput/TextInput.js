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
const classnames_1 = __importDefault(require("classnames"));
require("./TextInput.scss");
;
const prefixCls = 'kai-text-input';
const TextInput = react_1.default.memo(props => {
    const { id, focusClass, label, index, onFocusChange, forwardedRef, onChange, enableTabSwitching, initialValue, placeholder, isNumeric, validationError } = props;
    const [isFocused, setIsFocused] = react_1.useState(false);
    const [caretPosition, setCaretPosition] = react_1.useState(0);
    const [value, setValue] = react_1.useState((initialValue || ''));
    const handleKeyUp = (event) => {
        if (enableTabSwitching) {
            if ((event.key === 'ArrowLeft' && caretPosition !== 0) ||
                (event.key === 'ArrowRight' && caretPosition !== value.length)) {
                event.stopPropagation();
                event.nativeEvent.stopImmediatePropagation();
            }
        }
        else {
            event.stopPropagation();
            event.nativeEvent.stopImmediatePropagation();
        }
        setCaretPosition(event.target.selectionStart);
    };
    const handleChange = (event) => {
        setValue(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };
    const handleFocusChange = (foc) => {
        const input = forwardedRef.current;
        setIsFocused(foc);
        if (foc) {
            onFocusChange(index);
            input.focus();
            // Without this, it will just focus at position 0
            requestAnimationFrame(() => {
                input.selectionStart = caretPosition;
            });
        }
    };
    const errorCls = validationError ? `${prefixCls}-error` : '';
    const itemCls = classnames_1.default([
        prefixCls,
        isFocused && `${prefixCls}--focused ${(focusClass || '')}`,
        errorCls
    ]);
    const labelCls = `${prefixCls}-label p-thi`;
    const inputCls = `${prefixCls}-input p-pri`;
    return (react_1.default.createElement("div", { id: id, tabIndex: 0, className: itemCls, onFocus: () => handleFocusChange(true), onBlur: () => handleFocusChange(false) },
        react_1.default.createElement("label", { className: labelCls }, validationError ? validationError : label),
        react_1.default.createElement("input", { ref: forwardedRef, type: isNumeric ? "tel" : "text", className: inputCls, onChange: handleChange, onKeyUpCapture: handleKeyUp, value: value, placeholder: placeholder })));
});
exports.default = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(TextInput, Object.assign({ forwardedRef: ref }, props))));
