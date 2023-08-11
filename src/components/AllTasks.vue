<template>
    <div class="">
        <!-- <li class="list mb-6 w-screen card" v-for="(item, index) in getTask" :key="index">
            <div class="grid justify-items-stretch">
                <p class=""> Title: {{ item.title }}</p>
                <p class="">Task: {{ item.task }}</p>
                <p class=""> price: {{ item.price }}</p>
                <CustomButton @click="delteTask(index)" buttonName="Delete Tasks"></CustomButton> -->
        <div class="grid grid-cols-1 grid-cols-4 gap-4">
            <div
              v-for="(item, index) in getTask"
              :key="index"
              class="border rounded-lg overflow-hidden shadow-md"
            >
              <div class="p-4">
                <img :src="item.image" alt="Product Image" class="w-60 h-50 object-cover" />

                <h2 class="text-lg font-semibold">{{ item.title }}</h2>
                <p class="text-gray-600">{{ item.task }}</p>
                <p class="mt-2 font-semibold">RS {{ item.price.toFixed(2) }}</p>
                <CustomButton @click="delteTask(index)" buttonName="Remove"></CustomButton>
                <CustomButton  @click="sendUpdate(index)" buttonName="Edit"></CustomButton> 
                <CustomButton @click="addCart(index)" buttonName="ADD TO CART"></CustomButton> 
              </div>

                
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
                            <div class="mb-4">
                                    <label class="block mb-1 font-medium">Task</label>
                                    <input v-model="newData.price" class="w-full px-4 py-2 border rounded-md">
                            </div>
                            <div class="flex justify-end">
                                <CustomButton @click="closePopup" buttonName="Save Changes"></CustomButton>
                            </div>
                    </div>
                </div>
<!--             
         <select
              class="pr-5 w-40 bg-blue-700 rounded-xl py-2 pl-5 text-white"
              @change="handleSelectChange(index)"
              v-model="item.status"
            >
              <option
                class="text-black bg-white"
                v-for="(statusOption, statusIndex) in status"
                :key="statusIndex"
                :value="statusOption.name"
              >
                {{ statusOption.name }}
              </option>
            </select>

                
                <p  :style="{color:item.status == 'In-Progress'? 'blue': item.status == 'Complteted'? 'green': 'red'}">
                    {{ item.status }}
                </p> -->
            </div>
        </div>
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

            newData: {
                title: null,
                task: null,
                price:null
            },
            showPopup: false,
            
        };
    },
    methods: {
        ...mapActions({ update: 'updateTask' }),
        ...mapActions({add:'addTOCart'}),
        delteTask(id) {
            this.getTask.splice(id, 1);
        },
        sendUpdate(index) {
            this.newData.title = this.getTask[index].title
            this.newData.task = this.getTask[index].task
            this.newData.price = this.getTask[index].price
            console.log(this.newData)
            this.showPopup=true
            
            this.update({id :index, payload :this.newData})
        },
        closePopup() {
            this.showPopup = false;
        },
        handleSelectChange(index) {
            this.getTask[index].status = event.target.value;
        },
        addCart(id) {
            this.add(id);
        }
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
