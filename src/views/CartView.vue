<template>
    <NavBar/>
    <div class="w-full h-8 grid grid-cols-6 ">
    <div class="col-span-2">PRODUCT</div>
    <div class="col-span-1">NAME</div>
    <div class="col-span-1">DESCRIPTION</div>
    <div class="col-span-1">PRICE</div>
    <div class="col-span-1"></div>
    </div>
    <div class="grid  grid-cols-1 gap-4 ">
        <div 
          v-for="(item, index) in cart"
          :key="index"
          class="  border rounded-lg overflow-hidden shadow-md h-40"
        >
          <div class="grid grid-cols-6 gap-4 ">
            
            <img :src="item.image" alt="Product Image" class="ml-14 col-span-2 w-40 h-40 object-cover" />

            <h2 class="text-lg font-semibold col-span-1">  {{ item.title }}</h2>
            <p class="text-gray-600 col-span-1">  {{ item.task }}</p>
            <p class="mt-2 font-semibold col-span-1 ">RS {{ item.price.toFixed(2) }}</p>
            <CustomButton class="col-span-1" @click="remove(index)" buttonName="Remove"></CustomButton>
          </div>
        </div>
      
        <div v-if="cart.length > 0" class="mt-4">
          <p class="text-xl font-bold">SUBTOTAL: RS. {{ totalBill.toFixed(2) }}</p>
        </div>
        <router-link to="/task">
              <CustomButton  buttonName="Home"></CustomButton>
        </router-link>
      </div>
    
</template>

<script>
import { mapGetters } from 'vuex';
import CustomButton from '@/components/CustomButton.vue';
import NavBar from '../components/NavBar.vue';


export default {
    name: 'CartView',
    components: { CustomButton ,NavBar},
    computed: {
        ...mapGetters({ cart: 'getCart' }),
  totalBill() {
    let sum = 0;

    for (let i = 0; i < this.cart.length; i++) {
      sum += this.cart[i].price;
    }

    return sum;
  }
    },
    methods: {
        remove(index) {
            this.cart.splice(index, 1);
        }
    }
};
</script>

<style scoped>
/* Add your Tailwind CSS classes here or in a separate stylesheet */
</style>
