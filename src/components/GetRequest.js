import React, {useState, useEffect} from "react";
import {Container, Row, Col} from 'reactstrap';
import styled from 'styled-components'
import axios from "axios"
// import Card from "./Card";

//Example
const Btn = styled.button`
    color: #fff;
    text-align: center;
`;

const GetRequest = () => {
  //State
  const [strainEndpoint, setStrainEndpoint] = useState("https://medcab3-api.herokuapp.com/");

  //Side Effects
  useEffect(() => {
    axios.get(strainEndpoint)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("Failed to retrieve data.")
      })
  }, [strainEndpoint]);

  return (
    <div>

    </div>
  )
};

export default GetRequest;
