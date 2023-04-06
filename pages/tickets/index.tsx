import { useRouter } from "next/router";
import { useEffect } from "react";

const Tickets = () => {
  const { push } = useRouter();
  useEffect(() => {
    push("/tickets/1");
  }, []);
};

export default Tickets;
