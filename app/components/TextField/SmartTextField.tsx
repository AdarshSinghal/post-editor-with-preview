import React, {useState} from "react";
import GenericLengthIndicator from "@/app/components/TextField/GenericLengthIndicator";
import SimpleTextField from "@/app/components/TextField/SimpleTextField";

interface Props {
    id: string;
    label: string;
    maxLength?: number;
    setText?: (text: string) => void;
    defaultValue?: string;
    className?: string;
}

const SmartTextField = (props: Props) => {
    const {
        id,
        label,
        maxLength = 0,
        setText,
        defaultValue = "",
        className = "",
    } = props;
    const MAX_POINTS = 5;

    const [newPointsLeft, setNewPointsLeft] = useState<number>(MAX_POINTS);

    const setParentText = (text: string) => {
        if (setText!) {
            setText(text);
        }

        const computedPoints =
            MAX_POINTS - Math.floor((text.length * MAX_POINTS) / maxLength);
        if (computedPoints !== newPointsLeft) {
            setNewPointsLeft(computedPoints);
        }
    };

    return (
        <div className={`relative ${className}`}>
            <SimpleTextField
                id={id}
                label={label}
                maxLength={maxLength}
                onChange={setParentText}
                defaultValue={defaultValue}
            />
            <GenericLengthIndicator
                pointsLeft={newPointsLeft}
                maxPoints={MAX_POINTS}
            />
        </div>
    );
};

export default SmartTextField;
