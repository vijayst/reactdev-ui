import React, { Component } from 'react';
import { Input, Select, Table } from 'antd';

export default class Experience extends Component {
    render() {
        const columns = [{
            title: 'Project Name',
            dataIndex: 'name',
            key: 'name',
          }, {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
          }, {
            title: 'Client',
            dataIndex: 'client',
            key: 'client',
          }, {
              title: 'Duration',
              dataIndex: 'duration',
              key: 'duration'
          }];
        return (
            <div className="experience-edit-container">
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
                    <h2>Projects</h2>
                    <Table columns={columns} />
                </div>
            </div>
        );
    }
}