<template>
    <div class="grid justify-items-center">

        <p class="text-4xl "> Login To Tasks App</p>
        <LoginComponent />


    </div>
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue';
export default {
    name: 'LoginView',
    components: {
        LoginComponent
    }
}

</script>