import firebase from 'firebase';
var config = {
    apiKey: 'AIzaSyAirDcT8LcgK3QMZve6Ye0vn_9iD2mHVkU',
    authDomain: 'vue-auth-e08a4.firebaseapp.com',
    projectId: 'vue-auth-e08a4',
    storageBucket: 'vue-auth-e08a4.appspot.com',
    messagingSenderId: '312910611871',
    appId: '1:312910611871:web:5d0e1806579d920bf1a9aa',
};
// Initialize Firebase
const db = firebase.initializeApp(config);
export default db;
