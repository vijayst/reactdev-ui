import React, { Component } from 'react';
import { Input, Select } from 'antd'; 

export default class Experience extends Component {
    render() {
        return (
            <div className="experience-container">
                <div className="experience-grid">
                    <div>Professional Experience:</div>
                    <div><Select style={{ width: 300 }} /></div>
                    <div>React Experience:</div>
                    <div><Select style={{ width: 300 }} /></div>
                    <div>GitHub:</div>
                    <div><Input placeholder="GitHub URL" /></div>
                    <div>LinkedIn:</div>
                    <div><Input placeholder="LinkedIn URL" /></div>
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