<template>
    <div class="grid justify-items-center mt-16">
        <p class="text-4xl  mb-8"> Register To Tasks App</p>
        <RegisterComponent />
    </div>
</template>
<script>
import RegisterComponent from '@/components/RegisterComponent.vue'

export default {
    name: 'RegisterView',
    components: {
        RegisterComponent
    }
}
</script>