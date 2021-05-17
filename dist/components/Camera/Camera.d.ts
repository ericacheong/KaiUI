import React from 'react';
import './Camera.scss';
interface LocalProps {
    sendFile: BlobCallback;
    focusClass: string;
}
interface LocalState {
    showImage: boolean;
    blob: Blob | undefined;
}
export declare class Camera extends React.Component<LocalProps, LocalState> {
    private videoPlayer;
    private canvas;
    constructor(props: any);
    processDevices(devices: any): void;
    setDevice(device: any): Promise<void>;
    componentDidMount(): Promise<void>;
    takePhoto: () => void;
    render(): JSX.Element;
}
export {};
