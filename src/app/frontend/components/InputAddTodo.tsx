import React, { useState } from "react";
import { Todo } from "app/types/todo";
import InputContainer from "../../styles/todoList/InputContainer";
import Input from "../../styles/todoList/Input";
import Button from "../../styles/todoList/Button";
import axios from "axios";

interface InputAddTodoProps {
  onAddTodo: (newTodo: Todo) => void;
}

type TodoInput = Pick<Todo, "task" | "completed">;

export const InputAddTodo: React.FC<InputAddTodoProps> = ({ onAddTodo }) => {
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);

  const addTodo = async () => {
    const newTodo: TodoInput = { task, completed };

    try {
      // Realiza la solicitud POST para agregar la tarea
      await axios.post("http://localhost:4000/api/todos", newTodo);

      // Crea un objeto con un _id temporal antes de pasarlo al padre
      const tempTodo: Todo = { ...newTodo, _id: "" };

      onAddTodo(tempTodo);

      setTask("");
      setCompleted(false);
    } catch (error) {
      console.error("Error al agregar la tarea:", error);
      alert("Hubo un problema al agregar la tarea.");
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
      <Button onClick={addTodo}>Agregar</Button>
    </InputContainer>
  );
};
