import React, { useEffect, useState } from "react";

export const ProgressBar = ({
  activeIndex,
  totalIndex,
}: {
  activeIndex: number;
  totalIndex: number;
}) => {
  const [width, setWidth] = useState("0");
  useEffect(() => {
    const widthNum = activeIndex + 1;
    const widthDenom = totalIndex;
    setWidth(`${widthNum}/${widthDenom}`);
    console.log(`${widthNum}/${widthDenom}`);
  }, [activeIndex, totalIndex]);

  return (
    <div
      className={
        width === "1/4"
          ? "h-6 bg-green-500 w-1/4"
          : width === "2/4"
          ? "h-6 bg-green-500 w-1/2"
          : width === "3/4"
          ? "h-6 bg-green-500 w-3/4"
          : "h-6 bg-green-500 w-full"
      }
    ></div>
  );
};
