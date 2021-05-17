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
require("./TriColumnListView.scss");
const ScrollingListView_1 = __importDefault(require("../ScrollingListView/ScrollingListView"));
const prefixCls = 'kai-tricol-view';
const TriColListView = react_1.default.memo(props => {
    const { onChangeIndex, focusColor, col1Children, col2Children, col3Children, onCol1ChangeIndex, onCol2ChangeIndex, onCol3ChangeIndex, selectedCol1Index, selectedCol2Index, selectedCol3Index } = props;
    const [activeTab, setActiveTab] = react_1.useState(0);
    const [isTransitionDone, setTransitionDone] = react_1.useState(true);
    const handleChangeIndex = tabIndex => {
        // NOTE: Ensure you set state for tab transition first.
        // Otherwise you will face strange race condition bugs.
        setTransitionDone(false);
        setActiveTab(tabIndex);
        if (onChangeIndex) {
            onChangeIndex(tabIndex);
        }
    };
    const handleKeyDown = react_1.useCallback(e => {
        let index = activeTab;
        switch (e.key) {
            case 'ArrowLeft':
                index = index - 1 >= 0 ? index - 1 : 2;
                setActiveTab(index);
                break;
            case 'ArrowRight':
                index = index + 1 < 3 ? index + 1 : 0;
                setActiveTab(index);
            default:
                break;
        }
    }, [activeTab, setActiveTab]);
    react_1.useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);
    const renderChildren = (children) => {
        return react_1.default.Children.map(children, (child, i) => {
            return react_1.default.cloneElement(child, {
                isActive: activeTab === i && isTransitionDone,
                onFocusChange: handleChangeIndex,
                focusClass: "defaultFocusCls"
            });
        });
    };
    return (react_1.default.createElement("div", { className: prefixCls },
        react_1.default.createElement("div", { className: prefixCls + "-content" },
            react_1.default.createElement(ScrollingListView_1.default, { isActive: activeTab === 0, className: "col", initialSelectedIndex: selectedCol1Index, onChangeIndex: (index) => onCol1ChangeIndex(index) }, renderChildren(col1Children)),
            react_1.default.createElement(ScrollingListView_1.default, { isActive: activeTab === 1, className: "col", initialSelectedIndex: selectedCol2Index, onChangeIndex: (index) => onCol2ChangeIndex(index) }, renderChildren(col2Children)),
            react_1.default.createElement(ScrollingListView_1.default, { isActive: activeTab === 2, className: "col", initialSelectedIndex: selectedCol3Index, onChangeIndex: (index) => onCol3ChangeIndex(index) }, renderChildren(col3Children)))));
});
exports.default = TriColListView;
