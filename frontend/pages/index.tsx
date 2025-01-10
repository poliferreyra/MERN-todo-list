// "use client";  // Asegúrate de que esta línea esté presente para habilitar el uso de hooks en el cliente

// import { useEffect, useState } from 'react';
// import { getTodos } from '../utils/api';
// import React from 'react';  

// interface Todo {
//   id: number;
//   task: string;
//   completed: boolean;
// }

// const Home = () => {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   useEffect(() => {
   
//     const fetchTodos = async () => {
//       const data = await getTodos();
//       setTodos(data); 
//     };

//     fetchTodos();
//   }, []); 

//   return (
//     <div>
//       <h1>Mis Tareas</h1>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.task} - {todo.completed ? 'Completado' : 'Pendiente'}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home; 
