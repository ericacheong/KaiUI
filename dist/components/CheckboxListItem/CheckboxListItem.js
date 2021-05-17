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
require("./CheckboxListItem.scss");
const prefixCls = 'kai-cbl';
const CheckboxListItem = react_1.default.memo(props => {
    const { id, primary, secondary, initCheckboxVal, onInputChange, checkboxSide, focusColor, onFocusChange, index, forwardedRef, softKeyManager, softKeyCheckedText, softKeyUncheckedText, softKeyCheckedIcon, softKeyUncheckedIcon, } = props;
    // Managed vs self-managed radio buttons
    const [isChecked, setChecked] = react_1.useState(initCheckboxVal);
    const [isFocused, setFocused] = react_1.useState(false);
    const itemCls = prefixCls;
    const boxCls = `${prefixCls}-box`;
    const lineCls = `${prefixCls}-line ${checkboxSide === 'left' ? 'right' : 'left'}`;
    const primaryCls = `${prefixCls}-primary`;
    const secondaryCls = `${prefixCls}-secondary ${secondary ? '' : 'hidden'}`;
    const inputCls = `${boxCls}-input-${isFocused ? 'focused' : 'unfocused'}`;
    react_1.useEffect(() => {
        const centerText = isChecked ? softKeyCheckedText : softKeyUncheckedText;
        const centerIcon = isChecked ? softKeyCheckedIcon : softKeyUncheckedIcon;
        if (isFocused) {
            if (centerIcon != null) {
                softKeyManager.setCenterIcon(centerIcon);
            }
            else {
                softKeyManager.setCenterText(centerText);
            }
        }
    }, [
        isFocused,
        isChecked,
        softKeyManager,
        softKeyCheckedText,
        softKeyUncheckedText,
        softKeyCheckedIcon,
        softKeyUncheckedIcon,
    ]);
    const handleInvertCheck = () => setChecked(wasChecked => !wasChecked);
    const handleInputChange = (e) => {
        setChecked(e.target.checked);
        if (onInputChange) {
            onInputChange(e.target.checked);
        }
    };
    // We want to avoid losing focus on the parent element
    const handleCheckFocus = e => {
        e.preventDefault();
        if (e.relatedTarget) {
            // Revert focus back to previous blurring element
            e.relatedTarget.focus();
        }
        else {
            // No previous focus target, blur instead
            e.currentTarget.blur();
        }
    };
    const handleFocusChange = react_1.useCallback(isNowFocused => {
        setFocused(isNowFocused);
        if (isNowFocused) {
            const centerText = isChecked
                ? softKeyCheckedText
                : softKeyUncheckedText;
            const centerIcon = isChecked
                ? softKeyCheckedIcon
                : softKeyUncheckedIcon;
            if (centerIcon != null) {
                softKeyManager.setCenterIcon(centerIcon);
            }
            else {
                softKeyManager.setCenterText(centerText);
            }
            softKeyManager.setCenterCallback(handleInvertCheck);
            onFocusChange(index);
        }
    }, [
        index,
        onFocusChange,
        isChecked,
        softKeyCheckedText,
        softKeyUncheckedText,
        softKeyCheckedIcon,
        softKeyUncheckedIcon,
        softKeyManager,
    ]);
    const checkbox = (react_1.default.createElement("div", { className: boxCls },
        react_1.default.createElement("input", { id: id, className: inputCls, tabIndex: -1, type: "checkbox", checked: isChecked, onFocus: handleCheckFocus, onClick: handleInputChange })));
    return (react_1.default.createElement("div", { tabIndex: 0, className: itemCls, style: { backgroundColor: isFocused ? (focusColor || colors_scss_1.default.defaultFocusColor) : colors_scss_1.default.white }, ref: forwardedRef, onFocus: () => handleFocusChange(true), onBlur: () => handleFocusChange(false) },
        checkboxSide === 'left' || checkboxSide === undefined ? checkbox : null,
        react_1.default.createElement("div", { className: lineCls },
            react_1.default.createElement("span", { className: primaryCls }, primary),
            react_1.default.createElement("label", { className: secondaryCls }, secondary)),
        checkboxSide === 'right' ? checkbox : null));
});
exports.default = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(withSoftKeyManager_1.SoftKeyConsumer, null, context => (react_1.default.createElement(CheckboxListItem, Object.assign({ softKeyManager: context, forwardedRef: ref }, props))))));
