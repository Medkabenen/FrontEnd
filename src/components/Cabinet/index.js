/*
 Date: 09.01.2020
 Author: (jffry (dsr))
 Version: 1.0.0 'Swisher'
*/
import { Layout, Menu, Icon, Breadcrumb } from 'antd';

import NavMenu from "./NavMenu";
import React, { useState } from "react";
import "antd/dist/antd.css";

const { Header, Content, Footer, Sider } = Layout;



const Cabinet = _ => {
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

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design Â©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default Cabinet;