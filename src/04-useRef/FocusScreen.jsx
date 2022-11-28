import { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef();

  const onCLick = () => {
    inputRef.current.select();
  };
  return (
    <>
      <div className="container">
        <h1 className="mt-3">Focus Screen</h1>
        <hr />
        <input
          ref={inputRef}
          type="text"
          placeholder="Ingrese su nombre"
          className="form-control"
        />
        <button onClick={onCLick} className="btn btn-primary mt-3">
          {" "}
          Set Focus
        </button>
      </div>
    </>
  );
};

export default FocusScreen;
