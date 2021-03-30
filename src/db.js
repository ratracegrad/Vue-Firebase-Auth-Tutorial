import firebase from 'firebase';
var config = {
    apiKey: 'YourCode',
    authDomain: 'YourCode',
    projectId: 'YourCode',
    storageBucket: 'YourCode',
    messagingSenderId: 'YourCode',
    appId: 'YourCode',
};
// Initialize Firebase
const db = firebase.initializeApp(config);
export default db;
