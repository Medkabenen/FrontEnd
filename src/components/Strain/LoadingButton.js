/* 
 Date: 10.01.2020
 Author: (jffry (dsr))
 Version: 1.0.0 'Swisher'
*/


import React, { useState } from "react";
import { Button } from 'antd';


const LoadingButton = _ => {
    const [loading, setLoading] = useState({ loading: false, iconLoading: false })

    return (

        <Button type="primary" loading={setLoading({ loading: true })} onClick={setLoading({ loading: true, iconLoading: true })} >
            Click me!
        </Button >

    )
}

export default LoadingButton;