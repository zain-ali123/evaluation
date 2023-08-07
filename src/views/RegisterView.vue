<template>
    <div class="grid justify-items-center mt-8">
        <p class="text-4xl "> Register To Tasks App</p>
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