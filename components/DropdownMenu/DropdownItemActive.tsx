import Image from "next/image";

export const DropdownItemActive = ({ label }: { label?: string }) => {
  return (
    <div className="flex py-2 px-4 w-full font-bold justify-between items-center">
      {label}
      <Image src={"/down-icon-white.svg"} height={18} width={18} alt="down" />
    </div>
  );
};
