import React, { Component } from 'react'
import Search from "./Search";


export default class Account extends Component {

  render() {
    return (
      <div>
        <Search/>
        <a href='https://potency-calc.herokuapp.com/predictions'>Potency Calculator</a>
      </div>
    )
  }
}
