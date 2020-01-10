/*
 Date: 10.01.2020
 Author: (jffry (dsr))
 Version: 1.0.0 'Swisher'
*/

import React from "react";

import { PageHeader, Menu, Dropdown, Icon, Button, Tag, Typography, Row } from 'antd';
import IconLink from "./IconLink";

const { Paragraph } = Typography;

const Content = _ => {

    return (
        <div className="content">
            <Paragraph>
                MedCabinetOG
    </Paragraph>
            <Paragraph>
                MedCabinetOG is a machine-learning-enhanced Cannabis strain recommendar and catalog. ✌🏿
    </Paragraph>
            <Row className="contentLink" type="flex">
                <IconLink
                    src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
                    text="Quick Start"
                />
                <IconLink
                    src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
                    text=" Product Info"
                />
                <IconLink
                    src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
                    text="Documentation"
                />
            </Row>
        </div>
    );
}

export default Content;