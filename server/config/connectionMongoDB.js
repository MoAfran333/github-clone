import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully!");
  } catch (e) {
    console.log("Database Connection Error : ", e.message);
  }
};

export default connectDB;
