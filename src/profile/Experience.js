import React, { Component } from 'react';
import './experience.css';

export default class Experience extends Component {
    render() {
        return (
            <div className="experience-container">
                <div className="experience-grid">
                    <div>Professional Experience:</div>
                    <div>20 years</div>
                    <div>React Experience:</div>
                    <div>3 years</div>
                    <div>GitHub:</div>
                    <div>vijayst</div>
                    <div>LinkedIn:</div>
                    <div>vijayst</div>
                </div>
                <div className="projects-section">
                    <h2>Client projects</h2>
                    <ul>
                        <li>Project 1</li>
                        <li>Project 2</li>
                    </ul>
                </div>
                <div className="projects-section">
                    <h2>Personal projects</h2>
                    <ul>
                        <li>Project 1</li>
                        <li>Project 2</li>
                    </ul>
                </div>
            </div>
        );
    }
}