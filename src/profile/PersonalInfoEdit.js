import React, { Component } from 'react';
import { Input, Upload, Icon, DatePicker, Select } from 'antd';

export default class PersonalInfoEdit extends Component {
    state = {};

    validate() {
        const { firstName } = this.state;
        const firstNameError = !firstName ? 'Please enter first name' : '';
        this.setState({ firstNameError });
    }

    handleFirstNameChange(e) {
        this.setState({ firstName: e.target.value });
    }

    render() {
        const { imageUrl, firstName, firstNameError } = this.state;
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
                    <Input placeholder="Last name" />
                </div>
                <div />
                <div>Email:</div>
                <div>
                    <Input placeholder="Email" />
                </div>
                <div />
                <div>City:</div>
                <div>
                    <Input placeholder="City" />
                </div>
                <div />
                <div>Country:</div>
                <div>
                    <Select style={{ width: 300 }} />
                </div>
                <div />
                <div>Date of Birth:</div>
                <div>
                    <DatePicker placeholder="Date of Birth" />
                </div>
                <div />
            </div>
        );
    }
}
