import React, { Component } from 'react';

export default class UserInfo extends Component {
    render() {
        return (
            <form>
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <button>Next</button>
            </form>
        );
    }
}
