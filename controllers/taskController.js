// controllers/taskController.js
const Task = require("../models/ task.js");

const taskController = {
  createTask: async (req, res) => {
    try {
      const { name, email, title, description } = req.body;
      const task = await Task.create({ name, email, title, description });
      res.json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getAllTasks: async (req, res) => {
    try {
      const tasks = await Task.findAll();
      res.json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getTask: async (req, res) => {
    try {
      const task = await Task.findByPk(req.params.id);
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }
      res.json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateTask: async (req, res) => {
    try {
      const { name, email, title, description } = req.body;
      const task = await Task.findByPk(req.params.id);
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }
      task.name = name;
      task.email = email;
      task.title = title;
      task.description = description;
      await task.save();
      res.json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteTask: async (req, res) => {
    try {
      const task = await Task.findByPk(req.params.id);
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }
      await task.destroy();
      res.json({ message: "Task deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = taskController;
