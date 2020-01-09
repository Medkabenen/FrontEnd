import { Menu, Icon, Breadcrumb } from 'antd';
import Login from "../../components/Login";
import NavMenu from "./SideMenu";
import React, { useState } from "react";
import "antd/dist/antd.css";

const { Header, Content, Footer, Sider } = Layout;

const { collapseMenu, setCollapseMenu } = useState({
    collapsed: false
});


const Dashboard = _ => {
    return (
        <Layout>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
            >
                <div className="logo" />
                <NavMenu />
            </Sider>
            <Layout style={{ marginLeft: 200 }}>
                <Header style={{ background: '#fff', padding: 0 }} >
                    <Breadcrumb
                        seperator=">">
                        <Breadcrumb.Item>Strains</Breadcrumb.Item>
                        <Breadcrumb.Item>Strains</Breadcrumb.Item>
                        <Breadcrumb.Item>Strains</Breadcrumb.Item>
                        <Breadcrumb.Item>Strains</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                        <Login />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design Â©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default Dashboard;


import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

ReactDOM.render(
    <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design �2018 Created by Ant UED</Footer>
    </Layout>,
    mountNode,
);