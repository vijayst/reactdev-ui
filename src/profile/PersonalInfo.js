import React, { Component } from 'react';
import Photo from '../images/vijay.jpg';

export default class PersonalInfo extends Component {
    render() {
        return (
            <div className="personal-info-container">
                <div className="photo">
                    <img src={Photo} alt="" />
                </div>
                <div>First name:</div>
                <div>Vijay</div>
                <div>Last name:</div>
                <div>Thirugnanam</div>
                <div>Email:</div>
                <div>vijayst@gmail.com</div>
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