import React, {useEffect, useState} from "react";
// import { Input } from "antd";
// import { api } from '../utils/AxiosWithAuth'
import axios from 'axios'
import Card from './Card';
import CardList from './CardList';

import "antd/dist/antd.css";



export default function Search () {
  const [data, setData] = useState({});
  const [strains, setStrains] = useState([]); //useState({strainObject: {831: {Strain: "G-Force", Type: "indica", Rating: 5, Description: "G-Force by Flying Dutchman is a hearty G13 and Sku…rug off stress and help mute aches and pains.    "}, 1512: {Strain: "G-Force", Type: "indica", Rating: 5, Description: "G-Force by Flying Dutchman is a hearty G13 and Sku…rug off stress and help mute aches and pains.    "}, 1577: {Strain: "G-Force", Type: "indica", Rating: 5, Description: "G-Force by Flying Dutchman is a hearty G13 and Sku…rug off stress and help mute aches and pains.    "}, 1965: {Strain: "G-Force", Type: "indica", Rating: 5, Description: "G-Force by Flying Dutchman is a hearty G13 and Sku…rug off stress and help mute aches and pains.    "}, 2257: {Strain: "G-Force", Type: "indica", Rating: 5, Description: "G-Force by Flying Dutchman is a hearty G13 and Sku…rug off stress and help mute aches and pains.    "}}});
  const [symptoms, setSymptoms] = useState({});

  const handleChange = e =>{
    e.preventDefault();
    setData({...data, [e.target.name]: e.target.value})
  };

   useEffect(() => {
     console.log("strains (state) 2:", strains);
   }, [strains]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://cors-anywhere.herokuapp.com/https://medcab3-api.herokuapp.com/strains', data)
      .then(r => {
        let strainObject = {};
        let strainArray = [];
        console.log(r);
        let strainIds = Object.keys(r.data['Strain']);
        console.log("strainIds (array)", strainIds);
        strainIds.forEach((strain) => {
          strainObject[strain] = {Strain: r.data.Strain[strain], Type: r.data.Type[strain], Rating: r.data.Rating[strain], Description: r.data.Description[strain]};
          strainArray.push(strainObject[strain]);
        });
        // setStrains({strainObject}); //r.data.[Strain,Type,Rating,Description]
        setStrains(strainArray);
        console.log("strains (state) 1:", strains);
        console.log("strainObject:", strainObject);
        // setSymptoms(r.data); //r.data.[Strain,Type,Rating,Effects,Flavor,Description,symptoms_diseases]
        console.log("data:", data);
      })
      .catch(err => { console.log(err) })
  };

    return (
      <div>
        <form className='searchForm' onSubmit={handleSubmit}>
          Name: <input type='text'
                       name='input'
                       value={data.input}
                       onChange={handleChange}
        />
          <button type='submit'>Search Recommended Strains</button>
        </form>
        <CardList strains={strains}/>
      </div>
    )
}
