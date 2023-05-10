import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./routes/users.js";
import { fileRouter } from "./routes/Files.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/auth", userRouter);
app.use("/", fileRouter);
// <====================  Connecting Database  ======================>

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("ALL OKK => Connect To MongoDB Database");
  })
  .catch((e) => {
    console.log(e);
  });

//   <==================   Starting Server  ===============================>
app.listen(process.env.PORT, () => {
  console.log("Server Started ON", process.env.PORT);
});
