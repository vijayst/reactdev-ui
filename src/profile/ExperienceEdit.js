import React, { Component } from 'react';
import { Input, Select, Table } from 'antd';
import moment from 'moment';

export default class ExperienceEdit extends Component {
    constructor() {
        super();
        this.state = {
            experience: 'None',
            reactExperience: 'None'
        };
    }

    validate() {
        return true;
    }

    getFormData() {
        return this.state;
    }

    handleExperienceChange(experience) {
        this.setState({ experience });
    }

    handleReactExperienceChange(reactExperience) {
        this.setState({ reactExperience });
    }

    handleGithubUrlChange(e) {
        this.setState({ githubUrl: e.target.value });
    }

    handleLinkedInUrlChange(e) {
        this.setState({ linkedInUrl: e.target.value });
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
        const maxYears = moment.duration(moment().diff(moment('2013-03-01'))).years();
        for (let i = 2; i <= maxYears; i++) {
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

        const { experience, reactExperience, githubUrl, linkedInUrl } = this.state;

        return (
            <div className="experience-edit-container">
                <div className="experience-grid">
                    <div>Professional Experience:</div>
                    <div>
                        <Select style={{ width: 300 }} value={experience} onChange={this.handleExperienceChange.bind(this)}>
                            {this.getProfessionalExperienceOptions().map(option => (
                                <Select.Option key={option}>{option}</Select.Option>
                            ))}
                        </Select>
                    </div>
                    <div>React Experience:</div>
                    <div>
                        <Select style={{ width: 300 }} value={reactExperience} onChange={this.handleReactExperienceChange.bind(this)}>
                            {this.getReactExperienceOptions().map(option => (
                                <Select.Option key={option}>{option}</Select.Option>
                            ))}
                        </Select>
                    </div>
                    <div>GitHub:</div>
                    <div><Input addonBefore="https://github.com/" placeholder="GitHub URL" value={githubUrl} onChange={this.handleGithubUrlChange.bind(this)} /></div>
                    <div>LinkedIn:</div>
                    <div><Input addonBefore="https://www.linkedin.com/in/" placeholder="LinkedIn URL" value={linkedInUrl} onChange={this.handleLinkedInUrlChange.bind(this)} /></div>
                </div>
                <div className="projects-section">
                    <h2>Projects</h2>
                    <Table columns={columns} />
                </div>
            </div>
        );
    }
}