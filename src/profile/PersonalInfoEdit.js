import React, { Component } from 'react';
import { Input, Upload, Icon, DatePicker, Select } from 'antd';

export default class PersonalInfoEdit extends Component {
    state = {};

    render() {
        const { imageUrl } = this.state;
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
                        {imageUrl ? <img src={imageUrl} alt="avatar" /> : (
                        <div>
                            <Icon type={this.state.loading ? 'loading' : 'plus'} />
                            <div className="ant-upload-text">Upload</div>
                        </div>
                        )}
                    </Upload>
                </div>
                <div>First name:</div>
                <div><Input placeholder="First name" /></div>
                <div>Last name:</div>
                <div><Input placeholder="Last name" /></div>
                <div>Email:</div>
                <div><Input placeholder="Email" /></div>
                <div>City:</div>
                <div><Input placeholder="City" /></div>
                <div>Country:</div>
                <div><Select style={{ width: 300 }} /></div>
                <div>Date of Birth:</div>
                <div><DatePicker placeholder="Date of Birth" /></div>
            </div>
        );
    }
}