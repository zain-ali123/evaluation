<template>
<NavBar role="Admin"/>

<router-link to="/task/create">
    <CustomButton v-show="active" @click="hc" buttonName="Add Product"/>
</router-link>
    <!-- <router-link to="/task/read">
        <CustomButton v-show="active" @click="hc" buttonName="Read Task"/>
    </router-link>
    <router-link to="/task/delete">
        <CustomButton v-show="active" @click="hc" buttonName="Delete Task"/>
    </router-link> -->
    <router-link to="/task/all">
            <CustomButton v-show="active" @click="hc" buttonName="All Products"/>
    </router-link>

<router-view></router-view>


<router-link to="/task">
        <CustomButton v-show="home" @click="hclick" buttonName="Back TO Home"/>
</router-link>
<!-- <router-link  to="/cart">
        <CustomButton  buttonName="view cart"/>
</router-link> -->

</template>

<script>
import NavBar from '../components/NavBar.vue';
import CustomButton from '../components/CustomButton.vue';

export default {
    components: {
        NavBar,
        CustomButton
    },
    data() {
        return {
            active: true,
            home:false
        }        
    },
    name: "TaskView",
    methods: {
        hc() {
            this.active = false;
            this.home = true;
            
        },
        hclick() {
            
            this.active = true;
            this.home=false
            
        }
    },

}
</script>