import React from 'react';
import Axios from 'axios'; // API 
import {Cookies} from "react-cookie"

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