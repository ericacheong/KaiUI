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
require("./OptionMenu.scss");
const TextInput_1 = __importDefault(require("../TextInput/TextInput"));
const prefixCls = 'kai-om';
const OptionMenu = react_1.default.memo(props => {
    const { header, children, onChangeIndex, isActive, onExit, enableSearch } = props;
    const itemRefs = [];
    const [selectedItem, setSelectedItem] = react_1.useState(0);
    const [searchTerm, setSearchTerm] = react_1.useState("");
    const itemCls = prefixCls;
    const handleItemChange = react_1.useCallback(itemIndex => {
        setSelectedItem(itemIndex);
        if (onChangeIndex) {
            onChangeIndex(itemIndex);
        }
    }, [onChangeIndex]);
    const setFocusToIndex = react_1.useCallback(index => {
        const elem = react_dom_1.default.findDOMNode(itemRefs[index].current);
        if (elem) {
            elem.focus();
        }
    }, [itemRefs]);
    const handleKeyDown = react_1.useCallback(e => {
        let index = selectedItem;
        if (!isActive) {
            return;
        }
        switch (e.key) {
            case 'ArrowUp':
                index = index > 0 ? --index : itemRefs.length - 1;
                setFocusToIndex(index);
                break;
            case 'ArrowDown':
                index = index < itemRefs.length - 1 ? index + 1 : 0;
                setFocusToIndex(index);
                break;
            case 'Backspace':
                if (selectedItem !== 0 && onExit) {
                    onExit();
                }
                break;
            default:
                break;
        }
    }, [itemRefs, isActive, selectedItem, setFocusToIndex]);
    react_1.useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);
    react_1.useEffect(() => {
        if (isActive) {
            setFocusToIndex(selectedItem);
        }
    }, [isActive, setFocusToIndex, selectedItem]);
    const childrenToRender = [...children];
    if (enableSearch === true) {
        childrenToRender.unshift(react_1.default.createElement(TextInput_1.default, { id: "optMenuSearch", initialValue: searchTerm || "", 
            // placeholder={this.props.localization.getUIString("search") + "..."} 
            index: 0, onChange: (ev) => { setSearchTerm(ev.target.value); } }));
    }
    const renderedItems = react_1.default.Children.map(childrenToRender, (item, idx) => {
        const itemRef = react_1.default.createRef();
        itemRefs[idx] = itemRef;
        return react_1.default.cloneElement(item, {
            index: idx,
            onFocusChange: handleItemChange,
            ref: itemRef
        });
    });
    const matchingSearchChildren = searchTerm ?
        childrenToRender.filter(child => child.props.id === "optMenuSearch" ||
            (child.props.text && child.props.text.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1))
        : undefined;
    const filteredItems = matchingSearchChildren && matchingSearchChildren.length > 0 ? react_1.default.Children.map(matchingSearchChildren, (item, idx) => {
        const itemRef = react_1.default.createRef();
        itemRefs[idx] = itemRef;
        return react_1.default.cloneElement(item, {
            index: idx,
            onFocusChange: handleItemChange,
            ref: itemRef
        });
    }) : undefined;
    return (react_1.default.createElement("div", { className: itemCls },
        react_1.default.createElement("header", null, header),
        react_1.default.createElement("nav", null, filteredItems ? filteredItems : renderedItems)));
});
exports.default = OptionMenu;
