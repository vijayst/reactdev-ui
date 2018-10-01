import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import requireAuth from '../layout/requireAuth';
import Account from './Account';
import UserInfo from './UserInfo';
import Links from './Links';
import Portfolio from './Portfolio';
import Availability from './Availability';
import './signup.css';

class SignUp extends Component {
    render() {
        return (
            <Switch>
                <Route path="/signup" exact component={Account} />
                <Route
                    path="/signup/profile"
                    component={requireAuth(UserInfo)}
                />
                <Route path="/signup/links" component={requireAuth(Links)} />
                <Route
                    path="/signup/portfolio"
                    component={requireAuth(Portfolio)}
                />
                <Route
                    path="/signup/availability"
                    component={requireAuth(Availability)}
                />
            </Switch>
        );
    }
}

export default SignUp;
