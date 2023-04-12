import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDatabase from "./config/MongoDb.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`Server run in port ${PORT}`));
