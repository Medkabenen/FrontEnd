import React from "react";
import { Menu, Layout, Icon, Input } from "antd";

const { Search } = Input;

const { SubMenu } = Menu;

const HeaderNavigation = () => {

    return (
        <Menu mode="horizontal">
            <Menu.Item key="Cabinet">
                <Icon type="book" />
                Cabinet
        </Menu.Item>
            <Menu.Item key="Library" >
                <Icon type="unordered-list" />
                <Link>  <Layout>

                    <SideMenu />
                    <Layout style={{ marginLeft: 200 }}>
                        <HeaderNavigation />

                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/users">
                                <Users />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>

                        <Content style={Style.content}>

                            <Cabinet />
                        </Content>

                        <Footer />
                    </Layout>

                </Layout>

                </Link> Library
        </Menu.Item>
            <Menu.Item>
                <Icon type="question" />
                About
            </Menu.Item>
            <Menu.Item key="search-site">
                <Search
                    placeholder="search our site!"
                    onSearch={value => console.log(value)}
                    style={{ width: 300 }}
                />
            </Menu.Item>

            <Menu.Item key="contact">
                Contact
            </Menu.Item>

            <Menu.Item key="app">
                <a href="https://github.com/orgs/MedCabinet/">
                    <Icon type="github" />

                    Github
                </a>

            </Menu.Item>

            <Menu.Item>
                <Icon type="file-word" />
                Blog
            </Menu.Item>
            <Menu.Item>
                <icon type="login" />
                Login
            </Menu.Item>
        </Menu >

    )
}
export default HeaderNavigation;

/*
<SubMenu
                title={
                    <span className="submenu-title-wrapper">
                        <Icon type="setting" />
                        Contact
            </span>
                }
            >
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>*/
