import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passportRoutes from "./routes/passport.routes.js";
import { connectDB } from "./DB/db.config.js";
import "./config/passport.js"
const app = express();
dotenv.config();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use("/auth", passportRoutes);
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on PORT : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error : ", err);
  });
