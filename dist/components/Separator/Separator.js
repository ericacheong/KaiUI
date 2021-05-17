"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Separator.scss");
const prefixCls = 'kai-separator';
const Separator = react_1.default.memo(props => {
    const { separatorText } = props;
    const textCls = `${prefixCls}-text`;
    return (react_1.default.createElement("div", { className: prefixCls },
        react_1.default.createElement("span", { className: textCls }, separatorText)));
});
exports.default = Separator;
