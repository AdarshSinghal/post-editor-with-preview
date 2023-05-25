import React, { useEffect, useState } from "react";
import { useSnackBar } from "@/app/components/SimpleSnackBar/SnackBarContext";

interface Props {
  id: string;
  label: string;
  maxLength?: number;
  onChange?: (text: string) => void;
  defaultValue?: string;
}

const SimpleTextField = (props: Props) => {
  const { id, label, maxLength = 9999, onChange, defaultValue = "" } = props;
  const [text, setText] = useState<string>(defaultValue);

  const snackBarContextActions = useSnackBar();

  useEffect(() => {
    if (text.length > maxLength) {
      const maxText = text.substring(0, maxLength);
      setText(maxText);
      if (onChange!) {
        onChange(maxText);
      }
    }
  }, [onChange, text, maxLength]);

  const onTextChange = (e: any) => {
    const showSnackbar = () => {
      const message = `Only ${maxLength} characters are allowed`;
      snackBarContextActions.showSnackBar(message, "warning");
    };

    const updateText = () => {
      setText(newValue);
      if (onChange!) {
        onChange(newValue);
      }
    };

    const newValue = e.target.value;
    if (newValue.length > maxLength) {
      showSnackbar();
      return;
    }
    updateText();
  };

  const getLabel = () => {
    const peerFocus =
      "peer-focus:text-indigo-600 peer-focus:font-bold peer-focus:top-2 peer-focus:-translate-y-5";
    const peer: string = `${peerFocus} peer-placeholder-shown:scale-105 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2`;
    const positioning: string =
      "absolute -translate-y-5 top-2 z-10 origin-[0] left-2";
    return (
      <label
        htmlFor={id}
        className={`cursor-text text-indigo-400 duration-200 scale-75 bg-indigo-50 px-1 ${positioning} ${peer}`}
      >
        {label}
      </label>
    );
  };

  return (
    <>
      <div className="relative w-[-webkit-fill-available]">
        <input
          type="text"
          id={id}
          placeholder={" "}
          value={text}
          onChange={onTextChange}
          className="rounded-md border-2 block pl-2 pr-14 pb-1 pt-3 w-full text-gray-900 focus:outline-none peer border-indigo-400 focus:border-indigo-600 bg-indigo-50"
        />
        {getLabel()}
      </div>
    </>
  );
};

export default SimpleTextField;
