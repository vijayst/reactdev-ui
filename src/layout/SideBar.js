import React, { Component } from 'react';
import { Col, Button, Menu } from 'antd';
import auth from '../lib/auth';
import { withRouter } from 'react-router-dom';

const routes = {
    home: '/',
    search: '/search',
    myProfile: '/profile'
};

class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            profile: {},
            isAuthenticated: auth.isAuthenticated()
        };
    }

    componentDidMount() {
        if (this.state.isAuthenticated) {
            auth.getProfile((err, profile) => {
                this.setState({ profile });
            });
        }
    }

    handleMenuClick({ key }) {
        console.log(key);
        this.props.history.push(routes[key]);
    }

    handleLogin() {
        auth.login();
    }

    handleLogout() {
        auth.logout();
        this.setState({ isAuthenticated: false });
        this.props.history.replace('/');
    }

    render() {
        return (
            <Col span={6} className="sidebar">
                {this.state.isAuthenticated ? (
                    <div className="logout-section">
                        <div>{this.state.profile && this.state.profile.name}</div>
                        <Button title="Logout" size="large" onClick={this.handleLogout.bind(this)}>
                            Logout
                        </Button>
                    </div>
                ) : (
                        <div className="login-section">
                            <Button title="Login" size="large" onClick={this.handleLogin.bind(this)}>
                                Login
                        </Button>
                        </div>
                    )}
                <div className="intro-section">
                    React Developers is a site for remote / freelance developers who want to advertise their skills for potential clients and peer developers.
                    Register today and invite your peers.
                </div>
                <Menu onClick={this.handleMenuClick.bind(this)}>
                    <Menu.Item key="home">Home</Menu.Item>
                    <Menu.Item key="search">Search</Menu.Item>
                    <Menu.Item key="myProfile">My Profile</Menu.Item>
                </Menu>
            </Col>
        );
    }
}

export default withRouter(SideBar);
