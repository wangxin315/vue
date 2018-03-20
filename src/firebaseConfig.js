import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBvOXNbRQQUaXrhcTOhnjLg14SwX0geqL8",
    authDomain: "troove-168621.firebaseapp.com",
    databaseURL: "https://troove-168621.firebaseio.com",
    projectId: "troove-168621",
    storageBucket: "troove-168621.appspot.com",
    messagingSenderId: "353784165861"

};
export const firebaseApp = firebase.initializeApp(config);
const db = firebase.database();
export const dbUsersRef = db.ref('users')
 