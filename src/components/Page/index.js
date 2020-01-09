import React from "react";
import { Layout, Menu, Icon, Breadcrumb } from 'antd';

import SideMenu from "./SideMenu";

import Strain from "../Strain/index";
import CatalogGrid from "../Dashboard/CatalogGrid";
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



                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <Icon type="user" />
                        <span>Application List</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Application</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={Style.content}><CatalogGrid /></Content>

                <Footer />
            </Layout>

        </Layout>

    )
}

export default Page;