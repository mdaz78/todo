/* eslint-disable react/prop-types */
const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map(({ title, description }) => (
        <div key={title}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default Todos;
