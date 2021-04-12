<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/register">Register</router-link> |
            <router-link to="/dashboard">Dashboard</router-link> |
            <a class="float-right logout" @click="logout">Logout</a>
        </div>
        <router-view />
    </div>
</template>

<script>
import db from './db';

export default {
    methods: {
        logout() {
            db.auth()
                .signOut()
                .then(() => {
                    alert('Successfully logged out');
                    this.$router.push('/');
                })
                .catch(error => {
                    alert(error.message);
                    this.$router.push('/');
                });
        },
    },
};
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
.logout {
    color: lightblue;
    font-size: 1rem;
    font-weight: 400;
    transition: 0.3s ease-in;
    text-decoration: none;
}
.logout:hover {
    color: rgb(20, 130, 149);
    transform: scale(1.05);
    cursor: pointer;
}
</style>
