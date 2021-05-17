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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const withSoftKeyManager_1 = require("../SoftKey/withSoftKeyManager");
const prefixCls = 'kai-om';
const OptionItem = react_1.default.memo(props => {
    const { index, text, onClick, onFocusChange, softKeyManager, forwardedRef } = props;
    const [, setFocused] = react_1.useState(false);
    const itemCls = `${prefixCls}-item`;
    const handleFocusChange = (isNowFocused) => {
        setFocused(isNowFocused);
        if (isNowFocused) {
            softKeyManager.setSoftKeyTexts({ centerText: "Select" });
            softKeyManager.setSoftKeyCallbacks({
                centerCallback: onClick
            });
            if (onFocusChange)
                onFocusChange(index);
        }
        else {
            softKeyManager.unregisterSoftKeys();
        }
    };
    return (react_1.default.createElement("div", { tabIndex: 0, ref: forwardedRef, onFocus: () => handleFocusChange(true), onBlur: () => handleFocusChange(false), className: itemCls }, text));
});
/*
OptionItem.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  onFocusChange: PropTypes.func,
  onClick: PropTypes.func
};

OptionItem.defaultProps = {
  onFocusChange: () => {},
  onClick: () => {}
};*/
exports.default = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(withSoftKeyManager_1.SoftKeyConsumer, null, context => (react_1.default.createElement(OptionItem, Object.assign({ softKeyManager: context, forwardedRef: ref }, props))))));
