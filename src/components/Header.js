import React from 'react'
import logo from '../assets/logo.png'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import backgroundImg from '../assets/cannabis_webbanner_1344x513.jpg'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const TopBar = styled.div`
  background-image: url('${backgroundImg}');
  height: 150px;
  padding: 20px;
  color: #fff;

  .redux-logo {
    animation: ${rotate360} infinite 20s linear;
    height: 80px;
  }
`

function Header() {
  return (
    <TopBar className='header'>
      <img src={logo} className="redux-logo" alt="logo" />
      {/*<h2>Welcome to Create Redux App</h2>*/}
    </TopBar>
  )
}

export default Header
