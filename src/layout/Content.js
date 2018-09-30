import React, { Component } from 'react';
import Profile from '../profile/Profile';
import ProfileEdit from '../profile/ProfileEdit';
import SignUp from '../auth/SignUp';
import { Switch, Route } from 'react-router-dom';
import requireAuth from './requireAuth';

class Content extends Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route path="/signup" component={SignUp} />
                    <Route
                        path="/profile/edit"
                        component={requireAuth(ProfileEdit)}
                    />
                    <Route path="/profile" component={requireAuth(Profile)} />
                </Switch>
            </div>
        );
    }
}

export default Content;
