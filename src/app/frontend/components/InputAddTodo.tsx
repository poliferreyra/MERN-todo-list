import React, { useState } from "react";
import { Todo } from "app/types/todo";
import InputContainer from "../../styles/todoList/InputContainer";
import Input from "../../styles/todoList/Input";
import Button from "../../styles/todoList/Button";

import { addTodo } from "app/utils/api";
import { addNewTodo } from "app/redux/store/todoSlice";
import { useDispatch } from "react-redux";


export type TodoInput = Pick<Todo, "task" | "completed">;

export const InputAddTodo = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);

  // add task
  const handleAddTodo = () => {
    const newTodo: TodoInput = { task, completed };
    dispatch(addNewTodo(newTodo));

    addTodo(newTodo);
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
