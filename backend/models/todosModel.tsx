import mongoose, { Schema } from "mongoose";

// Crea el esquema de Mongoose
const todoSchema: Schema = new Schema(
  {
    task: {
      type: String,
      required: true, 
    },
    completed: {
      type: Boolean,
      default: false, 
    },
    email : {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todos", todoSchema);
