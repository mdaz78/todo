const CreateTodo = () => {
  return (
    <div className="grid grid-cols-3">
      <input
        type="text"
        name=""
        id=""
        placeholder="title"
        className="border-2"
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="description"
        className="border-2"
      />

      <button className="btn p-2 rounded-md bg-slate-100 hover:bg-slate-200">
        Add Todo
      </button>
    </div>
  );
};

export default CreateTodo;
