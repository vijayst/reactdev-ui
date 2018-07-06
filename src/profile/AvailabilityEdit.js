import React, { Component } from 'react';
import { Input, InputNumber, Select, Switch, DatePicker } from 'antd';

export default class AvailabilityEdit extends Component {
    render() {
        return (
            <div className="availability-edit-container">
                <div className="availability-grid">
                    <div>Available:</div>
                    <div><Switch /></div>
                    <div>Next Available Date:</div>
                    <div><DatePicker /></div>
                    <div>Minimum Hours:</div>
                    <div><Select style={{ width: 300 }} /></div>
                    <div>Preferred Work Type:</div>
                    <div><Select style={{ width: 300 }} /></div>
                    <div>Hourly Rate:</div>
                    <div><InputNumber /></div>
                    <div>Notes:</div>
                    <div><Input.TextArea /></div>
                </div>
            </div>
        );
    }
}
