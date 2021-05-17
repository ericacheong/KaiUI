"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withSoftKeyManager = exports.SoftKeyConsumer = void 0;
const react_1 = __importDefault(require("react"));
const SoftKeyProvider_1 = require("./SoftKeyProvider");
const SoftKeyConsumer = ({ children }) => (react_1.default.createElement(SoftKeyProvider_1.SoftKeyContext.Consumer, null, context => children(context)));
exports.SoftKeyConsumer = SoftKeyConsumer;
const withSoftKeyManager = Comp => props => (react_1.default.createElement(exports.SoftKeyConsumer, null, context => react_1.default.createElement(Comp, Object.assign({ softKeyManager: context }, props))));
exports.withSoftKeyManager = withSoftKeyManager;
