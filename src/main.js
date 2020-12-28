import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: 'YouConfigHere',
    authDomain: 'YouConfigHere',
    projectId: 'YouConfigHere',
    storageBucket: 'YouConfigHere',
    messagingSenderId: 'YouConfigHere',
    appId: 'YouConfigHere',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
