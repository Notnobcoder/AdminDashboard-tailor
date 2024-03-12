import db from "@/lib/db";

export const connectToDatabase = async () => {
  try {
    await db.$connect();
  } catch (error) {
    throw new Error("unable to connect to database");
  }
};
