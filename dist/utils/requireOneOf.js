"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireOneOf = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const requireOneOf = checkProps => {
    return (props, propName, compName) => {
        const requirePropNames = Object.keys(checkProps);
        const found = requirePropNames.find((propRequired) => props[propRequired]);
        try {
            if (!found) {
                throw new Error(`One of ${requirePropNames.join(',')} is required by '${compName}' component.`);
            }
            prop_types_1.default.checkPropTypes(checkProps, props, propName, compName);
        }
        catch (e) {
            return e;
        }
        return null;
    };
};
exports.requireOneOf = requireOneOf;
