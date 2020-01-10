/*
 Date: 10.01.2020
 Author: (jffry (dsr))
 Version: 1.0.0 'Swisher'
 */

import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import Strain from "../Strain/index";


const StrainCabinet = (props) => {

    return (

        <Row gutter={6}>
            {props.strains.map((elem) => {
                console.log("reached 2nd!");
                return (
                    <Col className="gutter-row" span={6}>
                        <Strain Strain={elem.Strain} Type={elem.Type} Rating={elem.Rating} />
                    </Col>)
            })}
        </Row>
    );
}

export default StrainCabinet;