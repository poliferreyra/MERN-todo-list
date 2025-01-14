import {TodoItem} from "../../frontend/components/TodoItems";
import { TodoListProps } from "../../types/todo";

export const TodoList = ({ todos, onToggleComplete, onEdit, onDelete }: TodoListProps) => (
    <ul>
      {todos.map((todo) => ( 
        <TodoItem
          key={todo.id}
          todo={todo}  
          onToggle={() => onToggleComplete(todo.id)}  
          onEdit={() => onEdit(todo.id)} 
          onDelete={() => onDelete(todo.id)}  
        />
      ))}
    </ul>
  );