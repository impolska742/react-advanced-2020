import React from "react";
import "./Card.css";
import { data } from "./data";

function Card({ name, age, img, onClick }) {
  return (
    <article className="day-card">
      <img src={img} alt="Dog Image" />
      <div className="person-info">
        <h4 className="person-heading">{name}</h4>
        <p className="person-age">{age} Months</p>
      </div>
      <button className="card-btn">X</button>
    </article>
  );
}

export default Card;
