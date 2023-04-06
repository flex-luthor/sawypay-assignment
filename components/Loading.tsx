import Image from "next/image";
import React from "react";

export const Loading = ({ label }: { label: string }) => {
  return (
    <div className="absolute top-10 flex items-center bg-gray-700 px-4 py-2 font-bold">
      <Image
        src="/loading.svg"
        width={32}
        height={32}
        alt="loading"
        className="mr-1 animate-spin"
      />
      {label}
    </div>
  );
};
