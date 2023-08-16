<template>
    <NavBar/>
    <AllProducts/>
    <router-link to="/cart">
        <CustomButton  buttonName="ViewCart"/>
    </router-link>
   
</template>

<script>
import NavBar from '@/components/NavBar.vue';

import CustomButton from '@/components/CustomButton.vue';
import AllProducts from '../components/AllProducts.vue';


export default {
    components: {
        NavBar,
        CustomButton,
        AllProducts


    
    },
 name:'UserView'
}
</script>