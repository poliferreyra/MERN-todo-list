import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 4000;

app.use(
  cors({
    origin: 'http://localhost:3000', // Permite el acceso desde tu frontend
  }),
);

app.use(express.json());

const todos: { id: number; text: string; completed: boolean }[] = [
  { id: 1, text: "Aprender React", completed: false },
  { id: 2, text: "Explorar Node.js", completed: true },
  { id: 3, text: "Practicar TypeScript", completed: false },
];

// Tus rutas
app.get('/api/todos', (req: Request, res: Response) => {
  res.json(todos);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});