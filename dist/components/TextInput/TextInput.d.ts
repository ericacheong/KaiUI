import React, { ChangeEvent } from 'react';
import './TextInput.scss';
interface LocalProps {
    id?: string;
    focusClass?: string;
    label?: string;
    index?: number;
    onFocusChange?: (index: number) => void;
    forwardedRef?: any;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    enableTabSwitching?: boolean;
    initialValue?: string;
    placeholder?: string;
    isNumeric?: boolean;
    validationError?: string;
}
declare const _default: React.ForwardRefExoticComponent<LocalProps & React.RefAttributes<unknown>>;
export default _default;
