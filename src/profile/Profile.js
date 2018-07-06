import React, { Component } from 'react';
import { Tabs } from 'antd';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Availability from './Availability';
import './profile.css';

export default class Profile extends Component {
    render() {
        return (
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
        );
    }
}