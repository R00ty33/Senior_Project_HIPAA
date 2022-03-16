import React from 'react';
import Axios from 'axios'; // API 
import {Cookies} from "react-cookie"
import { systemProps } from '@chakra-ui/styled-system';

const CookieProvider = {

    getCookie: function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    },

    getEcommerceCookie: async function() {
        if(!getCookie("ecommerceCookie")) {
            console.log("Fetching cookie");
            Axios.get('https://localhost:8843/api/createCookies', {withCredentials: true, crossorigin: true, origin: "https://localhost:3000"
            }).then((response) => {
                console.log("Cookie received");
            }).catch((err) => {
                console.log("Promise Rejected", err.message, err.response.data);
            })
        }
        else {
            console.log("Already have cookie: " + document.cookie);
        }
    },

    updateEcommerceCookie: async function() {
        Axios.post('https://localhost:8843/api/updateEcommerceCookie?cookie=' + CookieProvider.getCookie("ecommerceCookie") + "&jwt=" + CookieProvider.getCookie("JWTCookie"), {withCredentials: true, crossorigin: true, origin: "https://localhost:3000"
        }).then((response) => {
            console.log("User does not have a EcommerceCookie in DB")
        }).catch((err) => {
            console.log("Promise Rejected", err.message, err.response.data);
        })
    },

    checkForEcommerceCookie: async function() {
        if (getCookie("JWTCookie")) {
            Axios.get('https://localhost:8843/api/getEcommerceCookie?jwt=' + CookieProvider.getCookie("JWTCookie"), {withCredentials: true, crossorigin: true, origin: "https://localhost:3000"
            }).then((response) => {
                console.log("User already has a EcommerceCookie in DB\nOverriding cookie");
            }).catch((err) => {
                if (err.status = 404) {
                    if (!getCookie("ecommerceCookie")) { 
                        this.getEcommerceCookie().then(() => {
                            Axios.post('https://localhost:8843/api/updateEcommerceCookie?cookie=' + CookieProvider.getCookie("ecommerceCookie") + "&jwt=" + CookieProvider.getCookie("JWTCookie"), {withCredentials: true, crossorigin: true, origin: "https://localhost:3000"
                            }).then((response) => {
                                console.log("User does not have a EcommerceCookie in DB")
                            }).catch((err) => {
                                console.log("Promise Rejected", err.message, err.response.data);
                            })
                        })
                    } else {
                        Axios.post('https://localhost:8843/api/updateEcommerceCookie?cookie=' + CookieProvider.getCookie("ecommerceCookie") + "&jwt=" + CookieProvider.getCookie("JWTCookie"), {withCredentials: true, crossorigin: true, origin: "https://localhost:3000"
                        }).then((response) => {
                            console.log("User does not have a EcommerceCookie in DB")
                        }).catch((err) => {
                            console.log("Promise Rejected", err.message, err.response.data);
                        })
                    }
                }
            }) 
        }
        else {
            this.getEcommerceCookie();
        }
    },

    deleteCookie: function(name) {
        document.cookie = name+'=; Max-Age=-9999999999,';
    }

}

export default CookieProvider;



function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}