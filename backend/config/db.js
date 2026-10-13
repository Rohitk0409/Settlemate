import mongoose from "mongoose";

const conectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongooDB database connected successfuly!");
  } catch (e) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

export default conectDB;
