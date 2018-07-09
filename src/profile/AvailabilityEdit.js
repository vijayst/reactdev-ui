import React, { Component, Fragment } from 'react';
import { Input, InputNumber, Select, Switch, DatePicker } from 'antd';

export default class AvailabilityEdit extends Component {
    state = {
        available: false,
        workType: 'Hourly'
    };

    handleAvailableChange(available) {
        this.setState({ available });
    }

    handleWorkTypeChange(workType) {
        this.setState({ workType });
    }

    render() {
        const { available, workType } = this.state;
        return (
            <div className="availability-edit-container">
                <div className="availability-grid">
                    <div>Available:</div>
                    <div>
                        <Switch checked={available} onChange={this.handleAvailableChange.bind(this)} />
                    </div>
                    {available ? (
                        <Fragment>
                            <div>Minimum Hours:</div>
                            <div>
                                <Select style={{ width: 300 }}>
                                    <Select.Option key="10">10 Hours</Select.Option>
                                    <Select.Option key="20">20 Hours</Select.Option>
                                    <Select.Option key="30">30 Hours</Select.Option>
                                    <Select.Option key="40">40 Hours</Select.Option>
                                </Select>
                            </div>
                        </Fragment>
                    ) : (
                            <Fragment>
                                <div>Next Available Date:</div>
                                <div><DatePicker /></div>
                            </Fragment>
                        )}
                    <div>Preferred Work Type:</div>
                    <div>
                        <Select style={{ width: 300 }} value={workType} onChange={this.handleWorkTypeChange.bind(this)}>
                            <Select.Option key="Hourly">Hourly</Select.Option>
                            <Select.Option key="Fixed Price">Fixed Price</Select.Option>
                        </Select>
                    </div>
                    {workType === 'Hourly' && (
                        <Fragment>
                            <div>Hourly Rate:</div>
                            <div><InputNumber /></div>
                        </Fragment>
                    )}
                    <div style={{ alignSelf: 'start' }}>Notes:</div>
                    <div><Input.TextArea /></div>
                </div>
            </div>
        );
    }
}
