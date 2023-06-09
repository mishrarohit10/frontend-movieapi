import axios from 'axios';

export default axios.create({
    // baseURL:'https://9c96-103-106-239-104.ap.ngrok.io',

    // headers: {"ngrok-skip-browser-warning": "true"}

    baseURL:'https://6078-122-173-178-193.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning":"true",
    "Access-Control-Allow-Origin": "http://localhost:3000"}
});