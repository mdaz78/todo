import axios from "axios";
import { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = async () => {
    await axios.post("http://localhost:3000/todo", {
      title,
      description,
    });
  };

  return (
    <div className="grid grid-cols-3">
      <input
        type="text"
        name=""
        id=""
        placeholder="title"
        className="border-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="description"
        className="border-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        className="btn p-2 rounded-md bg-slate-100 hover:bg-slate-200"
        onClick={handleClick}
      >
        Add Todo
      </button>
    </div>
  );
};

export default CreateTodo;
