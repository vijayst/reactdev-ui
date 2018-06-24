import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'react-dev.auth0.com',
    clientID: 'kAa3fD3HbbnInvfMk378U381vmYRfPbj',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://react-dev.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}