require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({ message: "invalid input" });
    return;
  }

  await todo.create({
    title: parsedPayload.data.title,
    description: parsedPayload.data.description,
    completed: false,
  });

  res.json({
    message: "todo created",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find();

  res.json(todos);
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    res.status(411).json({ message: "invalid input" });
    return;
  }

  await todo.updateOne(
    {
      _id: updatePayload.id,
    },
    {
      completed: true,
    }
  );
});

app.listen(3000, () => {
  console.log("server started");
});
