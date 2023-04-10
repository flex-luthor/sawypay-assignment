const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://sawypay-assignment.vercel.app' "; // Website name goes here
