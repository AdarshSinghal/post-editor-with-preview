"use client";
import React, {useState} from "react";

interface Props {
    defaultValue: string;
    onChange?: (e: any) => void;
    rows?: number;
}

const TextArea = (props: Props) => {
    const {defaultValue, onChange, rows = 5} = props;

    const [text, setText] = useState(defaultValue);

    const border: string =
        "rounded-md border-2 border-indigo-300 active:border-indigo-600 outline-1 outline-indigo-600";

    const onChangeHandler = (e: any) => {
        setText(e.target.value);
        if (onChange !== undefined) {
            onChange(e);
        }
    };

    return (
        <textarea
            rows={rows}
            onChange={onChangeHandler}
            value={text}
            placeholder="Write here a paragraph..."
            className={`bg-indigo-50 resize-y mt-3 text-[0.9rem] font-medium py-1 px-2 w-full ${border}`}
        />
    );
};

export default TextArea;
