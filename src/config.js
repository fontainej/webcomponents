//import { firebase } from '../node_modules/firebase/app.js';

export let config = {};

config.init = () => {

    firebase.initializeApp({
        apiKey: "AIzaSyDx6xk0Z3Pmq0EYbVEuS9Aft53zvEAHcIQ",
        authDomain: "kansas-e9e37.firebaseapp.com",
        databaseURL: "https://kansas-e9e37.firebaseio.com",
        storageBucket: "kansas-e9e37.appspot.com",
        messagingSenderId: "282796607337"
    });
};
