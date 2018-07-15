import React, { Component } from 'react';
import { Tabs, Button } from 'antd';
import PersonalInfoEdit from './PersonalInfoEdit';
import ExperienceEdit from './ExperienceEdit';
import AvailabilityEdit from './AvailabilityEdit';
import './profileEdit.css';

export default class ProfileEdit extends Component {
    constructor() {
        super();
        this.personalInfoRef = React.createRef();
        this.experienceRef = React.createRef();
        this.availabilityRef = React.createRef();
    }

    handleSave(e) {
        e.preventDefault();
        this.personalInfoRef.current.validate();
    }

    handleCancel() {
        this.props.history.goBack();
    }

    render() {
        return (
            <form onSubmit={this.handleSave.bind(this)}>
                <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="Personal Info" key="1">
                        <PersonalInfoEdit ref={this.personalInfoRef} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Experience" key="2">
                        <ExperienceEdit ref={this.experienceRef} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Availability" key="3">
                        <AvailabilityEdit ref={this.availabilityRef} />
                    </Tabs.TabPane>
                </Tabs>
                <div className="buttons">
                    <Button onClick={this.handleCancel.bind(this)}>
                        Cancel
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </div>
            </form>
        );
    }
}
