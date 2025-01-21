import mongoose, { Schema } from "mongoose";

// // Define una interfaz para los datos del TODO
// interface ITodo extends Document {
//   title: string;
//   description?: string; // Campo opcional
//   completed: boolean;
// }

// Crea el esquema de Mongoose
const todoSchema: Schema = new Schema(
  {
    task: {
      type: String,
      required: true, // El título es obligatorio
    },
       completed: {
      type: Boolean,
      default: false, // Los todos empiezan como no completados
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todos", todoSchema)


