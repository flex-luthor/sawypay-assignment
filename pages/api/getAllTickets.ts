import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

interface DataInterface {
  tickets: [ticketID?: string, ticketName?: string, ticketStatus?: string];
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const mongoClient = await clientPromise;

  const tickets = await mongoClient.db().collection("tickets").find().toArray();

  const data = {
    tickets: [tickets],
  };
  res.status(200).json(data);
};
