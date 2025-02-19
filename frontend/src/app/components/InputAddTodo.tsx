import React, { useState } from "react";

import { addNewTodo } from "app/redux/store/todoSlice";

import { Todo } from "../types/todo";
import InputContainer from "../styles/todolist/InputContainer";
import Input from "../styles/todolist/Input";
import Button from "../styles/todolist/Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../utils/api";

export type TodoInput = Pick<Todo, "task" | "completed">;

export const InputAddTodo = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  // add task
  const handleAddTodo = async () => {
    try {
      const newTodo: TodoInput = { task, completed: false };
      const dbNewTodo = await addTodo(newTodo);
      dispatch(addNewTodo(dbNewTodo));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <InputContainer>
      <Input
        type="text"
        placeholder="Add new Task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button onClick={handleAddTodo}>Agregar</Button>
    </InputContainer>
  );
};
