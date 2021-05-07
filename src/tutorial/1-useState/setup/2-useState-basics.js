import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("hello world"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const handleClick = () => {
    if (text == "Random Title") {
      setText("Hello World");
    } else {
      setText("Random Title");
    }
  };

  const [text, setText] = useState("random title");

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button onClick={handleClick} className="btn">
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
