<template>
    <div class="grid justify-items-center mt-12 card max-w-sm">
        <div class="mb-6">
            <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Title</label>
            <input v-model="form.title" placeholder="Enter Title for task " type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
      
        <div class="mb-6">
                <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Task</label>
                <textarea v-model="form.task" placeholder="Enter task here " type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        <div class="mb-6">
                <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Id</label>
                <input v-model="form.id" placeholder="Enter Id for task " type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
        <CustomButton @click="create(form)" buttonName="Add To Tasks"/>
    </div>
    
    
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