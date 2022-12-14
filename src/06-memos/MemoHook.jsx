import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = ( iterationNumber  = 100 ) => {
 for (let i = 0 ; i < iterationNumber; i++) {
   console.log('ahi vamos....')
 } 
  return `${ iterationNumber } iteraciones realizadas`
};

const MemoHook = () => {
  const { counter, increment } = useCounter(4000);

  const [show, setShow] = useState(true);
  
   const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <h4>{memorizedValue}</h4>
      <hr />
      <button className="btn btn-info m-2" onClick={() => increment()}>
        +1
      </button>
      <button className="btn btn-secondary m-2" onClick={() => setShow(!show)}>
        Show / Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

export default MemoHook;
