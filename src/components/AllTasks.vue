<template>
    <div class="grid justify-items-center mt-12">
        <li class="list mb-6 w-screen card" v-for="(item, index) in getTask" :key="index">
            <div class="grid justify-items-stretch">
                <p class=""> Title:{{ item.title }}</p>
                <p class="">Task:{{ item.task }}</p>
                <CustomButton @click="delteTask(index)" buttonName="Delete Tasks"></CustomButton>

                <select class="pr-5 w-40 bg-blue-700 rounded-xl py-2 pl-5 text-white" v-model="selected"  >
                    <option class="text-black bg-white" 
                    v-for="(statusOption, statusIndex) in status" 
                    :key="statusIndex"
                    
                    :value="statusOption.name">
                        {{ statusOption.name }}
                    </option>
                </select>

                
                <p v-show="selected" :style="{color:selected == 'In-Progress'? 'blue': selected == 'Complteted'? 'green': 'red'}">
                    {{ selected }}
                </p>
            </div>
        </li>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
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
            
        };
    },
    methods: {
        delteTask(id) {
            this.getTask.splice(id, 1);
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
