import React, { useState } from "react";
import "./BirthdayReminder.css";
import Card from "./Card";
import { data } from "./data";

function BirthdayReminder() {
  const [dogs, setDogs] = useState(data);
  return (
    <div className="root">
      <div className="day">
        <h1 className="day-heading">{dogs.length} Birthdays Today</h1>
        {dogs.map((dog) => {
          return (
            <Card key={dog.id} name={dog.name} age={dog.age} img={dog.img} />
          );
        })}
        <button onClick={() => setDogs([])} className="btn" type="button">
          Clear All
        </button>
      </div>
    </div>
  );
}

export default BirthdayReminder;
