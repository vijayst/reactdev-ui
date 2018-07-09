import React, { Component } from 'react';
import { Input, InputNumber, Select, Switch, DatePicker } from 'antd';

export default class AvailabilityEdit extends Component {
    state = {
        available: false
    };

    handleAvailableChange(available) {
        this.setState({ available });
    }

    render() {
        const { available } = this.state;
        return (
            <div className="availability-edit-container">
                <div className="availability-grid">
                    <div>Available:</div>
                    <div>
                        <Switch checked={available} onChange={this.handleAvailableChange.bind(this)} />
                    </div>
                    <div>Next Available Date:</div>
                    <div><DatePicker /></div>
                    <div>Minimum Hours:</div>
                    <div>
                        <Select style={{ width: 300 }}>
                            <Select.Option key="10">10 Hours</Select.Option>
                            <Select.Option key="20">20 Hours</Select.Option>
                            <Select.Option key="30">30 Hours</Select.Option>
                            <Select.Option key="40">40 Hours</Select.Option>
                        </Select>
                    </div>
                    <div>Preferred Work Type:</div>
                    <div>
                        <Select style={{ width: 300 }}>
                            <Select.Option key="hourly">Hourly</Select.Option>
                            <Select.Option key="fixed">Fixed Price</Select.Option>
                        </Select>
                    </div>
                    <div>Hourly Rate:</div>
                    <div><InputNumber /></div>
                    <div style={{ alignSelf: 'start' }}>Notes:</div>
                    <div><Input.TextArea /></div>
                </div>
            </div>
        );
    }
}
