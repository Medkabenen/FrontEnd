import React from "react"

import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const SavedStrains = _ => {

    return (
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
    )
}

export default SavedStrains;