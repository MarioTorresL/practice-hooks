import { useForm } from "../hooks/useForm";

const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmint = (event) => {
    event.preventDefault();

    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };

    onNewTodo(newTodo);
    onResetForm();
  };
  return (
    <>
      <form onSubmit={onFormSubmint}>
        <input
          type="text"
          placeholder="que hay que hacer?"
          className="form-control"
          name="description"
          onChange={onInputChange}
        />
        <button className="btn btn-outline-info mt-2" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
