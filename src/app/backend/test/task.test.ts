/* eslint-disable @typescript-eslint/no-require-imports */
require("dotenv").config();
const { createTodo } = require("../controllers/todosController");
const Todos = require("../models/todosModel");

import request from "supertest";
import mongoose from "mongoose";
import express from "express";

const app = express();

beforeAll(async () => {
  // middleware
  app.use(express.json());

  app.post(
    "/api/todos",
    (req, res, next) => {
      res.locals.email = "paoferreyra.fl@gmail.com";

      next();
    },
    createTodo
  );

  await mongoose.connect(process.env.MONGO_URI || "http://localhost");
});

it("should create a task and return it", async () => {
  const response = await request(app)
    .post("/api/todos")
    .send({ task: "Testing add new task", completed: false })
    .expect(200);

  expect(response.body).toHaveProperty("_id");
  expect(response.body.task).toBe("Testing add new task");
  expect(response.body.completed).toBe(false);

  const task = await Todos.findOne({ task: "Testing add new task" });
  expect(task).not.toBeNull();
});
