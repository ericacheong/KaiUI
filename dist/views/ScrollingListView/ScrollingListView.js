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
require("./ScrollingListView.scss");
const classnames_1 = __importDefault(require("classnames"));
const BodyTextListItem_1 = __importDefault(require("../../components/BodyTextListItem/BodyTextListItem"));
const prefixCls = 'kai-scroll-list-view';
const ScrollingListView = react_1.default.memo((props) => {
    const { onChangeIndex, isActive, className, initialSelectedIndex } = props;
    const children = [].concat(props.children);
    const [activeItem, setActiveItem] = react_1.useState(initialSelectedIndex === undefined ? 1 : initialSelectedIndex);
    const handleChangeIndex = itemIndex => {
        if (onChangeIndex) {
            onChangeIndex(itemIndex);
        }
    };
    const handleKeyDown = react_1.useCallback(e => {
        let index = activeItem;
        if (!isActive) {
            return;
        }
        switch (e.key) {
            case 'ArrowUp':
                index = index - 1 >= 0 ? index - 1 : index;
                setActiveItem(index);
                handleChangeIndex(index);
                break;
            case 'ArrowDown':
                index = index + 1 < children.length ? index + 1 : index;
                setActiveItem(index);
                handleChangeIndex(index);
                break;
            default:
                break;
        }
    }, [isActive, activeItem, setActiveItem]);
    react_1.useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);
    const renderChildren = () => {
        const childrenToDisplay = children.filter((item, i) => i >= activeItem - 1 && i <= activeItem + 1);
        if (childrenToDisplay.length === 2) {
            if (activeItem === 0) {
                childrenToDisplay.unshift(react_1.default.createElement(BodyTextListItem_1.default, { header: "" }));
            }
            else if (activeItem === children.length) {
                childrenToDisplay.push(react_1.default.createElement(BodyTextListItem_1.default, { header: "" }));
            }
        }
        let index = -1;
        return react_1.default.Children.map(childrenToDisplay, child => {
            // Don't focus on separators
            if (!child || child.props.separatorText != null) {
                return child;
            }
            index++;
            const newRef = react_1.default.createRef();
            return react_1.default.cloneElement(child, {
                index,
                ref: newRef,
                className: classnames_1.default(index === 1 ? prefixCls + "-middleItem" : prefixCls + "-nonMiddleItem", index === 1 && isActive ? prefixCls + "-activeItem" : '')
            });
        });
    };
    return react_1.default.createElement("div", { className: classnames_1.default(prefixCls, (className || '')) }, renderChildren());
});
exports.default = ScrollingListView;
