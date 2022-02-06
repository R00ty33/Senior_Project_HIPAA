import React from 'react';
import Axios from 'axios'; // API 
import {Cookies} from "react-cookie"

const EcommerceCookieProvider = {

    getEcommerceCookie: async function() {
        if(!document.cookie) {
            console.log("Fetching cookie");
            Axios.get('http://localhost:8080/api/createCookies', {withCredentials: true, crossorigin: true, origin: "http://localhost:3000"
            }).then((response) => {
                console.log("Cookie received");
                console.log(response.status, response, response.data);
                console.log(document.cookie);
            }).catch((err) => {
                console.log("Promise Rejected", err.message, err.response.data);
            })
        }
        else {
            console.log("Already have cookie: " + document.cookie);
        }
    }

}

export default EcommerceCookieProvider;