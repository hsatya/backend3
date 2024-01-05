import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

import connectDB from "./db/index.js";

connectDB();

//////////////////////////////////////////////////////////////////////////////
/*
import mongoose from "mongoose";
import express from "express";

import { DB_NAME } from "./constants.js";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Err: ", error);
      throw error;
    });

    console.log("DB is connected!");
    app.listen(process.env.PORT, () => {
      console.log(`App listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error in Connecting to DB: ", error);
    throw error;
  }
})();
*/
