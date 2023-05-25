import React from "react";
import {Alert, AlertColor} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
    message: string;
    typeColor: AlertColor;
}

const SimpleSnackbar = (props: Props) => {
    const {open, setOpen, message, typeColor} = props;

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            anchorOrigin={{vertical: "top", horizontal: "center"}}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity={typeColor}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default SimpleSnackbar;
