// index.js
import express from "express";
import cors from "cors";
import { connectDB } from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

const app = express();
app.use(cors());
app.use(express.json());

connectDB();
connectCloudinary()
app.get("/", (req, res) => {
  res.send("API running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
