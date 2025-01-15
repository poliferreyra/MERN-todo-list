import React, { useState } from "react";
import { Todo } from "app/types/todo";
import InputContainer from "../../styles/todoList/InputContainer";
import Input from "../../styles/todoList/Input";
import Button from "../../styles/todoList/Button";
import axios from "axios";

interface InputAddTodoProps {
  onAddTodo: (newTodo: Todo) => void; 
}


export const InputAddTodo: React.FC<InputAddTodoProps> = ({ onAddTodo }) => {
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);

  // TODO ver error de tipado 
  const addTodo = async () => {
    const newTodo: Todo = { task, completed };

    try {
      // Realiza la solicitud POST para agregar la tarea
      await axios.post("http://localhost:4000/api/todos", newTodo);
      
      // Pasa la nueva tarea al componente padre (Home)
      onAddTodo(newTodo);

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
        placeholder="Nueva tarea..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button onClick={addTodo}>Agregar</Button>
    </InputContainer>
  );
};
