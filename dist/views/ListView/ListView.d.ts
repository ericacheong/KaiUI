import React from 'react';
import { ReactElements } from './../../utils/types';
import './ListView.scss';
interface LocalProps {
    isActive?: boolean;
    children: ReactElements;
    onChangeIndex?: (index: number) => void;
    className?: string;
}
declare const ListView: React.NamedExoticComponent<LocalProps>;
export default ListView;
