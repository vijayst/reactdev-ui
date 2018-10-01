import React, { Component } from 'react';
import Error from '../common/Error';

export default class Account extends Component {
    state = {};

    handleNext(e) {
        e.preventDefault();
        const { email, password, repeat } = this.state;
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailError = emailRegex.test(email)
            ? ''
            : 'Please enter a valid email address';
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const passwordError = passwordRegex.test(password)
            ? ''
            : 'Password should contain 1 letter, 1 number and should have 8 characters';
        const repeatError = password !== repeat ? 'Passwords do not match' : '';
        this.setState({ emailError, passwordError, repeatError });
        if (!emailError && !passwordError && !repeatError) {
            this.props.history.push('/signup/profile');
        }
    }

    render() {
        const {
            firstName,
            lastName,
            email,
            password,
            repeat,
            emailError,
            passwordError,
            repeatError
        } = this.state;
        const disabled =
            !firstName || !lastName || !email || !password || !repeat;
        return (
            <main className="centered">
                <form className="form">
                    <div className="form__title">Sign Up</div>
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
                    <Error message={emailError} />
                    <input
                        type="password"
                        placeholder="Password"
                        className={passwordError && 'error'}
                        onChange={e =>
                            this.setState({ password: e.target.value })
                        }
                    />
                    <Error message={passwordError} />
                    <input
                        type="password"
                        placeholder="Repeat Password"
                        className={repeatError && 'error'}
                        onChange={e =>
                            this.setState({ repeat: e.target.value })
                        }
                    />
                    <Error message={repeatError} />
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
