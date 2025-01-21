/* eslint-disable @typescript-eslint/no-require-imports */

require("dotenv").config();

import express from "express";
import cors from "cors";
import * as fs from "fs";

const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const todosRoutes = require("./routes/todos");

// express app
const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// middleware
app.use(express.json());

// routes
app.use(
  "/api/todos",
  async (req, res, next) => {
    const token = req.headers.authorization?.replace("Bearer ", "");

    try {
      const location = process.env.AUTH0_PUBLIC_KEY_LOCATION as string;
      const cert = fs.readFileSync(location);
      const decoded = await jwt.verify(token, cert);
      res.locals.email = decoded.email;

      next();
    } catch (e) {
      console.log(e);
      res.sendStatus(401);
    }
  },
  todosRoutes
);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error: string) => {
    console.log(error);
  });
