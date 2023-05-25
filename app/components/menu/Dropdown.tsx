import * as React from "react";
import {ReactNode} from "react";
import {alpha, styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, {MenuProps} from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {Tooltip} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({theme}) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
            padding: "4px 0",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

export interface DropdownItem {
    itemContent: ReactNode;
    onClick?: (e: any) => void;
    bottomDividerNeeded?: boolean;
    disabled?: boolean;
    tooltip?: string;
}

interface Props {
    buttonTitle?: string;
    items: DropdownItem[];
    className?: string;
    variant?: "button" | "icon";
}

const Dropdown = ({
                      items,
                      buttonTitle = "Options",
                      className = "",
                      variant = "button",
                  }: Props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const getMenuItem = (
        itemContent: ReactNode,
        onClick: ((e: any) => void) | undefined,
        bottomDividerNeeded: boolean | undefined,
        disabled: boolean | undefined,
        tooltip: string | undefined,
        index: number
    ) => {
        const actAndClose = (e: any) => {
            if (onClick) {
                onClick(e);
            }

            handleClose();
        };

        const menuItem = () => (
            <div>
                <MenuItem
                    className="font-semibold text-[.7em] bg-indigo-50 hover:bg-indigo-200"
                    onClick={actAndClose}
                    disableRipple
                    disabled={!!disabled}
                >
                    {itemContent}
                </MenuItem>
                {bottomDividerNeeded && <Divider className="bg-indigo-50 m-0"/>}
            </div>
        );

        const menuItemWithTooltip = () => (
            <Tooltip title={tooltip} placement="right" arrow={true}>
                {menuItem()}
            </Tooltip>
        );

        return (
            <div key={`menuItem-${index}`}>
                {tooltip ? menuItemWithTooltip() : menuItem()}
            </div>
        );
    };

    return (
        <div className={className}>
            {variant === "button" && (
                <Button
                    id="demo-customized-button"
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    size={"small"}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon/>}
                >
                    {buttonTitle}
                </Button>
            )}
            {variant === "icon" && (
                <>
                    <IconButton
                        id="demo-customized-icon-button"
                        aria-controls={open ? "demo-customized-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        size="small"
                    >
                        <Avatar
                            sx={{
                                width: 50,
                                height: 50,
                                fontSize: "0.8rem",
                                backgroundColor: "#3b82f6",
                                right: 0,
                            }}
                        >
                            AS
                        </Avatar>
                    </IconButton>
                </>
            )}

            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {items.length > 0 &&
                    items.map((item: DropdownItem, index: number) => {
                        return getMenuItem(
                            item.itemContent,
                            item.onClick,
                            item.bottomDividerNeeded,
                            item.disabled,
                            item.tooltip,
                            index
                        );
                    })}
            </StyledMenu>
        </div>
    );
};

export default Dropdown;
