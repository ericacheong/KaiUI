"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmDialog = exports.infoDialog = exports.promptDialog = void 0;
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
require("./Dialog.scss");
const SoftKey_1 = __importDefault(require("../SoftKey/SoftKey"));
class Dialog extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.input = null;
        this.onKeyDown = e => {
            const { type, onOK, onCancel } = this.props;
            switch (e.key) {
                case 'SoftLeft':
                    if (onCancel) {
                        onCancel();
                    }
                    this.close();
                    break;
                case 'Enter':
                    let res = null;
                    if (type === 'prompt' && this.input) {
                        res = this.input.value;
                    }
                    if (onOK) {
                        onOK(res);
                    }
                    this.close();
                    break;
                case 'Backspace':
                    this.close();
                    e.preventDefault();
                    break;
                default:
                    break;
            }
        };
    }
    close() {
        this.props.close();
    }
    render() {
        const { header, content, type, inputOptions, onOK, onClose, close } = this.props;
        return (react_1.default.createElement("div", { className: "systemContent" },
            react_1.default.createElement("div", { className: "kai-dialog-wrapper", tabIndex: -1, onKeyDown: this.onKeyDown },
                header ? react_1.default.createElement("div", { className: "kai-dialog-header h1" }, header) : null,
                react_1.default.createElement("div", { className: `kai-dialog-container ${type}` },
                    content ? react_1.default.createElement("div", { className: "kai-dialog-content" }, content) : null,
                    type === 'prompt' ?
                        react_1.default.createElement("input", Object.assign({ ref: (node) => { this.input = node; }, className: "kai-dialog-input" }, inputOptions)) : null)),
            react_1.default.createElement(SoftKey_1.default, { leftText: "Cancel", leftCallback: () => { close(); onClose(); }, rightText: type === "confirm" ?
                    "Confirm" :
                    "OK", rightCallback: () => { onOK(); close(); } })));
    }
}
function showDialog(config) {
    const div = document.createElement('div');
    div.className = 'kai-dialog';
    document.body.appendChild(div);
    function render(props) {
        react_dom_1.default.render(react_1.default.createElement(Dialog, Object.assign({}, props)), div);
    }
    function close() {
        react_dom_1.default.unmountComponentAtNode(div);
        document.body.removeChild(div);
        if (config.onClose) {
            config.onClose();
        }
    }
    if (config.onOpen) {
        config.onOpen();
    }
    render(Object.assign(Object.assign({}, config), { close }));
}
function promptDialog(props) {
    const config = Object.assign({ type: "prompt" }, props);
    return showDialog(config);
}
exports.promptDialog = promptDialog;
function confirmDialog(props) {
    const config = Object.assign({ type: "confirm" }, props);
    return showDialog(config);
}
exports.confirmDialog = confirmDialog;
function infoDialog(props) {
    const config = Object.assign({ type: "info" }, props);
    return showDialog(config);
}
exports.infoDialog = infoDialog;
exports.default = Dialog;
