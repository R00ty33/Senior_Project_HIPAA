
import React, { useState, useEffect } from 'react';
import tokenProvider from './TokenProvider';
import { useHistory } from 'react-router-dom';
import CookieProvider from './CookieProvider';
import { useNavigate } from 'react-router-dom';


const AuthProvider = {
    logout: function() {
        console.log("Logged Out");
        CookieProvider.deleteCookie("JWTCookie")
        CookieProvider.deleteCookie("ecommerceCookie")
        localStorage.setItem('cartCount', 0);
        localStorage.setItem('orderHash', '');
    },

    useAuth: function() {
        return tokenProvider.isLoggedIn();
    }

}

export default AuthProvider