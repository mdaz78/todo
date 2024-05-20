import axios from "axios";

/* eslint-disable react/prop-types */
const Todos = ({ todos }) => {
  const handleClick = async (id) => {
    await axios.put("http://localhost:3000/completed", {
      id,
    });
  };

  return (
    <div className="flex space-x-2 space-y-2">
      {todos.map(({ _id: id, title, description, completed }) => (
        <div
          key={id}
          className={`border-2 border-red-300 rounded-md p-2 ${
            completed ? "opacity-30" : ""
          }`}
        >
          <h1>{title}</h1>
          <p>{description}</p>
          <button
            className="bg-slate-300 hover:bg-slate-200 rounded-md px-2 py-1"
            onClick={() => handleClick(id)}
          >
            Mark as Done
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
