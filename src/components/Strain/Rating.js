/* 
 Date: 10.01.2020
 Author: (jffry (dsr))
 Version: 1.0.0 'Swisher'
 */
import React, { useState } from "react";
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Rating = (rating) => {

    const [stars, setStars] = useState(3);

    let state = {
        value: rating,
    };

    return (
        <span>
            <Rate tooltips={desc} onChange={setStars(rating)} value={rating} />
            {rating ? <span className="ant-rate-text">{desc[rating - 1]}</span> : ''}
        </span>
    );
}
export default Rating;