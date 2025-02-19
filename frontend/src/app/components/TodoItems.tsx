import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";

import { TodoItemProps } from "../types/todo";
import TodoItemWrapper from "../styles/todolist/TodoItemWrapper";
import TodoText from "../styles/todolist/TodoText";

export const TodoItem = ({
  todo,
  onToggle,
  onEdit,
  onDelete,
}: TodoItemProps) => (
  <TodoItemWrapper $completed={todo.completed}>
    <TodoText $completed={todo.completed}>{todo.task}</TodoText>
    <FaCheck
      onClick={onToggle}
      style={{ color: "green", cursor: "pointer", marginRight: "10px" }}
    />
    <FaEdit
      onClick={onEdit}
      style={{ color: "blue", cursor: "pointer", marginRight: "10px" }}
    />
    <FaTrash onClick={onDelete} style={{ color: "red", cursor: "pointer" }} />
  </TodoItemWrapper>
);
