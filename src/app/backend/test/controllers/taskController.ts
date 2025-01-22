// eslint-disable-next-line @typescript-eslint/no-require-imports
const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const task = await Task.create({ title });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error creating task" });
    console.log(error)
  }
};
