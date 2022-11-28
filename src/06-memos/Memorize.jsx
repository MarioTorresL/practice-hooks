import {useState} from "react";
import {useCounter} from "../hooks";
import Small from "./Small";

const Memorize = () => {

  const { counter, increment } = useCounter(0)

  const [show, setShow] = useState(true)

  return (
    <>
      <h1>
        Counter: <Small value={counter}/>      </h1>
      <hr />
      <button className="btn btn-info m-2" onClick={()=>increment()}>
        +1
      </button>
      <button className="btn btn-secondary m-2" onClick={ ()=> setShow(!show) }>
        Show / Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

export default Memorize;
