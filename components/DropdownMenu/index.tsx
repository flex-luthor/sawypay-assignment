import React, { useEffect, useMemo, useState } from "react";
import { DropdownItemActive } from "./DropdownItemActive";
import { DropdownItem } from "./DropdownItem";

interface DropdowMenuInterface {
  active?: string;
  setActive: (arg0: string) => void;
  data: string[];
}

const DropdownMenu = ({ active, setActive, data }: DropdowMenuInterface) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const index = data.findIndex((el) => {
      return el === active;
    });
    setActiveIndex(index);
  }, [active]);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full md:w-64 border-2  text-white border-white cursor-pointer">
        <DropdownItemActive label={active} />
      </div>
      {isOpen && (
        <div className="absolute -bottom-112 w-full md:w-64">
          {data.map((el, i) => {
            return (
              <DropdownItem
                key={i}
                label={el}
                setActive={(label) => {
                  setIsOpen(false);
                  setActive(label);
                }}
                disabled={Math.abs(i - activeIndex) > 1}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
