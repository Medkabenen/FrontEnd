/*
 Date: 01.07.2020
 Author: Ashley Dunham
 */

import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute(props) {
    const {
        component: Component,
        ...rest
    } = props

    return (
        <Route  {...rest} render={(renderProps) => {
            if (localStorage.getItem("token")) {
                return <Component {...renderProps} />
            } else {
                return <Redirect to="/" />
            }
        }}
        />
    )
}

export default PrivateRoute;