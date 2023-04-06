import React, { useState } from "react";
import { server } from "../../../config/index";
import { TicketCard } from "../../../components/TicketCard";
import axios from "axios";
import { ErrorState } from "@/components/ErrorState";
import { Loading } from "@/components/Loading";

interface TicketInterface {
  data: {
    ticketID?: string;
    ticketName?: string;
    ticketStatus?: string;
    ticketDescription?: string;
    error?: string;
  };
}

const Ticket = ({ data }: TicketInterface) => {
  const [isLoading, setLoading] = useState(false);
  const [status, setStatus] = useState(data?.ticketStatus);

  const updateStatus = async (status: string) => {
    setLoading(true);
    try {
      const res = await axios.post(`${server}/api/updateTicketByID`, {
        ticketID: data?.ticketID,
        status: status,
      });
      setStatus(status);
      setTimeout(() => {
        setLoading(false);
      }, 400);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-full mt-40 items-center p-8 flex-col">
      {data.error ? (
        <ErrorState error={data.error} />
      ) : (
        <TicketCard
          id={data?.ticketID}
          name={data?.ticketName}
          description={data?.ticketDescription}
          status={status}
          setStatus={updateStatus}
        />
      )}
      {isLoading && <Loading label="Updating Status" />}
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const res = await fetch(`${server}/api/getTicketByID`, {
    method: "POST",
    body: JSON.stringify({ ticketID: context.query.ticketID }),
  });
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
}

export default Ticket;
