import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SideBar extends Component {
    handleSignup(e) {
        e.preventDefault();
        this.props.history.push('/signup');
    }

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__intro">
                    React Developers is a site for remote / freelance developers
                    who want to advertise their skills for potential clients and
                    peer developers.
                </div>
                <div className="sidebar__buttons">
                    <button onClick={this.handleSignup.bind(this)}>
                        Sign Up
                    </button>
                    <button>Login</button>
                </div>
            </div>
        );
    }
}

export default withRouter(SideBar);
