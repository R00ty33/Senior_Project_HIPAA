import React from 'react';
import jwt from 'jwt-decode';
import CookieProvider from './CookieProvider';

const TokenProvider = {
    //setTokens: function(access_token, refresh_token) {
        //localStorage.setItem("ACCESS_TOKEN", access_token);
        //localStorage.setItem("REFRESH_TOKEN", refresh_token);
    //},

    getAccessToken: function() {
        return CookieProvider.getCookie("JWTCookie")
        //return localStorage.getItem("ACCESS_TOKEN");
    },

    //getRefreshToken: function() {
        //return localStorage.getItem("REFRESH_TOKEN");
    //},

    getExpirationDate: function(jwtToken) {
        if (jwtToken === null || jwtToken === 'null') {
            return null;
        }
        if (!jwtToken) {
            return null;
        }
    
        const jwt = JSON.parse(atob(jwtToken.split('.')[1]));
    
        // multiply by 1000 to convert seconds into milliseconds
        return jwt && jwt.exp && jwt.exp * 1000;
    },

    
    isExpired: function(expirationDate) {
        if (expirationDate === null || expirationDate === 'null') {
            return true;
        }

        return Date.now() > expirationDate; /* Returns true if the expiration is invalid/expired */
    },

    getToken: async function() {
        if (CookieProvider.getCookie("JWTCookie") == null) {
            return null;
        }
        
        if (isExpired(getExpirationDate(CookieProvider.getCookie("JWTCookie")))) {
            /*
            const updatedToken = await fetch('/update-token', {
                method: 'POST',
                // send refresh token
                // method to update token 
            })
                .then(r => r.json());
            */

            // setTokens(updatedToken, updatedRefreshToken);
        }

        return CookieProvider.getCookie("JWTCookie")
    },

    getEmail: function() {
        let token = CookieProvider.getCookie("JWTCookie");
        let decoded = jwt(token);
        return decoded.sub;
    },

    getUserName: function () {
        let decoded = getEmail()
        return decoded.substring(0, decoded.indexOf('@'))
    },

    isLoggedIn: function() { 
        // if (localStorage.getItem("ACCESS_TOKEN")) return false;
        if ((isExpired(getExpirationDate(CookieProvider.getCookie("JWTCookie"))))) {
            console.log("Is logged in: false")
            return false;
        }
        else {
            console.log("Is logged in: true" + CookieProvider.getCookie("JWTCookie"))
            return true;
        }
    }

}

export default TokenProvider; /** EXPORT FUNCTIONS */




/** defined functions that are used in above functions */
function getExpirationDate(jwtToken) {
    if (jwtToken === null || jwtToken === 'null') {
        return null;
    }

    const jwt = JSON.parse(atob(jwtToken.split('.')[1]));

    // multiply by 1000 to convert seconds into milliseconds
    return jwt && jwt.exp && jwt.exp * 1000;
}

function getEmail() {
    let token = CookieProvider.getCookie("JWTCookie");
    let decoded = jwt(token);
    return decoded.sub;
}

function isExpired (expirationDate) {
    if (expirationDate === null || expirationDate === 'null') {
        return true;
    }
    if (!expirationDate) {
        return true;
    }

    return Date.now() > expirationDate; /* Returns true if the expiration is invalid/expired */
}