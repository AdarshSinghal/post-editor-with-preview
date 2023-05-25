import React, {ReactNode} from "react";
import Dropdown, {DropdownItem} from "@/app/components/menu/Dropdown";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface Props {
    tabsType: "section" | "element" | "item";
    onClickInsertLastMenu: (e: any) => void;
    onClickDeleteMenu: (e: any) => void;
    className?: string;
}

const PostEditorOptionDropdown = (props: Props) => {
    const {
        onClickInsertLastMenu,
        onClickDeleteMenu,
        tabsType,
        className = "",
    } = props;
    const getMenuItem = (
        itemContent: ReactNode,
        onClick: (e: any) => void,
        bottomDividerNeeded?: boolean,
        disabled?: boolean,
        tooltip?: string
    ): DropdownItem => {
        return {
            itemContent,
            onClick,
            bottomDividerNeeded,
            disabled,
            tooltip,
        };
    };

    const getItemButton = (icon: ReactNode, label: string) => (
        <>
            {icon}
            {label}
        </>
    );

    const menuItems = [
        getMenuItem(
            getItemButton(<AddIcon/>, "Insert last"),
            onClickInsertLastMenu,

            true,
            false,
            `Insert new ${tabsType} tab after the last tab`
        ),
        getMenuItem(
            getItemButton(<RemoveIcon/>, "Delete"),
            onClickDeleteMenu,
            false,
            false,
            `Delete current selected ${tabsType} tab`
        ),
    ];

    return <Dropdown className={className} items={menuItems}/>;
};

export default PostEditorOptionDropdown;
