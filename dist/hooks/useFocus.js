"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFocus = void 0;
const react_1 = require("react");
const useFocus = (ref, onFocusChanged, focusedByDefault = false) => {
    const [isFocused, setFocused] = react_1.useState(focusedByDefault);
    react_1.useEffect(() => {
        if (!ref) {
            return;
        }
        const component = ref.current;
        const onFocus = () => {
            setFocused(true);
            if (onFocusChanged) {
                onFocusChanged(true);
            }
        };
        const onBlur = () => {
            setFocused(false);
            if (onFocusChanged) {
                onFocusChanged(false);
            }
        };
        component.addEventListener('focus', onFocus);
        component.addEventListener('blur', onBlur);
        return () => {
            component.removeEventListener('focus', onFocus);
            component.removeEventListener('blur', onBlur);
        };
    }, [ref, onFocusChanged]);
    return isFocused;
};
exports.useFocus = useFocus;
