import mongoose from "mongoose";
import { DB_NAME } from "../utils/Constant.utils.js";

const DB_connection = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`);
    console.log(`✅ MongoDB connected successfully at: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default DB_connection;
