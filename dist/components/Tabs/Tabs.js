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
require("./Tabs.scss");
const prefixCls = 'kai-tabs';
const Tabs = react_1.default.memo(props => {
    const { onChangeIndex, children } = props;
    const childRefs = [];
    const [activeChild, setActiveChild] = react_1.useState(0);
    const handleTabChange = react_1.useCallback(childIndex => {
        setActiveChild(childIndex);
        childRefs[childIndex].current.scrollIntoView({
            behavior: 'auto',
            block: 'start',
            inline: 'center',
        });
        onChangeIndex(childIndex);
    }, [childRefs, onChangeIndex]);
    const handleKeyUp = react_1.useCallback(e => {
        let index = activeChild;
        switch (e.key) {
            case 'ArrowRight':
                index = Math.min(index + 1, react_1.default.Children.count(children) - 1);
                if (activeChild !== index) {
                    handleTabChange(index);
                }
                break;
            case 'ArrowLeft':
                index = Math.max(index - 1, 0);
                if (activeChild !== index) {
                    handleTabChange(index);
                }
                break;
            default:
                break;
        }
    }, [activeChild, children, handleTabChange]);
    const renderChildren = () => {
        return react_1.default.Children.map(children, (child, i) => {
            const childRef = react_1.useRef();
            childRefs[i] = childRef;
            return react_1.default.cloneElement(child, {
                index: i,
                onTabChange: handleTabChange,
                isActive: activeChild === i,
                ref: childRef
            });
        });
    };
    react_1.useEffect(() => {
        document.addEventListener('keyup', handleKeyUp);
        return () => document.removeEventListener('keyup', handleKeyUp);
    }, [handleKeyUp]);
    return react_1.default.createElement("div", { className: prefixCls }, renderChildren());
});
exports.default = Tabs;
