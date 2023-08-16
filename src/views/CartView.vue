<template>
    <NavBar/>
    
    <div class="w-full h-8 grid grid-cols-7 ">
    <div class="col-span-1">PRODUCT</div>
    <div class="col-span-1">NAME</div>
    <div class="col-span-1">DESCRIPTION</div>
    <div class="col-span-1">PRICE</div>
    <div class="col-span-1">Quantity</div>
    </div>
    <div v-if="cart.length > 0">
                <div class="grid  grid-cols-1 gap-4 ">
            <div 
              v-for="(item, index) in cart"
              :key="index"
              class="  border rounded-lg overflow-hidden shadow-md h-40"
            >
              <div class="grid grid-cols-7 gap-4 ">
            
                <img :src="item.image" alt="Product Image" class="ml-7 col-span-1 w-40 h-40 object-cover" />

                <h2 class="text-lg font-semibold col-span-1">  {{ item.title }}</h2>
                <p class="text-gray-600 col-span-1">  {{ item.task }}</p>
                <p class="mt-2 font-semibold col-span-1 ">RS {{ item.price}}</p>
                <p class="col-span-1">{{ item.quantity }}</p>
                <CustomButton class="col-span-1" @click="remove(index)" buttonName="-"></CustomButton>
                <CustomButton class="col-span-1" @click="add(index)" buttonName="+"></CustomButton>
              </div>
            </div>
      
            <div  class="mt-4">
              <p class="text-xl font-bold">SUBTOTAL: RS. {{ totalBill }}</p>
            </div>

        </div>

    </div>
    <div v-else class="flex flex-col items-center justify-center text-center">
          <div>
            <img
              src="../assets/undraw_empty_cart_co35.png"
              alt="empty cart"
              class="max-w-full h-auto max-h-48 mx-auto"
            />
          </div>
          <p class="font-semibold mt-2">Your Cart is Empty</p>
        </div>

        <router-link to="/user">
              <CustomButton  buttonName="Continue Shopping"></CustomButton>
        </router-link>
      
    
</template>

<script>
import { mapGetters,mapState, mapMutations } from 'vuex';
import CustomButton from '@/components/CustomButton.vue';
import NavBar from '../components/NavBar.vue';


export default {
    name: 'CartView',
    components: { CustomButton ,NavBar},
    computed: {
        ...mapGetters({ cart: 'getCart' }),
        ...mapState({ count: 'cartCount' }),
        
  totalBill() {
    let sum = 0;

      for (let i = 0; i < this.cart.length; i++) {

        let quantity = this.cart[i].quantity
        let price = this.cart[i].price
        let total=price*quantity
      sum += total;
    }

    return sum;
  }
    },
    methods: {
        ...mapMutations({ decrease: 'decrement' }),
        ...mapMutations({ increase: 'increment' }),
        remove(index) {
            if (this.cart[index].quantity>0) {
                this.decrease();
                console.log('cart count is>>>>>>>>', this.count)
                this.cart[index].quantity--;
            } else {
                this.cart.splice(index,1)
            }

        },
        add(index) {
            this.increase();
            console.log('cart count is>>>>>>>>', this.count)
            this.cart[index].quantity++;
        }
    }
};
</script>

<style scoped>
/* Add your Tailwind CSS classes here or in a separate stylesheet */
</style>
