import React from 'react';
import './TextListItem.scss';
interface LocalProps {
    primary: string;
    secondary?: string;
    tertiary?: string;
    focusClass?: string;
    forwardedRef?: any;
    index?: number;
    onFocusChange?: (index: number) => void;
    className?: string;
}
declare const _default: React.ForwardRefExoticComponent<LocalProps & React.RefAttributes<unknown>>;
export default _default;
