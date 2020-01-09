import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import Login from "../../components/Login";
import NavMenu from "../../components/Dashboard/NavMenu";
import React, { useState } from "react";
import "antd/dist/antd.css";

const { Header, Content, Footer, Sider } = Layout;

const { collapseMenu, setCollapseMenu } = useState({
    collapsed: false
});

uui0\


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