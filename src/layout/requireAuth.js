import React, { Component } from 'react';

export default function requireAuth(BaseComponent) {
    return class DecoratedComponent extends Component {
        componentWillMount() {
            if (false) {
                // redirect
            }
        }

        render() {
            return <BaseComponent {...this.props} />;
        }
    };
}
