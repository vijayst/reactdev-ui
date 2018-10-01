import React, { Component } from 'react';
import Error from '../common/Error';

export default class Account extends Component {
    state = {};

    handleNext(e) {
        e.preventDefault();
        const { email } = this.state;
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailError = regex.test(email)
            ? ''
            : 'Please enter a valid email address';
        this.setState({ emailError });
        if (!emailError) {
            this.props.history.push('/signup/profile');
        }
    }

    render() {
        const { firstName, lastName, email, emailError } = this.state;
        const disabled = !firstName || !lastName || !email;
        return (
            <main className="centered">
                <form className="form">
                    <div className="form__title">Sign Up</div>
                    <Error message={emailError} />
                    <input
                        type="text"
                        placeholder="First Name"
                        onChange={e =>
                            this.setState({ firstName: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        onChange={e =>
                            this.setState({ lastName: e.target.value })
                        }
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className={emailError && 'error'}
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <div className="mt24 ralign">
                        <button
                            disabled={disabled}
                            onClick={this.handleNext.bind(this)}
                        >
                            Next
                        </button>
                    </div>
                </form>
            </main>
        );
    }
}
