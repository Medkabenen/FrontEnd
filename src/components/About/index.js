/*
 Date: 10.01.2020
 Author: (jffry (dsr))
 Version: 1.0.0 'Swisher'
 */

import React from "react";
import { PageHeader, Menu, Dropdown, Icon, Button, Tag, Typography, Row } from 'antd';

import Content from "./Content";
import IconLink from "./IconLink";

const { Paragraph } = Typography;


const content = ({ children, extraContent }) => {
    return (
        <Row className="content" type="flex">
            <div className="main" style={{ flex: 1 }}>
                {children}
            </div>
            <div
                className="extra"
                style={{
                    marginLeft: 80,
                }}
            >
                {extraContent}
            </div>
        </Row>
    );
};

const About = _ => {


    return (
        <PageHeader
            title="MedCabinetOG"
            style={{
                border: '1px solid rgb(235, 237, 240)',
                height: '75vh'
            }}
            subTitle="a Cannabis-strain recommendar"
            tags={<Tag color="green">online</Tag>}
            extra={[
                <Button key="3">Operation</Button>,
                <Button key="2">Operation</Button>,
                <Button key="1" type="primary">
                    Primary
      </Button>, []

            ]}
            avatar={{
                src: '../public/imgs/icons/favicon-32x32.png'
            }}

        >
            <Content
                extraContent={
                    <img
                        src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original"
                        alt="content"
                    />
                }
            >
                {content}
            </Content>
        </PageHeader >

    )
}
export default About; 
