import React, {useState} from "react";

interface Props {
    name?: string;
    valueLabelList: ValueLabel[];
    onChange: (e: any) => void;
    defaultValue?: string;
}

export interface ValueLabel {
    value: string;
    label: string;
}

const Select = (props: Props) => {
    const {name, valueLabelList, onChange, defaultValue} = props;
    const isValidInput = valueLabelList.length > 0;
    const initialState =
        isValidInput && defaultValue === undefined
            ? valueLabelList[0].value
            : defaultValue;
    const [selectedValue, setSelectedValue] = useState(initialState);

    const active: string = "active:text-gray-500 active:border-indigo-300";
    const border: string =
        "rounded-md border-2 border-indigo-300 outline-1 outline-indigo-400";
    const shadow: string =
        "shadow-[rgba(0,_0,_0,_0.14)_0px_0px_8px] active:shadow-none";

    const customOnChange = (e: any) => {
        setSelectedValue(e.target.value);
        onChange(e);
    };

    return (
        <select
            name={name}
            onChange={customOnChange}
            value={selectedValue}
            className={`${shadow} ${active} ${border} min-w-[150px] py-[5px] px-2 cursor-pointer bg-indigo-50`}
        >
            {isValidInput &&
                valueLabelList.map(({value, label}, index: number) => (
                    <option key={`option-key-${value}-${index}`} value={value}>
                        {label}
                    </option>
                ))}
        </select>
    );
};

export default Select;
