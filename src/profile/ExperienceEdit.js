import React, { Component } from 'react';
import { Input, Select, Table } from 'antd';
import moment from 'moment';

export default class ExperienceEdit extends Component {
    constructor() {
        super();
        this.state = {
            professionalExperience: 'None',
            reactExperience: 'None'
        };
    }

    getProfessionalExperienceOptions() {
        const options = [
            'None',
            'Less than One Year',
            '1 Year'
        ];
        for (let i = 2; i <= 30; i++) {
            options.push(`${i} Years`);
        }
        return options;
    }

    getReactExperienceOptions() {
        const options = [
            'None',
            'Less than One Year',
            '1 Year'
        ];
        console.log(moment.duration(moment().diff(moment('2013-03-01'))).years());
        for (let i = 2; i <= 30; i++) {
            options.push(`${i} Years`);
        }
        return options;
    }

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
        this.getProfessionalExperienceOptions();
        this.getReactExperienceOptions();
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