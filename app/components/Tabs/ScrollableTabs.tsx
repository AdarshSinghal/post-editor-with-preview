"use client";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {ReactNode, SyntheticEvent, useEffect} from "react";

interface Props {
    data: Map<string, ReactNode>;
    value: string;
    setValue: (newValue: string) => void;
    className?: string;
    optionElement?: ReactNode;
}

const ScrollableTabs = (props: Props) => {
    const {data, value, setValue, className = "", optionElement} = props;

    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    useEffect(() => {
    }, [value]);

    return (
        <Box className={className}>
            <TabContext value={value}>
                <div className="grid grid-cols-12">
                    <div className="col-span-10">
                        <TabList
                            variant="scrollable"
                            scrollButtons="auto"
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                        >
                            {Array.from(data.keys()).map((label: string, index: number) => {
                                return (
                                    <Tab
                                        key={`tab-label-key-${index}`}
                                        label={label}
                                        value={index.toString()}
                                    />
                                );
                            })}
                        </TabList>
                    </div>
                    {optionElement && <div className="col-span-2">{optionElement}</div>}
                </div>

                {Array.from(data.keys()).map((label: string, index: number) => {
                    return (
                        <TabPanel key={`tab-element-key-${index}`} value={index.toString()}>
                            {data.get(label)}
                        </TabPanel>
                    );
                })}
            </TabContext>
        </Box>
    );
};
export default ScrollableTabs;
