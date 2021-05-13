import React, { useState, useReducer } from "react";
import "./BirthdayReminder.css";
// import Card from "./Card";
import { data } from "./data";

const reducer = (state, action) => {
  console.log(action, state);
  if (action.type === "REMOVE_DOG") {
    const newDogs = state.dogs.filter((dog) => dog.id !== action.payload);
    return { ...state, dogs: newDogs };
  }
  if (action.type == "REMOVE_ALL") {
    return { ...state, dogs: [] };
  }
  throw new Error("no matching action type");
};

const initialState = {
  dogs: data,
};

function BirthdayReminder() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="root">
      <div className="day">
        <h1 className="day-heading">{state.dogs.length} Birthdays Today</h1>
        {state.dogs.map((dog) => {
          return (
            <div className="dog" key={dog.id}>
              <img className="dog__img" src={dog.img} alt="" />
              <div className="dog__info">
                <h4>{dog.name}</h4>
                <p>{dog.age} Months</p>
              </div>
              <button
                className="dog__remove"
                onClick={() =>
                  dispatch({ type: "REMOVE_DOG", payload: dog.id })
                }
              >
                X
              </button>
            </div>
          );
        })}
        <button
          onClick={() => dispatch({ type: "REMOVE_ALL" })}
          className="btn"
          type="button"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default BirthdayReminder;
