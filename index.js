// index.js
import express from "express";
import cors from "cors";
import { connectDB } from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import bodyParser from 'body-parser';
const app = express();
app.use(cors());
app.use(express.json());


// Body-parser middleware (add these lines)
app.use(express.json()); // Instead of bodyParser.json()
app.use(express.urlencoded({ extended: true }));

connectDB();
connectCloudinary()

// api endpoints

app.use('/api/admin',adminRouter)
// localhost://4000/api/admin/add-doctor
app.get("/", (req, res) => {
  res.send("API running...");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
