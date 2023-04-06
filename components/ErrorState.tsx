import React from "react";

export const ErrorState = ({ error }: { error: string }) => {
  return (
    <div className="bg-gray-700 p-8 font-bold flex flex-col">
      <span className="text-purple-500 text-xl"># Error</span>
      <div className="text-4xl">{error}</div>
    </div>
  );
};
