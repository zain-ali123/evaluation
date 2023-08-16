<template>
    <div class="grid justify-items-center mt-16">
        <p class="text-4xl  mb-8"> Register To  App</p>
        
        <RegisterComponent />
        <p>{{ name }}</p>
    </div>
</template>
<script>
import RegisterComponent from '@/components/RegisterComponent.vue'

export default {
    name: 'RegisterView',
    components: {
        RegisterComponent
    },
    data() {
        return {
            name:'asdf'
        }
    }
}
</script>