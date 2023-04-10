import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

function validateStatusUpdate(nextStatus: string, prevStatus: string) {
  const options = ["Open", "In Progress", "Code Review", "Completed"];
  const diff = Math.abs(
    options.indexOf(nextStatus) - options.indexOf(prevStatus)
  );

  return diff <= 1;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const mongoClient = await clientPromise;
    const ticketID = req.body.ticketID;
    const status = req.body.status;

    const ticket = await mongoClient
      .db()
      .collection("tickets")
      .findOne({ ticketID: ticketID.toString() });
    if (!ticket) return res.status(400).json({ error: "Invalid ID" });

    const validStatusUpdate = validateStatusUpdate(
      status,
      ticket?.ticketStatus
    );
    if (!validStatusUpdate)
      return res.status(400).json({ error: "Invalid Status" });

    await mongoClient
      .db()
      .collection("tickets")
      .updateOne(
        { ticketID: ticketID },
        { $set: { ticketID: ticketID, ticketStatus: status } }
      );

    const newTicket = await mongoClient
      .db()
      .collection("tickets")
      .findOne({ ticketID: ticketID.toString() });

    res.status(200).json({ status: "UPDATED", data: newTicket });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
