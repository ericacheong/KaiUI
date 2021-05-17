import React from 'react';
import './IconButton.scss';
import { SoftKeyContextProps } from '../SoftKey/SoftKeyProvider';
interface LocalProps {
    text?: string;
    icon?: any;
    iconSrc?: string;
    softKeyIcon?: any;
    softKeyManager?: SoftKeyContextProps;
    iconSide?: "left" | "right";
    onClick?: () => void;
    focusColor?: string;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    name?: string;
    type?: "button" | "submit" | "reset";
    onFocusChange?: (index: number) => void;
    index?: number;
    forwardedRef?: any;
    className?: string;
    id?: string;
    focusClass?: string;
}
declare const _default: React.ForwardRefExoticComponent<LocalProps & React.RefAttributes<unknown>>;
export default _default;
