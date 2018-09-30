import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './app.css';
import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <SideBar />
                <Content />
            </div>
        );
    }
}

export default App;
