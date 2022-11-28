import { useState } from "react";

export const CounterApp = () => {
  const [counters, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counters;

  return (
    <>
      <div className="container">
        <h1>Counter: {counter1}</h1>
        <h1>Counter: {counter2}</h1>
        <h1>Counter: {counter3}</h1>
        <hr />

        <button
          className="btn btn-success"
          onClick={() =>
            setCounter({
              ...counters,
              counter1: counter1 + 1,
            })
          }
        >
          +1
        </button>
      </div>
    </>
  );
};
