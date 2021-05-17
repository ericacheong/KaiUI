import React from 'react';
import './BodyTextListItem.scss';
interface LocalProps {
    header: string;
    body?: string;
    focusColor?: string;
    forwardedRef?: any;
    index?: number;
    onFocusChange?: (index: number) => void;
}
declare const _default: React.ForwardRefExoticComponent<LocalProps & React.RefAttributes<unknown>>;
export default _default;
