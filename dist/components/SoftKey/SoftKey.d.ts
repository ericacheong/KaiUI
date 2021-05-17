import React from 'react';
import './SoftKey.scss';
interface SoftKeyProps {
    leftText?: string | null;
    centerText?: string | null;
    rightText?: string | null;
    centerIcon?: any | null;
    leftIcon?: any | null;
    rightIcon?: any | null;
    leftCallback?: () => void;
    centerCallback?: () => void;
    rightCallback?: () => void;
}
declare const SoftKey: React.NamedExoticComponent<SoftKeyProps>;
export default SoftKey;
