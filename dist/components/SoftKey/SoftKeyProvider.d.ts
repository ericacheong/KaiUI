import React from 'react';
interface LocalProps {
    className?: string;
}
interface LocalState {
    leftText: string | null;
    centerText: string | null;
    rightText: string | null;
    centerIcon: any | null;
    leftIcon: any | null;
    rightIcon: any | null;
    leftCallback?: () => void;
    centerCallback: () => void;
    rightCallback: () => void;
}
export declare const SoftKeyContext: React.Context<SoftKeyContextProps>;
export interface SoftKeyContextProps {
    setLeftCallback: (leftCallback: () => void) => void;
    setRightCallback: (rightCallback: () => void) => void;
    setCenterCallback: (centerCallback: () => void) => void;
    setLeftText: (leftText: any) => void;
    setRightText: (rightText: any) => void;
    setCenterText: (centerText: any) => void;
    setLeftIcon: (leftIcon: any) => void;
    setCenterIcon: (centerIcon: any) => void;
    setRightIcon: (rightIcon: any) => void;
    setSoftKeyTexts: ({ leftText, centerText, rightText }: {
        leftText?: string | undefined;
        centerText?: string | undefined;
        rightText?: string | undefined;
    }) => void;
    setSoftKeyCallbacks: ({ leftCallback, centerCallback, rightCallback, }: {
        leftCallback?: (() => void) | undefined;
        centerCallback?: (() => void) | undefined;
        rightCallback?: (() => void) | undefined;
    }) => void;
    unregisterSoftKeys: () => void;
}
export declare class SoftKeyProvider extends React.PureComponent<LocalProps, LocalState> {
    constructor(props: LocalProps);
    setLeftCallback: (leftCallback: () => void) => void;
    setRightCallback: (rightCallback: () => void) => void;
    setCenterCallback: (centerCallback: () => void) => void;
    setLeftText: (leftText: any) => void;
    setRightText: (rightText: any) => void;
    setCenterText: (centerText: any) => void;
    setCenterIcon: (centerIcon: any) => void;
    setLeftIcon: (leftIcon: any) => void;
    setRightIcon: (rightIcon: any) => void;
    setSoftKeyTexts: ({ leftText, centerText, rightText }: {
        leftText?: string;
        centerText?: string;
        rightText?: string;
    }) => void;
    setSoftKeyCallbacks: ({ leftCallback, centerCallback, rightCallback, }: {
        leftCallback?: () => void;
        centerCallback?: () => void;
        rightCallback?: () => void;
    }) => void;
    unregisterSoftKeys: () => void;
    render(): JSX.Element;
}
export {};
