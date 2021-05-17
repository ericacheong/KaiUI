import React from 'react';
import './Dialog.scss';
interface LocalProps {
    type: 'prompt' | 'confirm' | 'info';
    onOK: (res?: string | null) => void;
    onCancel: () => void;
    onClose: () => void;
    close: () => void;
    header: React.ElementType | string | undefined;
    content: React.ElementType | string | undefined;
    inputOptions: any;
}
declare type Props = LocalProps;
declare class Dialog extends React.Component<Props> {
    private input;
    constructor(props: Props);
    onKeyDown: (e: any) => void;
    close(): void;
    render(): JSX.Element;
}
declare function promptDialog(props: any): void;
declare function confirmDialog(props: any): void;
declare function infoDialog(props: any): void;
export { promptDialog, infoDialog, confirmDialog };
export default Dialog;
