"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
require("./Toast.scss");
const Toast = ({ text, isDisplayed }) => {
    const prefixCls = 'kai-toast';
    const itemCls = classnames_1.default(prefixCls, isDisplayed && `${prefixCls}--displayed`);
    return (react_1.default.createElement("h1", { className: itemCls }, text));
};
exports.default = Toast;
