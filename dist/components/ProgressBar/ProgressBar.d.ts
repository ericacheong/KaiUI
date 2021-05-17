import React from 'react';
import './ProgressBar.scss';
interface LocalProps {
    header: string;
    type: "download" | "buffer";
    percentage: number;
    forwardedRef?: any;
    focusColor?: string;
    index?: number;
    onFocusChange?: (index: number) => void;
}
declare const _default: React.ForwardRefExoticComponent<LocalProps & React.RefAttributes<unknown>>;
export default _default;
