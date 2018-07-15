import React, { Component, Fragment } from 'react';
import { Tabs, Button } from 'antd';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Availability from './Availability';
import './profile.css';

export default class Profile extends Component {
    handleEdit() {
        this.props.history.push('/profile/edit');
    }

    render() {
        return (
            <Fragment>
                <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="Personal Info" key="1">
                        <PersonalInfo />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Experience" key="2">
                        <Experience />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Availability" key="3">
                        <Availability />
                    </Tabs.TabPane>
                </Tabs>
                <div className="buttons">
                    <Button onClick={this.handleEdit.bind(this)}>Edit</Button>
                </div>
            </Fragment>
        );
    }
}