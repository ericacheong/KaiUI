import React from 'react';
import './Slider.scss';
import { SoftKeyContextProps } from '../SoftKey/SoftKeyProvider';
interface LocalProps {
    header: string;
    initialValue?: number;
    maxValue?: number;
    minValue?: number;
    stepSize?: number;
    focusColor?: string;
    forwardedRef?: any;
    index?: number;
    onFocusChange?: (index: number) => void;
    softKeyManager?: SoftKeyContextProps;
    softKeyLeftText?: string;
    softKeyRightText?: string;
}
declare const _default: React.ForwardRefExoticComponent<LocalProps & React.RefAttributes<unknown>>;
export default _default;
