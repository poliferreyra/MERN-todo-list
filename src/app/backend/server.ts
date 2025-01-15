require("dotenv").config();

import express from "express";
import cors from "cors";
// const cors = require('cors');

const mongoose = require("mongoose");
const todosRoutes = require("./routes/todos");



// express app
const app = express();
app.use(cors());

// middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" })); // Aquí configuramos CORS

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/todos", todosRoutes);

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
