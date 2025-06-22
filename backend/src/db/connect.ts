import mongoose from "mongoose";
import { config } from "dotenv";
config();

async function connectDB() {
  try {
    if (!process.env.MONGODB_STRING ) {
      throw new Error('MONGODB_STRING is not defined in environment variables');
    }
    await mongoose.connect(process.env.MONGODB_STRING );
    console.log("Database Connected Successfully");
  } catch (error) {
    throw new Error('Cannot Connect to MongoDB');
  }
}

async function disconnectDB() {
  try {
    await mongoose.disconnect();
  } catch (error) {
    throw new Error('Cannot Disconnect from MongoDB');
  }
}

export { connectDB, disconnectDB };