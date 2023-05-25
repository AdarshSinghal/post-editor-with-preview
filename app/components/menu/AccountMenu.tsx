"use client";
import { ReactNode } from "react";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Dropdown, { DropdownItem } from "./Dropdown";

interface Props {
  className?: string;
  name: string;
}

const AccountMenu = (props: Props) => {
  const { className = "", name } = props;
  const getMenuItem = (
    itemContent: ReactNode,
    onClick: ((e: any) => void) | undefined,
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

  const profileInformation = (
    <div className={`cursor-auto flex ${className}`}>
      <Avatar
        sx={{ height: "50px", width: "50px", margin: 1, bgcolor: "#6366f1" }}
      >
        {name
          .split(" ")
          .map((part) => String.fromCharCode(part.charCodeAt(0)).toUpperCase())}
      </Avatar>
      <div className="text-sm pl-3 mr-2 font-semibold self-center">
        <div>{name}</div>
        <div className="text-[.5rem]">adarsh695@gmail.com</div>
      </div>
    </div>
  );

  const settings = (
    <>
      <ListItemIcon>
        <Settings fontSize="small" />
      </ListItemIcon>
      Settings
    </>
  );

  const logout = (
    <>
      <ListItemIcon>
        <Logout fontSize="small" />
      </ListItemIcon>
      Logout
    </>
  );

  const oncClickLogout = (e: any) => {
    alert("Logout");
  };

  const onCLickSettings = (e: any) => {
    alert("Settings");
  };

  const getItems = () => [
    getMenuItem(profileInformation, undefined, true, false, undefined),
    getMenuItem(
      settings,
      onCLickSettings,

      false,
      false,
      undefined
    ),
    getMenuItem(logout, oncClickLogout, false, false, undefined),
  ];

  return <Dropdown className="text-right" items={getItems()} variant="icon" />;
};

export default AccountMenu;
