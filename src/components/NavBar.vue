<template>
    <nav class="flex items-center justify-between p-4 bg-gray-200 ">
        <div class="flex items-center">
             <router-link to="/">
                <div  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded ">Home</div>
             </router-link>
            
            <!-- <router-link to="/about">
                <div class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 ">About</div>
            </router-link>             -->
            <div><p>{{ role }}</p></div>
        </div>
        <div class="md:ml-auto">
            
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer mr-2" viewBox="0 0 20 20"
                    fill="currentColor" @click="toggleCart">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v1.293a1 1 0 0 1-.293.707l-3 3a1 1 0 0 1-.707.293V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8.293a1 1 0 0 1-.293-.707l-3-3A1 1 0 0 1 1 4V3a1 1 0 0 1 1-1h3V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h6a1 1 0 0 1 1 1v1a1 1 0 0 1-.293.707l-7 7a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6V5a1 1 0 0 1 1-1h6V3zm2 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>

                </svg>
                <div v-show="count > 0" class="p-1 bg-red-500 rounded-full text-white text-xs">{{ count }}</div>
            </div>
        </div>
    </nav>
</template>

<script>
import router from '@/router';
import { mapState } from 'vuex';

export default {
  name: 'NavBar',
  computed: {
    ...mapState({ count: 'cartCount' })
    },
    props: {
    role:String
  },
  data() {
    return {};
  },
  methods: {
    toggleCart() {
      router.push('/cart');
    }
  }
};
</script>

