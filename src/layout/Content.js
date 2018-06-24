import React, { Component } from 'react';
import { Col } from 'antd';

class Content extends Component {
    render() {
        return (
            <Col span={18} className="content">
                <header className="header">
                    <h1>React Developers</h1>
                </header>
            </Col>
        );
    }
}

export default Content;
