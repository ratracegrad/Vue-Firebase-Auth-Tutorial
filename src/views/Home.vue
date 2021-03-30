<template>
    <div>
        <div class="card col-6 mx-auto">
            <div class="card-body">
                <form @submit.prevent="login">
                    <h2 class="text-center my-5 title">Login</h2>
                    <div class="form-group">
                        <input
                            type="email"
                            placeholder="Email address..."
                            v-model="email"
                            class="form-control"
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="password"
                            placeholder="password..."
                            v-model="password"
                            class="form-control"
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import db from '../db';

export default {
    name: 'Home',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        login() {
            db.auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    alert('Successfully logged in');
                    this.$router.push('/dashboard');
                })
                .catch(error => {
                    alert(error.message);
                });
        },
    },
};
</script>
