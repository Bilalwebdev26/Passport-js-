import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
export const connectDB = async () => {
  try {
    const connect =  await mongoose.connect(`${process.env.MONGODB_URI}/google`)
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDb connection error", error);
    process.exit(1);
  }
};
