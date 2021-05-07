import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 500);
  };

  return (
    <>
      <section>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value + 1)}>
          +
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          -
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>Complex Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
