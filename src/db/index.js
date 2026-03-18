import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI?.trim();

    if (!mongoUri) {
      throw new Error(
        "MONGODB_URI is not set. Add it to .env or your shell environment."
      );
    }

    const connectionInstance = await mongoose.connect(`${mongoUri}/${DB_NAME}`);

    console.log(
      `MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
