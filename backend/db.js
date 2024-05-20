const mongoose = require("mongoose");

console.log({ dbUrl: process.env.DATABASE_URL });

mongoose.connect(process.env.DATABASE_URL);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo,
};
