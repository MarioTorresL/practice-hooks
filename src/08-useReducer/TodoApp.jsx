import { useTodos } from "../hooks";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

const TodoApp = () => {
  //useTodo
  const { todos, handleNewTodo, handleToggleTodo, handleDeleteTodo, todosCount, pendingTodosCount } = useTodos();
  return (
    <>
      <div className="container mt-3">
        <h1>
          Todo App: {todosCount} | <small> pendientes: {pendingTodosCount}</small>
        </h1>
        <hr />
        <div className="row">
          <div className="col-7">
            <h4>Lista</h4>
            <TodoList
              todos={todos}
              onDeleteTodo={handleDeleteTodo}
              onToggleTodo={handleToggleTodo}
            />
          </div>
          <div className="col-5">
            <h4>Agregar</h4>
            <TodoAdd onNewTodo={handleNewTodo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
