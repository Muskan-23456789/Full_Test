import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/dbConfig.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
dbConnect();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
