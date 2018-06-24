import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './app.css';
import { Row, Col, Button } from 'antd';
import Auth from './Auth';

class App extends Component {
  handleLogin() {
    const auth = new Auth();
    auth.login();
  }

  render() {
    return (
      <div className="app">
        <Row>
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
          <Col span={18} className="content">
          <header className="header">
          <h1>React Developers</h1>
        </header>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
