/*
 Date: 09.01.2020
 Author: (jffry (dsr))
 Version: 1.0.0 'Swisher'
 */
import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';

import StrainModal from "../Cabinet/StrainModal";


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
                        <Icon type="form" />
                        <span className="nav-text">Register</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="https://github.com/Medicabinet">
                        <Icon type="share-alt" />
                        <span className="nav-text">Share</span>
                    </Link>
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

                        <Menu.Item key="setting:1">
                            <Icon type="medicine-box" />

                        </Menu.Item>

                        <Menu.Item key="setting:2">
                            <Icon type="medicine-box" />G-Force
                            </Menu.Item>
                        <Menu.Item key="setting:3">
                            <Icon type="medicine-box" />G-Force
                            </Menu.Item>
                        <Menu.Item key="setting:4">
                            <Icon type="medicine-box" />G-Force
                            </Menu.Item>

                    </Menu.ItemGroup>
                </SubMenu>


            </Menu>
        </Sider>
    );
}

export default SideNavigation;