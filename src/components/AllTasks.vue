<template>
    <div class="grid justify-items-center mt-12">
        <li class="list mb-6 w-screen card" v-for="(item, index) in getTask" :key="index">
            <div class="grid justify-items-stretch">
                <p class=""> Title: {{ item.title }}</p>
                <p class="">Task: {{ item.task }}</p>
                <CustomButton @click="delteTask(index)" buttonName="Delete Tasks"></CustomButton>
                <CustomButton  @click="sendUpdate(index) " buttonName="Edit"></CustomButton> 
                <div v-if="showPopup" class="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-gray-900">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h2 class="text-xl font-semibold mb-4">Popup</h2>
                            <div class="mb-4">
                                <label class="block mb-1 font-medium">Title</label>
                                <input v-model="newData.title" class="w-full px-4 py-2 border rounded-md">
                            </div>
                            <div class="mb-4">
                                <label class="block mb-1 font-medium">Task</label>
                                <input v-model="newData.task" class="w-full px-4 py-2 border rounded-md">
                            </div>
                            <div class="flex justify-end">
                                <button @click="closePopup" class="px-4 py-2 text-white bg-blue-500 rounded-md">Close</button>
                            </div>
                    </div>
                </div>

                <select class="pr-5 w-40 bg-blue-700 rounded-xl py-2 pl-5 text-white" v-model="selected"  >
                    <option class="text-black bg-white" 
                    v-for="(statusOption, statusIndex) in status" 
                    :key="statusIndex"
                    
                    :value="statusOption.name">
                        {{ statusOption.name }}
                    </option>
                </select>

                
                <p  :style="{color:selected == 'In-Progress'? 'blue': selected == 'Complteted'? 'green': 'red'}">
                    {{ selected }}
                </p>
            </div>
        </li>
        
    </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
import CustomButton from './CustomButton.vue';
export default {
    name: 'ALLTask',
    
    components: {
        CustomButton
    },
    data() {
        return {
            id: null,
            status: [
                { name: 'In-Progress'},
                { name: 'Complteted'},
                { name: 'Pending' }
            ],
            selected: 'In-Progress', 
            // title: $store.state.allTasks[0].title,
            newData: {
                title: null,
                task :null
            },
            showPopup: false,
            
        };
    },
    methods: {
        ...mapActions({ update: 'updateTask' }),
        delteTask(id) {
            this.getTask.splice(id, 1);
        },
        sendUpdate(index) {
            this.newData.title = this.getTask[index].title
            this.newData.task = this.getTask[index].task
            console.log(this.newData)
            this.showPopup=true
            
            this.update({id :index, payload :this.newData})
        },
        closePopup() {
            this.showPopup = false;


        },

    },
    computed: {
        ...mapGetters({ getTask: 'getAllTaskList' })
    }
};
</script>

<style scoped>
.list {
    list-style: none;
}
</style>
