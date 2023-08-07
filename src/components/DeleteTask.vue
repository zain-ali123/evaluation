<template>
            <div class="grid justify-items-center mt-12 card max-w-sm">

      
 
                <div class="mb-6">
                        <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Id</label>
                        <input v-model="id" placeholder="Enter Id for task " type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                <CustomButton  @click="deleteTaskById(id)" buttonName="Delete Task" />
            </div>
        
        

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
        ...mapActions({ deleteTaskById: 'deleteTask' })
    },
    computed: {

    }
}

</script>