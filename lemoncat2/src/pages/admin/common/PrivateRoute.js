
import React, { Component } from 'react';
import {Route, Redirect } from 'react-router-dom'
import Login from '../layout/login';

export default function PrivateRoute ({component: Component, authed, ...rest}) {

    return (
        <Route
        {...rest}
        render={(props) => authed === true
            ? <Component {...props} />
            : <Route to="/login" component={Login}/>}
        />
    )
}