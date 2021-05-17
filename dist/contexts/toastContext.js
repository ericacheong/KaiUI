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
exports.withToast = exports.ToastContextProvider = void 0;
const react_1 = __importStar(require("react"));
const Toast_1 = __importDefault(require("../components/Toast/Toast"));
let isProcessingQueue = false;
const toastQueue = [];
const ToastContext = react_1.default.createContext(undefined);
const ToastContextProvider = ({ children }) => {
    const [text, setText] = react_1.useState('');
    const [isDisplayed, setIsDisplayed] = react_1.useState(false);
    const processQueue = () => {
        if (toastQueue.length === 0) {
            isProcessingQueue = false;
            return;
        }
        isProcessingQueue = true;
        const toastData = toastQueue.shift();
        if (toastData) {
            setText(toastData.text);
            setIsDisplayed(true);
            setTimeout(() => {
                setIsDisplayed(false);
                // Wait for the closing animation before processing next toast
                setTimeout(() => {
                    processQueue();
                }, 300);
            }, toastData.duration || 5000);
        }
    };
    const showToast = (text, duration) => {
        toastQueue.push({ text, duration });
        !isProcessingQueue && processQueue();
    };
    return (react_1.default.createElement(ToastContext.Provider, { value: { showToast } },
        react_1.default.createElement(Toast_1.default, { text: text, isDisplayed: isDisplayed }),
        children));
};
exports.ToastContextProvider = ToastContextProvider;
const withToast = (Component) => (props) => (react_1.default.createElement(ToastContext.Consumer, null, toastProps => react_1.default.createElement(Component, Object.assign({}, props, toastProps))));
exports.withToast = withToast;
exports.default = ToastContext;
