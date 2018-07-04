import React, { Component } from 'react';
import auth from '../lib/auth';

export default function requireAuth(BaseComponent) {
    return class DecoratedComponent extends Component {
        componentWillMount() {
            if (!auth.isAuthenticated()) {
                localStorage.setItem('alt_redirect_uri', this.props.location.pathname);
                auth.login();
            }
        }

        render() {
            return auth.isAuthenticated() ? (
                <BaseComponent {...this.props} />
            ) : null;
        }
    }
}