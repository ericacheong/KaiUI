import React from 'react';
import './TriColumnListView.scss';
import { ReactElements } from '../../utils/types';
interface LocalProps {
    onChangeIndex?: (index: number) => void;
    focusColor?: string;
    col1Children: ReactElements;
    col2Children: ReactElements;
    col3Children: ReactElements;
    onCol1ChangeIndex?: (index: number) => void;
    onCol2ChangeIndex?: (index: number) => void;
    onCol3ChangeIndex?: (index: number) => void;
    selectedCol1Index?: number;
    selectedCol2Index?: number;
    selectedCol3Index?: number;
}
declare const TriColListView: React.NamedExoticComponent<LocalProps>;
export default TriColListView;
