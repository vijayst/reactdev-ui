import React, { Component, Fragment } from 'react';
import { Tabs, Button } from 'antd';
import PersonalInfoEdit from './PersonalInfoEdit';
import ExperienceEdit from './ExperienceEdit';
import AvailabilityEdit from './AvailabilityEdit';
import './profileEdit.css';

export default class ProfileEdit extends Component {
    handleCancel() {
        this.props.history.goBack();
    }

    render() {
        return (
            <Fragment>
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Personal Info" key="1">
                    <PersonalInfoEdit />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Experience" key="2">
                    <ExperienceEdit />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Availability" key="3">
                    <AvailabilityEdit />
                </Tabs.TabPane>
            </Tabs>
                <div className="buttons">
                    <Button onClick={this.handleCancel.bind(this)}>Cancel</Button>
                    <Button>Save</Button>
                </div>
            </Fragment>
        );
    }
}