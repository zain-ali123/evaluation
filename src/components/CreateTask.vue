<template>
    <input v-model="form.title" type="text" placeholder="Enter Title for task ">
    <input v-model="form.task" type="text" placeholder="Add to your tasks here ">
    <input v-model="form.id" type="text" placeholder="Enter id for task ">
    <CustomButton @click="create(form)" buttonName="Add To Tasks"/>
    <input >
</template>

<script>
import CustomButton from './CustomButton.vue';
import { mapActions } from 'vuex';
export default {
    name:"CreateTask",
    components: {
        CustomButton
    },
    data() {
        return {
            form: {
                task: null,
                title:null,
                id:null
            }
        }
    },
    methods: {
        ...mapActions({create:'createTask'})    }
}

</script>