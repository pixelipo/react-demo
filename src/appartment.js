import React from "react";
import ReactDOM from "react-dom";

function Appartment({
  appartment: { image, title, isAvailable, price, rating }
}) {
  return (
    <div className="Appartment">
      <h1>{title}</h1>
      <img width="50px" height="50px" src={image} />
      <div>
        <svg width="10" height="10">
          <circle fill={isAvailable ? "green" : "red"} cx="5" cy="5" r="5" />
        </svg>
        <b>Studio idn historical center</b>
        <div>${price} per night</div>
        <range />
        <div>{Array.from({ length: rating }).map(star => "⭐")}</div>
      </div>
    </div>
  );
}

export default Appartment;
