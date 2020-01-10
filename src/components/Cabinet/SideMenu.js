import React from "react";
import { Layout, Icon } from 'antd';
import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";

const { SubMenu } = Menu;


const SideMenu = (props) => {


    return (
        <Sider
            breakpoint={props.breakpoint} >

            <Menu theme={props.theme}
                mode="inline">
                {props.items.map({
                    return(
                         <Meniu
                    )
                })}
            </Menu>
        </Sider>
    )
