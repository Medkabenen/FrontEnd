import React from "react";
import Strain from "../Strain/index";


const Strains = (props) => {

  return (
    <div>
      {props.strains.map((elem, index) => {
        console.log("reached 2nd!");
        return (
          <Strain Strain={elem.Strain} Type={elem.Type} Rating={elem.Rating} Description={elem.Description} />
        )
      })}
    </div>
  );
}

export default Strains;

