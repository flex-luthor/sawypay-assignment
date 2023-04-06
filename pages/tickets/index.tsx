import { useRouter } from "next/router";
import React, { useEffect } from "react";

const tickets = () => {
  const { push } = useRouter();
  useEffect(() => {
    push("/tickets/1");
  }, []);
};

export default tickets;
