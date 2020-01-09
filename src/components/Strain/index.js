import React from "react";
import { Skeleton, Switch, Card, Icon, Avatar, Col } from 'antd';
import { Link } from "react-router-dom";

const { Meta } = Card;

const Strain = _ => {

    return (
        <Col>
            <a>
                <Card style={{ width: 300, marginTop: 16 }} >
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="Card title"
                        description="This is the description" />

                </Card>
            </a>
        </Col>
    )
}

export default Strain;