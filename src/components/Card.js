import React from "react";

export default function Card(props) {
  return (
    <div>
      <h2>Strain: {props.Strain}</h2>
      <p>Type: {props.Type}</p>
      <p>Rating: {props.Rating}</p>
      <br/>
      <h3>Description: {props.status}</h3>
    </div>
  );
}
