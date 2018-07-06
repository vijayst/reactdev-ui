import React, { Component } from 'react';

export default class Availability extends Component {
    render() {
        return (
            <div className="availability-container">
                <div className="availability-grid">
                    <div>Available:</div>
                    <div>Yes</div>
                    <div>Next Available Date:</div>
                    <div></div>
                    <div>Minimum Hours:</div>
                    <div>20 hours /week</div>
                    <div>Work Type:</div>
                    <div>Hourly</div>
                    <div>Hourly Rate:</div>
                    <div>$30 /hour</div>
                </div>
                <div className="notes-section">
                    <h2>Notes:</h2>
                    <div>Some Free text here</div>
                </div>
            </div>
        );
    }
}
