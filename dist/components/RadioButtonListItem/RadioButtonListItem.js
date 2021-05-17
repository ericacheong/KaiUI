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
require("./RadioButtonListItem.scss");
const prefixCls = 'kai-rbl';
const RadioButtonListItem = react_1.default.memo(props => {
    const { primary, secondary, initButtonVal, onInputChange, buttonSide, onFocusChange, focusColor, index, forwardedRef, softKeyManager, softKeyCheckedText, softKeyUncheckedText, softKeyCheckedIcon, softKeyUncheckedIcon, } = props;
    // Managed vs self-managed radio buttons
    const [isChecked, setChecked] = react_1.useState(initButtonVal);
    const [isFocused, setFocused] = react_1.useState(false);
    const itemCls = prefixCls;
    const buttonCls = `${prefixCls}-button`;
    const lineCls = `${prefixCls}-line ${buttonSide === 'left' ? 'right' : 'left'}`;
    const primaryCls = `${prefixCls}-primary`;
    const secondaryCls = `${prefixCls}-secondary ${secondary ? '' : 'hidden'}`;
    const inputCls = `${buttonCls}-input-${isFocused ? 'focused' : 'unfocused'}`;
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
    const handleInputChange = e => {
        setChecked(e.target.checked);
        onInputChange(e.target.checked);
    };
    // We want to avoid losing focus on the parent element
    const handleButtonFocus = e => {
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
                softKeyManager.setSoftKeyTexts({ centerText });
            }
            softKeyManager.setSoftKeyCallbacks({
                centerCallback: () => setChecked(true),
            });
            if (index) {
                onFocusChange(index);
            }
        }
        else {
            softKeyManager.unregisterSoftKeys();
        }
    }, [
        index,
        isChecked,
        onFocusChange,
        softKeyManager,
        softKeyCheckedText,
        softKeyUncheckedText,
        softKeyCheckedIcon,
        softKeyUncheckedIcon,
    ]);
    const radioBtn = (react_1.default.createElement("div", { className: buttonCls },
        react_1.default.createElement("input", { className: inputCls, tabIndex: -1, type: "radio", checked: isChecked, onFocus: handleButtonFocus, onClick: handleInputChange })));
    return (react_1.default.createElement("div", { tabIndex: 0, className: itemCls, style: { backgroundColor: isFocused ? (focusColor || colors_scss_1.default.defaultFocusColor) : colors_scss_1.default.white }, ref: forwardedRef, onFocus: () => handleFocusChange(true), onBlur: () => handleFocusChange(false) },
        buttonSide === 'left' ? radioBtn : null,
        react_1.default.createElement("div", { className: lineCls },
            react_1.default.createElement("span", { className: primaryCls }, primary),
            react_1.default.createElement("label", { className: secondaryCls }, secondary)),
        buttonSide === 'right' ? radioBtn : null));
});
/*
RadioButtonListItem.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  // Used for unmanaged radio buttons
  initButtonVal: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  // For direct management over the radio button value
  isChecked: PropTypes.bool,
  buttonSide: PropTypes.oneOf(['left', 'right']).isRequired,
  // For ListView navigation
  onFocusChange: PropTypes.func,
  focusColor: PropTypes.string,
  index: PropTypes.number,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  // For softkey
  softKeyCheckedText: PropTypes.string,
  softKeyUncheckedText: PropTypes.string,
  softKeyCheckedIcon: PropTypes.string,
  softKeyUncheckedIcon: PropTypes.string,
};

RadioButtonListItem.defaultProps = {
  secondary: null,
  isChecked: null,
  focusColor: colors.defaultFocusColor,
  softKeyCheckedText: '',
  softKeyUncheckedText: 'Select',
  softKeyCheckedIcon: null,
  softKeyUncheckedIcon: null,
};*/
exports.default = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(withSoftKeyManager_1.SoftKeyConsumer, null, context => (react_1.default.createElement(RadioButtonListItem, Object.assign({ softKeyManager: context, forwardedRef: ref }, props))))));
