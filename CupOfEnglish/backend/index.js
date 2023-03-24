import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

//Routers

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://admin:admin123@cluster0.fxgjs.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    )
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      throw err;
    });
};

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true }));

app.listen(PORT, () => {
  connectDB();
  console.log(`port is listening on ${PORT}`);
  console.log("express connected");
});
