import React from 'react';
import './ScrollingListView.scss';
import { ReactElements } from '../../utils/types';
interface LocalProps {
    children: ReactElements;
    onChangeIndex?: (index: number) => void;
    isActive: boolean;
    className?: string;
    initialSelectedIndex?: number;
}
declare const ScrollingListView: React.NamedExoticComponent<LocalProps>;
export default ScrollingListView;
