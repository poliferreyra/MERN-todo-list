import mongoose, { Schema } from "mongoose";

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
    email : {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todos", todoSchema);
