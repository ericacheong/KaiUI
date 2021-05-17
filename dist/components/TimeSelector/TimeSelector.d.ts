import React from 'react';
import './TimeSelector.scss';
export interface Time {
    hour: number;
    minute: number;
    period: string;
}
interface LocalProps {
    onOK: (res?: Time | null) => void;
    onCancel: () => void;
    header: React.ElementType | string | undefined;
    inputOptions: any;
    initialTime: Time;
}
interface TimeSelectorEvents {
    close: () => void;
}
declare type Props = LocalProps & TimeSelectorEvents;
interface LocalState {
    isLoading: boolean;
    hours: number[];
    minutes: number[];
    periods: string[];
    selectedHour: number;
    selectedMinute: number;
    selectedPeriod: string;
}
declare class TimeSelector extends React.Component<Props, LocalState> {
    constructor(props: Props);
    componentDidMount(): void;
    onKeyDown: (e: any) => void;
    closeWindow(): void;
    render(): JSX.Element;
    calcSelectedTime(): Time;
    setHour(index: number): void;
    setMinute(index: number): void;
    setPeriod(index: number): void;
}
declare function showTimeSelector(config: LocalProps): void;
export { showTimeSelector };
export default TimeSelector;
