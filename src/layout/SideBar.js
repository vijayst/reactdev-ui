import React, { Component } from 'react';
import { Col, Button } from 'antd';
import auth from '../lib/auth';

class SideBar extends Component {
    handleLogin() {
        auth.login();
    }

    render() {
        return (
            <Col span={6} className="sidebar">
                <div className="login-section">
                    <Button title="Login" size="large" onClick={this.handleLogin.bind(this)}>
                        Login
                    </Button>
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
