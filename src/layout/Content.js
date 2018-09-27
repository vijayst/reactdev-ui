import React, { Component } from 'react';
import { Col } from 'antd';
import Profile from '../profile/Profile';
import ProfileEdit from '../profile/ProfileEdit';
import { Switch, Route } from 'react-router-dom';
import requireAuth from './requireAuth';

class Content extends Component {
    render() {
        return (
            <div className="content">
                <header className="header">
                    <h1>React Developers</h1>
                </header>
                <main>
                    <Switch>
                        <Route
                            path="/profile/edit"
                            component={requireAuth(ProfileEdit)}
                        />
                        <Route
                            path="/profile"
                            component={requireAuth(Profile)}
                        />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Content;
