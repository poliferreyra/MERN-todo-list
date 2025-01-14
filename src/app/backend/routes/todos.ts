import express from "express";

const {
  createTodo,
  getTodos,
  getTodoByID,
  deleteTodoByID,
  updateTaskID,
} = require("../controllers/todosController");

const router = express.Router();

// GET  all todos
router.get("/", getTodos);

// GET an ID task
router.get("/:id", getTodoByID);

// POST  a new task
router.post("/", createTodo);

// DELETE an ID task
router.delete("/:id", deleteTodoByID);

// UPDATE  a task
router.put("/:id", updateTaskID);

module.exports = router;
