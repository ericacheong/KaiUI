import React from 'react';
import './TabView.scss';
import { ReactElements } from '../../utils/types';
interface LocalProps {
    tabLabels: string[];
    onChangeIndex?: (index: number) => void;
    focusColor?: string;
    children: ReactElements;
}
declare const TabView: React.NamedExoticComponent<LocalProps>;
export default TabView;
