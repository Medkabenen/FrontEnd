/*
 Date: 09.01.2020
 Author: (jffry (dsr))
 Version: 1.0.0 'Swisher'
 */
import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Style = {
    Sider: {
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0
    }
}
const SideNavigation = _ => {

    return (
        <Sider
            style={Style.Sider}
            theme="light"
        >
            <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>

                <Menu.Item key="1">
                    <Link to="/login">
                        <Icon type="user" />
                        <span className="nav-text">Login</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="2">
                    <Link to="/register">
                        <Icon type="setings" />
                        <span className="nav-text">Register</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="3">
                    <Icon type="save" />
                    <span className="nav-text">Save Strain</span>
                </Menu.Item>

                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                            <Icon type="save" />
                            Saved Strains 🍀
            </span>
                    }
                >
                    <Menu.ItemGroup>
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>


            </Menu>
        </Sider>
    );
}

export default SideNavigation;