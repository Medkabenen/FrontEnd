import React, { useEffect, useState } from "react";
import Card from "./Card";


export default function CardList(props) {

  return (
    <div className="character-list">
      {props.strains.map((elem) => {
      console.log("reached 2nd!");
      return (
        <Card Strain={elem.Strain} Type={elem.Type} Rating={elem.Rating} Description={elem.Description}/>
      )
    })}
    </div>
  );
}
