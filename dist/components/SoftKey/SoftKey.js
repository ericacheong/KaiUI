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
require("./SoftKey.scss");
const prefixCls = 'kai-softkey';
const Button = props => {
    const { handleClick, icon, text, id } = props;
    const handleButtonClick = e => {
        e.preventDefault();
        if (handleClick) {
            handleClick();
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
    let renderedIcon;
    if (icon) {
        if (react_1.default.isValidElement(icon)) {
            renderedIcon = icon;
        }
        else if (icon.toString().indexOf("kai-") === -1) {
            renderedIcon = react_1.default.createElement("img", { src: icon, width: 20, height: 20 });
        }
        else {
            renderedIcon = react_1.default.createElement("span", { className: icon });
        }
    }
    return (react_1.default.createElement("button", { id: id, className: `${prefixCls}-btn`, onClick: handleButtonClick, onFocus: handleCheckFocus, "data-icon": renderedIcon ? "true" : undefined },
        renderedIcon,
        text));
};
const SoftKey = react_1.default.memo(props => {
    const { leftCallback, rightCallback, centerCallback, leftText, rightText, centerText, leftIcon, centerIcon, rightIcon, } = props;
    const handleKeyDown = react_1.useCallback(e => {
        switch (e.key) {
            case 'SoftLeft':
                if (leftCallback) {
                    leftCallback();
                }
                break;
            case 'SoftRight':
                if (rightCallback) {
                    rightCallback();
                }
                break;
            case 'Enter':
                // Action case press center key
                if (centerCallback) {
                    centerCallback();
                }
                break;
            default:
                break;
        }
    }, [leftCallback, rightCallback, centerCallback]);
    react_1.useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);
    return (react_1.default.createElement("div", { className: `${prefixCls} visible` },
        react_1.default.createElement(Button, { id: "leftSoftKey", pos: "left", text: leftText, icon: leftIcon, handleClick: leftCallback }),
        react_1.default.createElement(Button, { id: "centerSoftKey", pos: "center", text: centerText, icon: centerIcon, handleClick: centerCallback }),
        react_1.default.createElement(Button, { id: "rightSoftKey", pos: "right", text: rightText, icon: rightIcon, handleClick: rightCallback })));
});
exports.default = SoftKey;
