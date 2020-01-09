import React, { useEffect, useState } from "react";
// import { Input } from "antd";
// import { api } from '../utils/AxiosWithAuth'
import axios from 'axios'
// import Card from './Card';
import CardList from '../CardList';

import { Input, Icon, Layout, Select } from "antd";
import "antd/dist/antd.css";
import Strains from "../Cabinet/Strains";

const InputGroup = Input.Group;
const { Option } = Select;
const { Search } = Input;


const { Header, Footer } = Layout;

const Cabinet = _ => {

    const [data, setData] = useState({});
    const [data2, setData2] = useState({});
    const [strains, setStrains] = useState([]); //useState({strainObject: {831: {Strain: "G-Force", Type: "indica", Rating: 5, Description: "G-Force by Flying Dutchman is a hearty G13 and Sku…rug off stress and help mute aches and pains.    "}, 1512: {Strain: "G-Force", Type: "indica", Rating: 5, Description: "G-Force by Flying Dutchman is a hearty G13 and Sku…rug off stress and help mute aches and pains.    "}, 1577: {Strain: "G-Force", Type: "indica", Rating: 5, Description: "G-Force by Flying Dutchman is a hearty G13 and Sku…rug off stress and help mute aches and pains.    "}, 1965: {Strain: "G-Force", Type: "indica", Rating: 5, Description: "G-Force by Flying Dutchman is a hearty G13 and Sku…rug off stress and help mute aches and pains.    "}, 2257: {Strain: "G-Force", Type: "indica", Rating: 5, Description: "G-Force by Flying Dutchman is a hearty G13 and Sku…rug off stress and help mute aches and pains.    "}}});
    const [symptoms, setSymptoms] = useState({});

    const handleChange = e => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value })
    };
    const handleChange2 = e => {
        e.preventDefault();
        setData2({ ...data2, [e.target.name]: e.target.value })
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
                    strainObject[strain] = { Strain: r.data.Strain[strain], Type: r.data.Type[strain], Rating: r.data.Rating[strain], Description: r.data.Description[strain] };
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

    const handleSubmit2 = (e) => {
        e.preventDefault();
        axios
            .post('https://cors-anywhere.herokuapp.com/https://medcab3-api.herokuapp.com/symptom', data)
            .then(r => {
                let strainObject = {};
                let strainArray = [];
                console.log(r);
                let strainIds = Object.keys(r.data['Strain']);
                console.log("strainIds (array)", strainIds);
                strainIds.forEach((strain) => {
                    strainObject[strain] = { Strain: r.data.Strain[strain], Type: r.data.Type[strain], Rating: r.data.Rating[strain], Description: r.data.Description[strain] };
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
    }


    return (
        <Layout style={
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }>
            <InputGroup style={
                {
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'center'
                }
            } >
                <Select defaultValue="Zhejiang">
                    <Option value="Zhejiang">Flavor & Effects</Option>
                    <Option value="Jiangsu">Symptoms</Option>
                </Select>


                <Search enterButton onSubmit={handleSubmit}
                    style={{ background: 'transparent', width: '500px', height: '85px', alignItems: 'center' }}>

                </Search>
            </InputGroup>
            <form className='searchForm' onSubmit={handleSubmit}>
                Name: <input type='text'
                    name='input'
                    value={data.input}
                    onChange={handleChange} />

                <Strains strains={strains} />
            </form>

        </Layout>


    )
}

export default Cabinet;