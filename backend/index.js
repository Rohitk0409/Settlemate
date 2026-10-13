import "dotenv/config";
import express from "express";
import conectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("SettleMate Backend is Running!");
});

const startServer = async () => {
  try {
    await conectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
