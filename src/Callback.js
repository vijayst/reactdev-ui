import React, { Component } from "react";
import auth from "./lib/auth";
import { Spin } from "antd";

class Callback extends Component {
    componentDidMount() {
        auth.handleAuthentication().then(redirectUrl => {
            this.props.history.replace(redirectUrl);
        });
    }
    render() {
        return (
            <div className="centered-page">
                <Spin size="large" />
            </div>
        );
    }
}

export default Callback;
