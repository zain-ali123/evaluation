<template>
    <NavBar/>
    <div class="p-4 shadow-lg grid justify-items-center shadow-lg">
        <h2 class="text-2xl font-bold mb-4">Your Cart</h2>
        <ul>
            <li v-for="(item, index) in cart" :key="index" class="mb-4">
                <p class="mb-2 text-lg font-semibold">{{ item.title }}</p>
                <p class="text-gray-600">Description: {{ item.task }}</p>
                <p class="text-gray-600">Price: Rs{{ item.price.toFixed(2) }}</p>
                <CustomButton @click="remove(index)" buttonName="Remove"></CustomButton>
            </li>
        </ul>
        <div v-if="cart.length > 0" class="mt-4">
            <p class="text-xl font-bold">Total Bill: Rs{{ totalBill.toFixed(2) }}</p>
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
