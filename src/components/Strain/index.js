/* 
 Date: 10.01.2020
 Author: (jffry (dsr))
 Version: 1.0.0 'Swisher'
 */

import React from "react";
import { Card, Button, Icon, Avatar } from "antd";


import Rating from "../Strain/Rating";

const Style = {};

const { Meta } = Card;

const Strain = (props) => {

    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src="../../public/imgs/veed.jpg"
                />
            }
            actions={[
                <Icon type="save" key="save" />,
                <Icon type="share" key="share" />,
                <Icon type="ellipsis" key="ellipsis" />,
            ]}
        >
            <Meta
                title={props.Strain}
            />
            <h3>{props.Strain}</h3>
            <p>Type: {props.Type}</p>
            <Rating rating={props.Rating} />
            <br />
            <Button>Here</Button>
        </Card>
    )
}

export default Strain;
