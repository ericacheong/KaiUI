"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBoundary = void 0;
const react_1 = __importDefault(require("react"));
class ErrorBoundary extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        console.error(error);
    }
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return react_1.default.createElement("h1", null, "Something went wrong.");
        }
        return this.props.children;
    }
}
exports.ErrorBoundary = ErrorBoundary;
