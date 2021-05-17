import React from 'react';
import './ArrowListItem.scss';
interface LocalProps {
    primary: string;
    secondary?: string;
    focusClass?: string;
    forwardedRef?: any;
    index?: number;
    onFocusChange?: (index: number) => void;
    onClick?: () => void;
}
declare const _default: React.ForwardRefExoticComponent<LocalProps & React.RefAttributes<unknown>>;
export default _default;
