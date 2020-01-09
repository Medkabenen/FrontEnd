import React from "react";
import { Row, Col } from "antd";

import Strain from "../Strain/index";

const du = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const CatalogGrid = _ => {

    return (
        <Row style={
            {
                marginRight: ' 100px'
            }
        }>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>

                <Strain />

            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>

                <Strain />

            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>

                <Strain />

            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>

                <Strain />

            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>

                <Strain />

            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>

                <Strain />

            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>

                <Strain />

            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>

                <Strain />

            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>

                <Strain />

            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>

                <Strain />

            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>

                <Strain />

            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>

                <Strain />

            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>

                <Strain />

            </Col>

        </Row>
    )
}

export default CatalogGrid;