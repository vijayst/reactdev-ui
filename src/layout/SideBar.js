import React, { Component } from 'react';
import { Col, Button } from 'antd';
import auth from '../lib/auth';

class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            isAuthenticated: auth.isAuthenticated
        };
    }

    handleLogin() {
        auth.login();
    }

    handleLogout() {
        auth.logout();
        this.setState({ isAuthenticated: false });
    }

    render() {
        return (
            <Col span={6} className="sidebar">
                <div className="login-section">
                    {this.state.isAuthenticated ? (
                        <Button title="Logout" size="large" onClick={this.handleLogout.bind(this)}>
                            Logout
                        </Button>
                    ) : (
                        <Button title="Login" size="large" onClick={this.handleLogin.bind(this)}>
                            Login
                        </Button>
                    )}     
                </div>
                <div className="intro-section">
                    React Developers is a site for remote / freelance developers who want to advertise their skills for potential clients and peer developers.
                    Register today and invite your peers.
                </div>
            </Col>
        );
    }
}

export default SideBar;
