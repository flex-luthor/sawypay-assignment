import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

interface DataInterface {
  ticketID?: string;
  ticketName?: string;
  ticketStatus?: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const mongoClient = await clientPromise;
    const body = req.body;
    const ticketID = body.ticketID;
    const ticket = await mongoClient
      .db()
      .collection("tickets")
      .findOne({ ticketID: ticketID });

    if (!ticket) return res.status(400).json({ error: "Invalid ID" });
    const data = {
      ticketID: ticket?.ticketID,
      ticketName: ticket?.ticketName,
      ticketStatus: ticket?.ticketStatus,
      ticketDescription: ticket?.ticketDescription,
    };
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
