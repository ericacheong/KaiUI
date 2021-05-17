"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftKeyProvider = exports.SoftKeyContext = void 0;
const react_1 = __importDefault(require("react"));
const SoftKey_1 = __importDefault(require("./SoftKey"));
exports.SoftKeyContext = react_1.default.createContext(undefined);
class SoftKeyProvider extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
        this.setLeftCallback = (leftCallback) => {
            this.setState({ leftCallback });
        };
        this.setRightCallback = (rightCallback) => {
            this.setState({ rightCallback });
        };
        this.setCenterCallback = (centerCallback) => {
            this.setState({ centerCallback });
        };
        this.setLeftText = leftText => {
            this.setState({ leftText, leftIcon: null });
        };
        this.setRightText = rightText => {
            this.setState({ rightText, rightIcon: null });
        };
        this.setCenterText = centerText => {
            this.setState({ centerText, centerIcon: null });
        };
        this.setCenterIcon = centerIcon => {
            this.setState({ centerIcon, centerText: null });
        };
        this.setLeftIcon = leftIcon => {
            this.setState({ leftIcon, leftText: null });
        };
        this.setRightIcon = rightIcon => {
            this.setState({ rightIcon, rightText: null });
        };
        // Shortcuts for convenience
        this.setSoftKeyTexts = ({ leftText = '', centerText = '', rightText = '' }) => {
            this.setState({ leftText, centerText, rightText });
        };
        this.setSoftKeyCallbacks = ({ leftCallback = () => { }, centerCallback = () => { }, rightCallback = () => { }, }) => {
            this.setState({ leftCallback, centerCallback, rightCallback });
        };
        this.unregisterSoftKeys = () => {
            this.setState({
                leftCallback: () => { },
                centerCallback: () => { },
                rightCallback: () => { },
                leftText: null,
                rightText: null,
                centerText: null,
                centerIcon: null,
            });
        };
        this.state = {
            leftText: '',
            centerText: '',
            rightText: '',
            centerIcon: null,
            leftIcon: null,
            rightIcon: null,
            leftCallback: () => { },
            centerCallback: () => { },
            rightCallback: () => { },
        };
    }
    render() {
        const context = {
            setLeftCallback: this.setLeftCallback,
            setRightCallback: this.setRightCallback,
            setCenterCallback: this.setCenterCallback,
            setLeftText: this.setLeftText,
            setRightText: this.setRightText,
            setCenterText: this.setCenterText,
            setLeftIcon: this.setLeftIcon,
            setCenterIcon: this.setCenterIcon,
            setRightIcon: this.setRightIcon,
            setSoftKeyTexts: this.setSoftKeyTexts,
            setSoftKeyCallbacks: this.setSoftKeyCallbacks,
            unregisterSoftKeys: this.unregisterSoftKeys
        };
        return (react_1.default.createElement(exports.SoftKeyContext.Provider, { value: context },
            this.props.children,
            react_1.default.createElement("footer", { className: this.props.className || '' },
                react_1.default.createElement(SoftKey_1.default, { leftText: this.state.leftText, leftIcon: this.state.leftIcon, centerText: this.state.centerText, centerIcon: this.state.centerIcon, rightIcon: this.state.rightIcon, rightText: this.state.rightText, leftCallback: this.state.leftCallback, centerCallback: this.state.centerCallback, rightCallback: this.state.rightCallback }))));
    }
}
exports.SoftKeyProvider = SoftKeyProvider;
