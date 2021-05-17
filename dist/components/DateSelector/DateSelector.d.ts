import React from 'react';
import './DateSelector.scss';
interface LocalProps {
    onOK: (res?: Date | null) => void;
    onCancel: () => void;
    header: React.ElementType | string | undefined;
    inputOptions: any;
    minDate: Date;
    maxDate: Date;
    initialDate: Date;
}
interface DateSelectorEvents {
    close: () => void;
}
declare type Props = LocalProps & DateSelectorEvents;
interface LocalState {
    isLoading: boolean;
    years: number[];
    months: string[];
    days: number[];
    selectedMonth: number;
    selectedDay: number;
    selectedYear: number;
}
declare class DateSelector extends React.Component<Props, LocalState> {
    private input;
    constructor(props: Props);
    componentDidMount(): void;
    onKeyDown: (e: any) => void;
    closeWindow(): void;
    render(): JSX.Element;
    calcSelectedDate(): Date;
    setYear(index: number): void;
    setMonth(index: number): void;
    setDay(index: number): void;
    resetDaysForNewMonthYear(): void;
}
declare function showDateSelctor(config: LocalProps): void;
export { showDateSelctor };
export default DateSelector;
