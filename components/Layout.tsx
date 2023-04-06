import { PropsWithChildren } from "react";
import { Meta } from "./Meta";

export const Layout = (props: PropsWithChildren) => {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <Meta />
      {props.children}
    </div>
  );
};
