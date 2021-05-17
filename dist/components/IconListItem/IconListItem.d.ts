import React from 'react';
import './IconListItem.scss';
interface LocalProps {
    id?: string;
    primary: string;
    secondary?: string;
    icon?: any;
    iconSrc?: string;
    focusClass?: string;
    forwardedRef?: any;
    index?: number;
    onFocusChange?: (index: number) => void;
    linkTo?: string;
    iconWidth?: string;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
}
declare const _default: React.ForwardRefExoticComponent<LocalProps & React.RefAttributes<unknown>>;
export default _default;
