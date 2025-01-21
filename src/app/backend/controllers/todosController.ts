/* eslint-disable @typescript-eslint/no-require-imports */

// TODO ver este tema de las importaciones - probe de agregar un .eslintrc - con configuraciones... pero igual no se arregla 
const Todos = require("../models/todosModel");

import { Request, Response } from "express";

// get all todos
const getTodos = async (req: Request, res: Response): Promise<void> => {
  const getAllTodos = await Todos.find({ email: res.locals.email }).sort({
    createdAt: -1,
  });
  res.status(200).json(getAllTodos);
};

// get a single todo
const getTodoByID = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const { id } = req.params;

  //   //TODO chequear porque aca tampoco me muestra el error - TypeError: Cannot read properties of undefined (reading 'isValid')-
  // lo comento porque con esto no estaria funcionando el find en postman
  //   if (!mongoose.Types.ObjectID.isValid(id)) {
  //     return res.status(404).json({ error: "No such todo ID" });
  //   }

  const taskID = await Todos.findById(id);

  if (!taskID) {
    return res.status(404).json({ error: "No such todo ID" });
  }
  res.status(200).json(taskID);
};

// create new todos
const createTodo = async (req: Request, res: Response): Promise<void> => {
  const { task, completed } = req.body;
  // add doc to db
  try {
    const newtask = await Todos.create({
      task,
      completed,
      email: res.locals.email,
    });
    res.status(200).json(newtask);

    // TODO ver como se muestra el error porque en postman me me muestra el error en si sino un html
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

// delete a todo
const deleteTodoByID = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const { id } = req.params;

  //   //TODO chequear porque aca tampoco me muestra el error - TypeError: Cannot read properties of undefined (reading 'isValid')-
  // lo comento porque con esto no estaria funcionando el find en postman
  //   if (!mongoose.Types.ObjectID.isValid(id)) {
  //     return res.status(404).json({ error: "No such todo ID" });
  //   }

  const deleteTaskID = await Todos.findOneAndDelete({ _id: id });

  if (!deleteTaskID) {
    return res.status(400).json({ error: "No such todo ID" });
  }
  res.status(200).json(deleteTaskID);
};

// update a todo
const updateTaskID = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const { id } = req.params;

  //   //TODO chequear porque aca tampoco me muestra el error - TypeError: Cannot read properties of undefined (reading 'isValid')-
  // lo comento porque con esto no estaria funcionando el find en postman
  //   if (!mongoose.Types.ObjectID.isValid(id)) {
  //     return res.status(404).json({ error: "No such todo ID" });
  //   }

  const updateTask = await Todos.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });

  if (!updateTask) {
    return res.status(400).json({ error: "No such todo ID" });
  }
  res.status(200).json(updateTask);
};

module.exports = {
  getTodos,
  getTodoByID,
  createTodo,
  deleteTodoByID,
  updateTaskID,
};
