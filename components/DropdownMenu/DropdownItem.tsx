import React from "react";

interface DropdownItemInterface {
  label: string;
  setActive: (arg0: string) => void;
  disabled: boolean;
}

export const DropdownItem = ({
  label,
  setActive,
  disabled,
}: DropdownItemInterface) => {
  return (
    <div
      className={
        disabled
          ? "flex py-2 px-4 w-full font-bold border-x-2 border-b bg-gray-700  border-white/50 text-white/50"
          : "flex py-2 px-4 w-full font-bold border-x-2 border-b bg-gray-700 hover:bg-white hover:text-purple-500 cursor-pointer"
      }
      onClick={() => {
        if (disabled) {
          return;
        }
        setActive(label);
      }}
    >
      {label}
    </div>
  );
};
