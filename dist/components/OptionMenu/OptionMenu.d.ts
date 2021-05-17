import React from "react";
import './OptionMenu.scss';
interface LocalProps {
    header: string;
    children: any[];
    onChangeIndex?: (index: number) => void;
    isActive: boolean;
    onExit: () => void;
    enableSearch?: boolean;
}
declare const OptionMenu: React.NamedExoticComponent<LocalProps>;
export default OptionMenu;
