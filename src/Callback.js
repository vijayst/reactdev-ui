import React, { Component } from 'react';
import auth from './lib/auth';

class Callback extends Component {
  componentDidMount() {
    auth.handleAuthentication();
  }
  render() {
    return (
      <div>
          Callback component
      </div>
    );
  }
}

export default Callback;