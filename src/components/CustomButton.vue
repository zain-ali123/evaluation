<template>
    <div class="mt-5"> 
        <button  class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm  px-5 py-2.5 mr-2 mb-2">{{ buttonName }}</button>
    </div>
    
</template>

<script>
export default {
    name: 'CustomButton',
    props: {
        buttonName: String,
        // onClick: {
        //     type: Function,
        //     required: true
        // }
    },
    methods: {
        // handleClick() {
        //     this.onClick()
        //     console.log(this.buttonName)
            
        // }
    }
}
</script>