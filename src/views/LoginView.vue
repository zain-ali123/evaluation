<template>
    <div class="grid justify-items-center mt-24  ">

        <p class="text-4xl mb-8"> Login To Tasks App</p>
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