import { server } from "@/config";
import axios from "axios";

export const updateTicket = async (ticketID?: string, status?: string) => {
  const res = await axios.post(`${server}/api/updateTicketByID`, {
    ticketID: ticketID,
    status: status,
  });
  return res;
};

export const getTicket = async (ticketID?: string) => {
  if (ticketID) {
    const res = await axios.post(`${server}/api/getTicketByID`, {
      ticketID: ticketID,
    });
    return res;
  } else {
    const res = await axios.post(`${server}/api/getAllTickets`);
    return res;
  }
};
