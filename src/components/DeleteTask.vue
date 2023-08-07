<template>
    <input v-model="id" type="text" placeholder="Enter id to delete task ">
        <CustomButton @click="deleteTask(id)" buttonName="Delete Task" />
        
        <li>
            <p>{{ read }}</p>
        </li>
</template>

<script>
import { mapActions} from 'vuex';
import CustomButton from './CustomButton.vue';
export default {
    name:'DeleteTask',
    components: {
        CustomButton
    },
    data() {
        return {
            id: null

        }
    },
    methods: {
        ...mapActions({ deleteTask: 'deleteTask' })
    },
    computed: {

    }
}

</script>