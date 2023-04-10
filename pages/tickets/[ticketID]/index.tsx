import React, { useState } from "react";
import { server } from "../../../config/index";
import { TicketCard } from "../../../components/TicketCard";
import axios from "axios";
import { ErrorState } from "@/components/ErrorState";
import { Loading } from "@/components/Loading";
import { getTicket, updateTicket } from "@/utils/api";

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
      await updateTicket(data?.ticketID, status);
      setStatus(status);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
  const res = await getTicket(context.query.ticketID);
  const data = res.data;
  return {
    props: {
      data,
    },
  };
}

export default Ticket;
