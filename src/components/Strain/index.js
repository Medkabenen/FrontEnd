import React from "react";
import { Skeleton, Switch, Card, Icon, Avatar, Col } from 'antd';
import { Link } from "react-router-dom";

const { Meta } = Card;

const Strain = (props) => {

    return (

        <Card style={{ width: 300, marginTop: 16 }} >
            <Meta
                avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description" />
            <h2>Strain: {props.Strain}</h2>
            <p>Type: {props.Type}</p>
            <p>Rating: {props.Rating}</p>
            <br />
            <h3>Description: {props.Description}</h3>
        </Card>

    )
}

export default Strain;