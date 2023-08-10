<template>
    <li v-for="(item,index) in cart " :key="index">
                    <p class=""> :Product Name {{ item.title }}</p>
                    <p class=""> Product Description: {{ item.task }}</p>
                    <p class=""> Product price: {{ item.price }}</p>
    </li>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name:'CartView',
    computed: {
        ...mapGetters({cart:'getCart'})
    }
}
</script>