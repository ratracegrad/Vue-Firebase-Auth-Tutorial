<template>
    <div>
        <div class="card col-6 mx-auto">
            <div class="card-body">
                <form @submit.prevent="register">
                    <h2 class="text-center my-5 title">Register</h2>
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
                    <button type="submit" class="btn btn-primary">
                        Register
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import db from '../db';

export default {
    name: 'Register',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        register() {
            db.auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    alert('Successfully registered! Please login.');
                    this.$router.push('/');
                })
                .catch(error => {
                    alert(error.message);
                });
        },
    },
};
</script>
