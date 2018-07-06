import React, { Component } from 'react';
import { Input } from 'antd';
import './profileEdit.css';

export default class PersonalInfoEdit extends Component {
    render() {
        return (
            <div className="personal-info-edit-container">
                <div>First name:</div>
                <div><Input placeholder="First name" /></div>
                <div>Last name:</div>
                <div><Input placeholder="Last name" /></div>
                <div>Email:</div>
                <div><Input placeholder="Email" /></div>
                <div>Photo:</div>
                <div></div>
                <div>City:</div>
                <div><Input placeholder="City" /></div>
                <div>Country:</div>
                <div><Input placeholder="Country" /></div>
                <div>Date of Birth:</div>
                <div><Input placeholder="Date of Birth" /></div>
            </div>
        );
    }
}