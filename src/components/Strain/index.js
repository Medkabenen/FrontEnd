import React from "react";
import { Skeleton, Switch, Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

const Strain = key => {


    return (

        < Card style={{ width: 300, marginTop: 16 }
        }  >
            {/*
               <Switch checked={!loading} onChange={this.onChange} />
               
               */}
            <Meta
                avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
            />
        </Card>
    )
}

export default Strain;
