import { memo } from "react";

const ShowIncrement = memo(({ increment }) => {
  console.log("me volvi a generar");

  return (
    <>
      <button
        className="btn btn-secondary"
        onClick={() => {
          increment();
        }}
      >
        Incrementar
      </button>
    </>
  );
});

export default ShowIncrement;
