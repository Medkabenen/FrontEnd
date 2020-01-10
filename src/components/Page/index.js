/*
 Date: 08.01.2020
 Author: (jffry (dsr))
 Version: 1.0.0 'Swisher'
 */

import React from "react";

import { Layout, Menu } from "antd";

//Utils
import HeaderNavigation from "./HeaderNavigation";
import SideNavigation from "./SideNavigation";

//Derived Alias
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


const Style = {
    content: {
        margin: '24px 16px 0',
        overflow: 'initial'
    },
    layout: {
        marginLeft: 200
    }
}
const Page = (props) => {

    return (
        <Layout>
            <SideNavigation />
            <Layout style={Style.layout}>
                <HeaderNavigation theme="light" />

                <Content style={Style.content}>
                    {props.children}
                </Content>

                <Footer />
            </Layout>

        </Layout>
    )
}

export default Page;