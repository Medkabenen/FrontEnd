
/*
    Date: 1/6/2020
    Author: Ashley Dunam
*/

import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute(props) {

import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute(props){

    return (
        <Route  {...rest} render={(renderProps) => {

            if (localStorage.getItem("token")){

                return <Component {...renderProps} />
            } else {
                return <Redirect to="/" />
            }
        }}
        />
    )
}

export default PrivateRoute;