<template>
    <div v-if="getTask.length>0" class="">
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
                <div class="grid grid-cols-8">
                     <p class="mt-5 font-semibold col-span-2 text-sm ">RS {{ item.price }}</p>
                     
                     <!-- <p class="col-span-3"></p> -->
                    <!-- <CustomButton class="col-span-3" @click="addCart(item.itemId,index)" buttonName="Add to cart"></CustomButton>  -->
                </div>
               
                <div class="">
                    <CustomButton @click="delteTask(index)" buttonName="Remove"></CustomButton>
                    <CustomButton  @click="sendUpdate(index)" buttonName="Edit"></CustomButton> 
                </div>
   
                
              </div>

                
                <div v-if="showPopup" class="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-gray-900">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h2 class="text-xl font-semibold mb-4">Popup</h2>
                            <div class="mb-3">
                                <label class="block mb-1 font-medium">Title</label>
                                <input v-model="newData.title" class="w-full px-4 py-2 border rounded-md">
                            </div>
                            <div class="mb-3 ">
                                <label class=" block mb-1 font-medium">Description</label>
                                <textarea v-model="newData.task" class="w-full px-4 py-2 border rounded-md"></textarea>
                            </div>
                            <div class="mb-3">
                                    <label class="block mb-1 font-medium">Price</label>
                                    <input v-model="newData.price" class="w-full px-4 py-2 border rounded-md">
                            </div>
                            <div class="mb-3">
                                    <label class="block mb-1 font-medium">Update image url</label>
                                    <input v-model="newData.image" class="w-full px-4 py-2 border rounded-md">
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
    <div v-else>
        <div>
            <img
                      src="../assets/undraw_No_data_re_kwbl.png"
                      alt="No Data"
                      class="max-w-full h-auto max-h-48 mx-auto"
            />
                
        </div>
        <p class="font-semibold mt-2">No Products Added Yet :( </p>
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
                price: null,
                image:null
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
        addCart(id,index) {
            this.add({productId:id,index:index});
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
