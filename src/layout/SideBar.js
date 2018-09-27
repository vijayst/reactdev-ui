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

    getDefaultSelectedKeys() {
        const openKeys = [];
        Object.keys(routes).forEach(key => {
            if (routes[key] === this.props.location.pathname) {
                openKeys.push(key);
            }
        });
        return openKeys;
    }

    render() {
        const { profile, isAuthenticated } = this.state;
        return (
            <div className="sidebar">
                {isAuthenticated ? (
                    <div className="logout-section">
                        <div>{profile && profile.name}</div>
                        <Button
                            title="Logout"
                            size="large"
                            onClick={this.handleLogout.bind(this)}
                        >
                            Logout
                        </Button>
                    </div>
                ) : (
                    <div className="login-section">
                        <Button
                            title="Login"
                            size="large"
                            onClick={this.handleLogin.bind(this)}
                        >
                            Login
                        </Button>
                    </div>
                )}
                <div className="sidebar__intro">
                    React Developers is a site for remote / freelance developers
                    who want to advertise their skills for potential clients and
                    peer developers.
                </div>
                <div className="sidebar__buttons">
                    <button>Register</button>
                    <button>Login</button>
                </div>
                <Menu
                    onClick={this.handleMenuClick.bind(this)}
                    defaultSelectedKeys={this.getDefaultSelectedKeys()}
                    style={{ marginTop: 30 }}
                >
                    <Menu.Item key="home">Home</Menu.Item>
                    <Menu.Item key="search">Search</Menu.Item>
                    {isAuthenticated && (
                        <Menu.Item key="myProfile">My Profile</Menu.Item>
                    )}
                </Menu>
            </div>
        );
    }
}

export default withRouter(SideBar);
