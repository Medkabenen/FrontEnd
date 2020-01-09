import React from "react";
import { Header } from "antd";


const HeaderNavigation = (props) => {

    var names = ['Jake', 'Jon', 'Thruster'];
    return (
        <ul>
            {names.map(function (name, index) {
                return <li key={index}>{name}</li>;
            })}
        </ul>
    return (
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
            >

            </Menu>
        </Header>
    )
}
export default HeaderNavigation;