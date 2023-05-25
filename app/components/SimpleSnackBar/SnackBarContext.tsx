"use client";
import React, {createContext, useContext, useState} from "react";
import {AlertColor} from "@mui/material";
import SimpleSnackbar from "@/app/components/SimpleSnackBar/SimpleSnackbar";

type SnackBarContextActions = {
    showSnackBar: (text: string, typeColor: AlertColor) => void;
};

const SnackBarContext = createContext({} as SnackBarContextActions);

interface SnackBarContextProviderProps {
    children: React.ReactNode;
}

const SnackBarProvider: React.FC<SnackBarContextProviderProps> = ({
                                                                      children,
                                                                  }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [typeColor, setTypeColor] = useState<AlertColor>("info");

    const showSnackBar = (text: string, color: AlertColor) => {
        setMessage(text);
        setTypeColor(color);
        setOpen(true);
    };

    return (
        <SnackBarContext.Provider value={{showSnackBar}}>
            <SimpleSnackbar
                open={open}
                setOpen={setOpen}
                message={message}
                typeColor={typeColor}
            />
            {children}
        </SnackBarContext.Provider>
    );
};

const useSnackBar = (): SnackBarContextActions => {
    const context = useContext(SnackBarContext);

    if (!context) {
        throw new Error("useSnackBar must be used within an SnackBarProvider");
    }

    return context;
};

export {SnackBarProvider, useSnackBar};
