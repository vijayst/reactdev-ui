import React, { Component } from 'react';
import './personalInfo.css';

export default class PersonalInfo extends Component {
    render() {
        return (
            <div className="personal-info-container">
                <div>First name:</div>
                <div>Vijay</div>
                <div>Last name:</div>
                <div>Thirugnanam</div>
                <div>Email:</div>
                <div>vijayst@gmail.com</div>
                <div>Photo:</div>
                <div></div>
                <div>City:</div>
                <div>Bangalore</div>
                <div>Country:</div>
                <div>India</div>
                <div>Date of Birth:</div>
                <div>15-Mar-1977</div>
            </div>
        );
    }
}