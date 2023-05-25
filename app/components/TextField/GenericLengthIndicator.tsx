import React, { useEffect, useState } from "react";
import { Tooltip } from "@mui/material";

interface Props {
  pointsLeft: number;
  maxPoints: number;
}

const GenericLengthIndicator = (props: Props) => {
  const { pointsLeft, maxPoints } = props;

  const indigo: string = "text-indigo-400";

  const [pointsColor, setPointsColor] = useState<string>(indigo);

  useEffect(() => {
    const pointsColorList = [
      indigo,
      indigo,
      "text-purple-400",
      "text-orange-400",
      "text-red-600",
    ];
    const lastIndex: number = pointsColorList.length - 1;
    let index = lastIndex - Math.floor((lastIndex * pointsLeft) / maxPoints);
    if (index < 0) {
      index = 0;
    }
    if (index >= maxPoints) {
      index = maxPoints - 1;
    }
    setPointsColor(pointsColorList[index]);
  }, [pointsLeft, maxPoints]);

  const getTextPoints = () => {
    let pointsText = "";
    for (let i = 0; i < pointsLeft; i++) {
      pointsText += "|";
    }
    return pointsText;
  };

  const positioning: string = "text-[29px] right-[6px] top-[6px] pr-[1px]";

  return (
    <Tooltip title="Indicator of good title length" arrow={true}>
      <span className={`font-black absolute ${positioning} ${pointsColor}`}>
        {getTextPoints()}
      </span>
    </Tooltip>
  );
};

export default GenericLengthIndicator;
