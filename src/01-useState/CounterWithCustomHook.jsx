import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(20);

  return (
    <>
      <div className="container">
        <h1>Counter with Hook : {counter}</h1>
        <hr />

        <button className="btn btn-danger me-3" onClick={() => decrement(2)}>
          -1
        </button>
        <button className="btn btn-primary me-3" onClick={reset}>
          Reset
        </button>
        <button className="btn btn-success me-3" onClick={() => increment(2)}>
          +1
        </button>
      </div>
    </>
  );
};
