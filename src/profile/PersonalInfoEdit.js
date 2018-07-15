import React, { Component } from 'react';
import { Input, Upload, Icon, DatePicker, Select } from 'antd';

export default class PersonalInfoEdit extends Component {
    state = {};

    validate() {
        const { firstName, lastName } = this.state;
        const firstNameError = !firstName ? 'Please enter first name' : '';
        this.setState({ firstNameError });
        const lastNameError = !lastName ? 'Please enter last name' : '';
        this.setState({ lastNameError });
        return !firstNameError && !lastNameError;
    }

    getFormData() {
        const { firstName, lastName, city, dob } = this.state;
        return { firstName, lastName, city, dob };
    }

    handleFirstNameChange(e) {
        this.setState({ firstName: e.target.value });
    }

    handleLastNameChange(e) {
        this.setState({ lastName: e.target.value });
    }

    handleCityChange(e) {
        this.setState({ city: e.target.value });
    }

    handleDOBChange(dob) {
        this.setState({ dob });
    }

    render() {
        const {
            imageUrl,
            firstName,
            firstNameError,
            lastName,
            lastNameError,
            city,
            dob
        } = this.state;
        return (
            <div className="personal-info-edit-container">
                <div className="photo">
                    <Upload
                        name="avatar"
                        action="//jsonplaceholder.typicode.com/posts/"
                        listType="picture-card"
                        showUploadList={false}
                        onPreview={this.handlePreview}
                        onChange={this.handleChange}
                    >
                        {imageUrl ? (
                            <img src={imageUrl} alt="avatar" />
                        ) : (
                            <div>
                                <Icon
                                    type={
                                        this.state.loading ? 'loading' : 'plus'
                                    }
                                />
                                <div className="ant-upload-text">Upload</div>
                            </div>
                        )}
                    </Upload>
                </div>
                <div>First name:</div>
                <div>
                    <Input
                        placeholder="First name"
                        value={firstName}
                        onChange={this.handleFirstNameChange.bind(this)}
                        className={firstNameError && 'error-control'}
                    />
                </div>
                <div className="error-text">{firstNameError}</div>
                <div>Last name:</div>
                <div>
                    <Input
                        placeholder="Last name"
                        value={lastName}
                        onChange={this.handleLastNameChange.bind(this)}
                        className={lastNameError && 'error-control'}
                    />
                </div>
                <div className="error-text">{lastNameError}</div>
                <div>Email:</div>
                <div>
                    <Input placeholder="Email" disabled />
                </div>
                <div />
                <div>City:</div>
                <div>
                    <Input
                        placeholder="City"
                        value={city}
                        onChange={this.handleCityChange.bind(this)}
                    />
                </div>
                <div />
                <div>Country:</div>
                <div>
                    <Select style={{ width: 300 }} />
                </div>
                <div />
                <div>Date of Birth:</div>
                <div>
                    <DatePicker
                        placeholder="Date of Birth"
                        value={dob}
                        onChange={this.handleDOBChange.bind(this)}
                    />
                </div>
                <div />
            </div>
        );
    }
}
