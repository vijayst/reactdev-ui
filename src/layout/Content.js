import React, { Component } from 'react';
import { Col } from 'antd';
import Profile from '../profile/Profile';
import ProfileEdit from '../profile/ProfileEdit';
import { Switch, Route } from 'react-router-dom';
import requireAuth from './requireAuth';

class Content extends Component {
    render() {
        return (
            <Col span={18} className="content">
                <header className="header">
                    <h1>React Developers</h1>
                </header>
                <Switch>
                    <Route path="/profile" component={requireAuth(Profile)} />
                    <Route path="/profile/edit" component={requireAuth(ProfileEdit)} />
                </Switch>
            </Col>
        );
    }
}

export default Content;
