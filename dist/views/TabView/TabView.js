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
const react_swipeable_views_1 = __importDefault(require("react-swipeable-views"));
const Tabs_1 = __importDefault(require("../../components/Tabs/Tabs"));
const Tab_1 = __importDefault(require("../../components/Tab/Tab"));
const colors_scss_1 = __importDefault(require("../../theme/colors.scss"));
require("./TabView.scss");
const prefixCls = 'kai-tab-view';
const TabView = react_1.default.memo(props => {
    const { tabLabels, onChangeIndex, focusColor, children } = props;
    const [activeTab, setActiveTab] = react_1.useState(0);
    const [isTransitionDone, setTransitionDone] = react_1.useState(true);
    const tabViewTabs = `${prefixCls}-tabs`;
    const tabViewContent = `${prefixCls}-content`;
    const handleChangeIndex = tabIndex => {
        // NOTE: Ensure you set state for tab transition first.
        //       Otherwise you will face strange race condition bugs.
        setTransitionDone(false);
        setActiveTab(tabIndex);
        if (onChangeIndex) {
            onChangeIndex(tabIndex);
        }
    };
    const handleTransitionEnd = () => setTransitionDone(true);
    const renderTabs = () => {
        return tabLabels.map((label, i) => {
            return (react_1.default.createElement(Tab_1.default, { key: `key-${i}`, label: label, focusColor: (focusColor || colors_scss_1.default.defaultFocusColor) }));
        });
    };
    const renderChildren = () => {
        return react_1.default.Children.map(children, (child, i) => {
            return react_1.default.cloneElement(child, {
                isActive: activeTab === i && isTransitionDone,
            });
        });
    };
    return (react_1.default.createElement("div", { className: prefixCls },
        react_1.default.createElement("div", { className: tabViewTabs },
            react_1.default.createElement(Tabs_1.default, { onChangeIndex: handleChangeIndex }, renderTabs())),
        react_1.default.createElement("div", { className: tabViewContent },
            react_1.default.createElement(react_swipeable_views_1.default, { axis: 'x', index: activeTab, onChangeIndex: handleChangeIndex, onTransitionEnd: handleTransitionEnd, disabled: true }, renderChildren()))));
});
exports.default = TabView;
