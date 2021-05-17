import React from 'react';
import './CheckboxListItem.scss';
import { SoftKeyContextProps } from '../SoftKey/SoftKeyProvider';
interface LocalProps {
    id?: string;
    primary: string;
    secondary?: string;
    initCheckboxVal?: boolean;
    onInputChange?: (checked: any) => void;
    checkboxSide?: "left" | "right";
    focusColor?: string;
    onFocusChange?: (index: number) => void;
    index?: number;
    forwardedRef?: any;
    softKeyManager?: SoftKeyContextProps;
    softKeyCheckedText?: string;
    softKeyUncheckedText?: string;
    softKeyCheckedIcon?: any;
    softKeyUncheckedIcon?: any;
}
declare const _default: React.ForwardRefExoticComponent<LocalProps & React.RefAttributes<unknown>>;
export default _default;
