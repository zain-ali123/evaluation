<template>
    <input v-model="id" type="text" placeholder="Add to your tasks here ">
    <CustomButton @click="read(id)" buttonName="Read Task" />
    <li>
        <p>{{ getTask }}</p>
    </li>
    
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
import CustomButton from './CustomButton.vue';
export default {
    name:'ReadTask',
    components: {
        CustomButton
    },
    data() {
        return {
            id: null
            
        }
    },
    methods: {
        ...mapActions({read:'readTasks'})
    },
    computed: {
        ...mapGetters({getTask:'getTasksList'})
    }
}

</script>