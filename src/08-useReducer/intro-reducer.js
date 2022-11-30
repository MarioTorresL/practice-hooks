const initialState = [
  {
    id: 1,
    todo: "Aprender react",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.paylaod];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "crear apps de react",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add todo",
  paylaod: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ todos });
