import React, {useState} from "react";
// import { Input } from "antd";
// import { api } from '../utils/AxiosWithAuth'
import axios from 'axios'

import "antd/dist/antd.css";



export default function Search () {
  const [data, setData] = useState({})

  const handleChange = e =>{
    e.preventDefault()
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('https://cors-anywhere.herokuapp.com/https://medcab3-api.herokuapp.com/strains', data)
      .then(r => { console.log(r) })
      .catch(err => { console.log(err) })
  }

    return (
      <form className='searchForm' onSubmit={handleSubmit}>
        Name: <input type='text'
                     name='input'
                     value={data.input}
                     onChange={handleChange}
      />
        <button type='submit'>Search Recommended Strains</button>
      </form>
    )
}
