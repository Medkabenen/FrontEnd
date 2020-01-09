import React from "react";
import { Layout, Menu, Icon } from 'antd';

import SideMenu from "./SideMenu";

import Strain from "../Strain/index";
import HeaderNavigation from "./HeaderNavigation";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const Style = {
    content: {
        margin: '24px 16px 0',
        overflow: 'initial'
    }
}
const Page = (props) => {
    return (
        <Layout>

            <SideMenu />
            <Layout style={{ marginLeft: 200 }}>
                <HeaderNavigation />

                <Content style={Style.content}><Strain /></Content>

                <Footer />
            </Layout>

        </Layout>

    )
}

export default Page;