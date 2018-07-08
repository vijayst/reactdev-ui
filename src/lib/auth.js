import auth0 from "auth0-js";

class Auth {
    auth0 = new auth0.WebAuth({
        domain: "react-dev.auth0.com",
        clientID: "kAa3fD3HbbnInvfMk378U381vmYRfPbj",
        redirectUri:
            process.env.NODE_ENV === "development"
                ? "http://localhost:3000/callback"
                : "https://reactdev.org/callback",
        audience: "https://react-dev.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid profile"
    });

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        return new Promise((resolve) => {
            this.auth0.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult);
                    const altRedirectUrl = localStorage.getItem("alt_redirect_uri");
                    if (altRedirectUrl) {
                        localStorage.removeItem("alt_redirect_uri");
                        resolve(altRedirectUrl);
                    }
                }
                resolve('/');
            });
        });
    }

    setSession(authResult) {
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem("expires_at", expiresAt);
    }

    getAccessToken() {
        return localStorage.getItem("access_token");
    }

    getProfile(cb) {
        let accessToken = this.getAccessToken();
        if (!accessToken) return cb("Invalid access token");
        this.auth0.client.userInfo(accessToken, (err, profile) => {
            if (profile) {
                this.userProfile = profile;
            }
            cb(err, profile);
        });
    }

    logout() {
        // Clear access token and ID token from local storage
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    }
}

export default new Auth();
