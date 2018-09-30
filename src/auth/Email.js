import React, { Component } from 'react';

export default class Email extends Component {
    handleNext(e) {
        e.preventDefault();
        this.props.history.push('/signup/password');
    }

    render() {
        return (
            <main className="centered">
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <div className="ralign">
                        <button onClick={this.handleNext.bind(this)}>
                            Next
                        </button>
                    </div>
                </form>
            </main>
        );
    }
}
