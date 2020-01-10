/* 
 Date: 08.01.2020
 Author: (jffy (dsr))
 Version: 1.0.0 "Swisher"
*/

import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Menu, Layout, Icon, Input } from "antd";


const { Search } = Input;
const Style = {};

const HeaderNavigation = (theme) => {
    ' '
    return (
        <Menu theme={theme} mode="horizontal">
            <Menu.Item key="Cabinet">
                <Icon type="book" />
                <Link to={'/'}>
                    Cabinet
                </Link>

            </Menu.Item>

            <Menu.Item key="Library" >
                <Link to="/library">
                    <Icon type="unordered-list" />
                    Library
                </Link>

            </Menu.Item>

            <Menu.Item>
                <Icon type="question" />
                About
            </Menu.Item>
            <Menu.Item key="search-site">
                <Search
                    placeholder="Search. . . "
                    onSearch={value => console.log(value)}
                    style={{ width: 300 }}
                />
            </Menu.Item>

            <Menu.Item key="contact">
                Contact
            </Menu.Item>

            <Menu.Item key="app" >
                <a href="https://github.com/orgs/Medcabinet">
                    <Icon type="github" />
                    Github
                </a>

            </Menu.Item>

            <Menu.Item>
                <Icon type="file-word" />
                Blog
            </Menu.Item>
        </Menu >
    )
}

export default HeaderNavigation;