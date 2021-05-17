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
const react_dom_1 = __importDefault(require("react-dom"));
require("./HorizontalListView.scss");
const classnames_1 = __importDefault(require("classnames"));
const prefixCls = 'kai-horizontal-list-view';
const HorizontalListView = react_1.default.memo((props) => {
    const itemRefs = [];
    const [activeItem, setActiveItem] = react_1.useState(0);
    const { children, onChangeIndex, isActive, className } = props;
    const handleChangeIndex = itemIndex => {
        setActiveItem(itemIndex);
        if (onChangeIndex) {
            onChangeIndex(itemIndex);
        }
    };
    const setFocusToIndex = react_1.useCallback(index => {
        let item = itemRefs[index];
        if (!item) {
            item = itemRefs[0];
        }
        const elem = react_dom_1.default.findDOMNode(item.current);
        if (elem) {
            elem.focus();
        }
    }, [itemRefs]);
    const handleKeyDown = react_1.useCallback(e => {
        let index = activeItem;
        if (!isActive) {
            return;
        }
        switch (e.key) {
            case 'ArrowLeft':
                index = index - 1 >= 0 ? index - 1 : itemRefs.length - 1;
                setFocusToIndex(index);
                break;
            case 'ArrowUp':
                index = index - 1 >= 0 ? index - 1 : itemRefs.length - 1;
                setFocusToIndex(index);
                break;
            case 'ArrowRight':
                index = index + 1 < itemRefs.length ? index + 1 : 0;
                setFocusToIndex(index);
            case 'ArrowDown':
                index = index + 1 < itemRefs.length ? index + 1 : 0;
                setFocusToIndex(index);
                break;
            default:
                break;
        }
    }, [isActive, activeItem, setFocusToIndex, itemRefs]);
    react_1.useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);
    react_1.useEffect(() => {
        if (isActive) {
            setFocusToIndex(activeItem);
        }
    }, [isActive, setFocusToIndex, activeItem]);
    const renderChildren = () => {
        let index = -1;
        return react_1.default.Children.map(children, (child) => {
            // Don't focus on separators
            if (!child || child.props.separatorText != null) {
                return child;
            }
            index++;
            const newRef = react_1.default.createRef();
            itemRefs[index] = newRef;
            return react_1.default.cloneElement(child, {
                index,
                onFocusChange: handleChangeIndex,
                ref: newRef,
            });
        });
    };
    return react_1.default.createElement("div", { className: classnames_1.default(prefixCls, (className || '')) }, renderChildren());
});
exports.default = HorizontalListView;
