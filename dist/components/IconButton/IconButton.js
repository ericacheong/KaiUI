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
const withSoftKeyManager_1 = require("../SoftKey/withSoftKeyManager");
const useFocus_1 = require("../../hooks/useFocus");
require("./IconButton.scss");
const classnames_1 = __importDefault(require("classnames"));
const prefixCls = 'kai-icon-button';
const IconButton = react_1.default.memo(props => {
    const { id, icon, onClick, focusClass, form, formAction, formEncType, formMethod, formNoValidate, formTarget, name, type, onFocusChange, index, forwardedRef, className } = props;
    const handleFocusChange = react_1.useCallback(isNowFocused => {
        if (isNowFocused) {
            onFocusChange(index);
        }
    }, [index, onFocusChange, onClick]);
    const isFocused = useFocus_1.useFocus(forwardedRef, handleFocusChange, false);
    const buttonCls = prefixCls;
    const inputCls = `${prefixCls}-input`;
    const iconCls = `${prefixCls}-icon-${isFocused ? 'focused' : 'unfocused'}`;
    const focusedCls = isFocused ? `${prefixCls}-focused ${(focusClass || '')}` : '';
    const iconComp = (react_1.default.createElement("div", { className: iconCls }, icon));
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };
    return (react_1.default.createElement("span", { className: classnames_1.default(buttonCls, (className || '')) },
        react_1.default.createElement("button", { id: id, tabIndex: 0, className: classnames_1.default(inputCls, focusedCls), form: form, formAction: formAction, formEncType: formEncType, formMethod: formMethod, formNoValidate: formNoValidate, formTarget: formTarget, name: name, type: type, ref: forwardedRef, onClick: handleClick, onFocus: () => handleFocusChange(true), onBlur: () => handleFocusChange(false) }, iconComp)));
});
exports.default = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(withSoftKeyManager_1.SoftKeyConsumer, null, context => (react_1.default.createElement(IconButton, Object.assign({ softKeyManager: context, forwardedRef: ref }, props))))));
