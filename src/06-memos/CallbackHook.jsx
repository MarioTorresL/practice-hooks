import { useCallback, useState } from "react";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(() => {
    setCounter( (value) => value + 1);
  },
    [],
  );

  // const increment = () => {
  //   setCounter(counter + 1)
  // };

  return (
    <>
      <div className="container">
        <h1>useCallback Hook: {counter}</h1>
        <hr />
        <ShowIncrement increment={increment} />
      </div>
    </>
  );
};

export default CallbackHook;
