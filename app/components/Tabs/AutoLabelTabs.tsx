import React, {ReactNode} from "react";
import ScrollableTabs from "@/app/components/Tabs/ScrollableTabs";

interface Props {
    labelPrefix?: string;
    elements: ReactNode[];
    value: string;
    setValue: (newValue: string) => void;
    className?: string;
    tabsSiblingReactNode?: ReactNode;
}

const AutoLabelTabs = (props: Props) => {
    const {
        labelPrefix = "",
        elements,
        value,
        setValue,
        className,
        tabsSiblingReactNode,
    } = props;
    const tabData = new Map<string, ReactNode>();

    elements.forEach((element: ReactNode, index: number) => {
        const tooManyElements = elements.length > 5;
        const prefix = tooManyElements ? "" : `${labelPrefix}`;
        const label = `${prefix} ${index + 1}`;
        tabData.set(label, element);
    });

    const setNewValue = (newValue: string) => {
        setValue(newValue);
    };

    return (
        <ScrollableTabs
            optionElement={tabsSiblingReactNode}
            value={value}
            setValue={(newValue) => setNewValue(newValue)}
            data={tabData}
            className={className}
        />
    );
};

export default AutoLabelTabs;
