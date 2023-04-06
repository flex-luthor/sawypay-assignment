import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { ProgressBar } from "./ProgressBar";

const dropDownData = ["Open", "In Progress", "Code Review", "Completed"];

interface TicketCardInterface {
  id?: string;
  name?: string;
  status?: string;
  description?: string;
  setStatus: (arg0: string) => void;
}

export const TicketCard = ({
  id,
  name,
  status,
  description,
  setStatus,
}: TicketCardInterface) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-gray-800">
      <div className="bg-gray-600/50 w-full max-w-[1000px] p-8 ">
        <div className="flex justify-between items-left md:items-center flex-col md:flex-row">
          <div>
            <div className="text-2xl font-bold text-purple-500">
              TICKET # {id}
            </div>
            <div className="text-4xl font-bold text-white">{name}</div>
          </div>

          <div className="mt-8 md:mt-0">
            <DropdownMenu
              active={status}
              setActive={setStatus}
              data={dropDownData}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>
        </div>
        <div className="p-4 bg-gray-900/50 mt-8 text-gray-400">
          {description}
        </div>
      </div>
      <ProgressBar activeIndex={activeIndex} totalIndex={dropDownData.length} />
    </div>
  );
};
