import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import SavedStrains from "./SavedStrains";

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
const SideMenu = _ => {


    return (
        <Sider
            style={Style.Sider}
        >
            <div className="logo" />
            <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1">
                    <Icon type="user" />
                    <span className="nav-text">Save Strain</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="video-camera" />
                    <span className="nav-text">nav 2</span>
                </Menu.Item>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                            <Icon type="save" />
                            Saved Strains 🍀
            </span>
                    }
                >
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>

                <Menu.Item key="3">
                    <Icon type="upload" />
                    <span className="nav-text">nav 3</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="bar-chart" />
                    <span className="nav-text">nav 4</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="bar-chart" />
                    <span className="nav-text">nav 4</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="bar-chart" />
                    <span className="nav-text">nav 4</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="bar-chart" />
                    <span className="nav-text">nav 4</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="bar-chart" />
                    <span className="nav-text">nav 4</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="bar-chart" />
                    <span className="nav-text">nav 4</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="bar-chart" />
                    <span className="nav-text">nav 4</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="bar-chart" />
                    <span className="nav-text">nav 4</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="bar-chart" />
                    <span className="nav-text">nav 4</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="bar-chart" />
                    <span className="nav-text">nav 4</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="bar-chart" />
                    <span className="nav-text">nav 4</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="bar-chart" />
                    <span className="nav-text">nav 4</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="bar-chart" />
                    <span className="nav-text">nav 4</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="bar-chart" />
                    <span className="nav-text">nav 4</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="bar-chart" />
                    <span className="nav-text">nav 4</span>
                </Menu.Item>


            </Menu>
        </Sider>
    );
}

export default SideMenu;