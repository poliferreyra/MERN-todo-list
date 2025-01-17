require("dotenv").config();

import express from "express";
import cors from "cors";

const mongoose = require("mongoose");
const todosRoutes = require("./routes/todos");

const { auth, requiresAuth } = require("express-openid-connect");

// express app
const app = express();
app.use(cors());

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  secret: process.env.SECRET,
};

// middleware
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Permite solicitudes solo desde tu frontend
    credentials: true, // Si usas cookies/sesiones en Auth0
  })
);

app.use(auth(config));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/todos", requiresAuth(), todosRoutes);
app.get("/", (req, res) => {
  res.send((req as any).oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

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
