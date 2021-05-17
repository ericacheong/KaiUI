import React from "react";
import "./Audio.scss";
interface LocalProps {
    url: string;
}
declare type Props = LocalProps;
interface LocalState {
    isPlaying: boolean;
}
declare class AudioComponent extends React.Component<Props, LocalState> {
    private audioElem;
    constructor(props: any);
    startPlayback: () => void;
    pausePlayback: () => void;
    stopPlayback: () => void;
    render(): JSX.Element;
}
export default AudioComponent;
