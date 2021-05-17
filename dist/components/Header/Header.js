"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Header.scss");
const classnames_1 = __importDefault(require("classnames"));
const prefixCls = 'kai-header';
const Header = react_1.default.memo(props => {
    const { text, backgroundColor, imgSrc, className } = props;
    return (react_1.default.createElement("header", { className: classnames_1.default(prefixCls, (className || '')), style: { background: backgroundColor } }, (imgSrc ? react_1.default.createElement("img", { src: imgSrc, style: { height: "20px" } }) : react_1.default.createElement("h1", { className: "h1" }, text))));
});
exports.default = Header;
