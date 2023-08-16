<template>
    <div class="grid justify-items-center py-12  shadow-xl px-12 ">
        <div class="mb-6">
            <label for="Enter Character ID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter
                Email</label>
            <input v-model="form.email" type="text" 
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <span v-if="errors.email" class="error">{{ errors.email }}</span>
        </div>



        <div>
            <label for="Enter Character ID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter
                Password</label>
            <input type="password" v-model="form.password" 
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <span v-if="errors.password" class="error">{{ errors.password }}</span>
        </div>

        <div class="mt-5">
            <span v-if="errors.credentials" class="error">{{ errors.credentials }}</span>
            <CustomButton @click="Login" buttonName="Login "/>

        </div>
    </div>


    <router-link to="/register">
        <CustomButton  buttonName="Register "/>
    </router-link>
</template>

<script>

import router from '@/router';
import CustomButton from './CustomButton.vue';
import { mapState, } from 'vuex';
import store from '@/store';

export default {
    name: 'LoginComponent',
    components: {
        CustomButton
    },

    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            errors: {},
            continue: false,
            count: 0

        }
    },
    computed: {
       
    },
    

    methods: {
        ...mapState({ auth: 'isAuthenticated' }) ,
        getForm(obj) {
            console.log(obj);
        },
        validateForm() {

            this.errors = {};



            if (!this.form.email) {
                this.errors.email = 'Email is required.';
            } else if (!this.isValidEmail(this.form.email)) {
                this.errors.email = 'Invalid email format.';
            }


            if (!this.form.password) {
                this.errors.password = 'Password is required.';
            } else if (!/[!@#$%^&*(),.?":{ }|<>]/.test(this.form.password)) {
                this.errors.password = 'Password must include a special character.';
            } else if (!/^[A-Z]/.test(this.form.password)) {
                this.errors.password = 'Password must start with a capital letter.';
            } else if (this.form.password.length !== 8) {
                this.errors.password = 'Password must be 8 digits long.';
            }



            return Object.keys(this.errors).length === 0;
        },
        isValidEmail(email) {

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        },
        Login() {


            if (this.form.email == localStorage.getItem('email') && this.form.password == localStorage.getItem('password')) {
            
                store.state.userAuth = true;
                router.push('/user')
               

                

            }

            else {
                this.count = this.count + 1;
                this.errors.credentials = ' invalid credentials.Please enter correct credentials.';
                console.log(' invalid credentials. Please enter correct credentials.');
                
            }
            if (this.form.email == 'admin' && this.form.password == 'admin') {
                store.state.isAuthenticated = true
                router.push('/task');

            }
            else {
                this.count = this.count + 1;
                this.errors.credentials = ' invalid credentials.Please enter correct credentials.';
                console.log(' invalid credentials. Please enter correct credentials.');
                
            }
        },





    },
    watch: {
        count(val) {
            if (val == 3) {
                alert("you have entered wrong credentials 3 time")
            }
        }

    },
    created() {

    },
    mounted() {
        // console.log("im in mounted hoook")
    },
    updated() {
        // console.log("im in updated hoook")
    },
    unmounted() {
        // console.log("im in unmounted hoook")
    },

}

</script>