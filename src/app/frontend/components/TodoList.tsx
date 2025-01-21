import { TodoItem } from "../../frontend/components/TodoItems";
import { TodoListProps } from "../../types/todo";

export const TodoList = ({
  todos,
  onToggleComplete,
  onEdit,
  onDelete,
}: TodoListProps) => (
  <ul>
    {todos.map((todo, index) => (
      <TodoItem
        key={todo._id || index}
        todo={todo}
        onToggle={() => onToggleComplete(todo._id)}
        onEdit={() => onEdit(todo._id, todo.task)}
        onDelete={() => onDelete(todo._id)}
      />
    ))}
  </ul>
);
