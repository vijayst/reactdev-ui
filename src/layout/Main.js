import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './app.css';
import { Row } from 'antd';
import SideBar from './SideBar';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Row>
          <SideBar />
          <Content />
        </Row>
      </div>
    );
  }
}

export default App;
