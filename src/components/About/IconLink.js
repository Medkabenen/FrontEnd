/*
 Date: 10.01.2020
 Author: (jffry (dsr))
 Version: 1.0.0 'Swisher'
 */

import React from "react";


const IconLink = ({ src, text }) => (
    <a
        style={{
            marginRight: 16,
            display: 'flex',
            alignItems: 'center',
        }}
    >
        <img
            style={{
                marginRight: 8,
            }}
            src={src}
            alt="start"
        />
        {text}
    </a>
);

export default IconLink;