<template>
    <div class="mt-5"> 
        <button :type="type" class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm  px-5 py-1.5 mr-2 ">{{ buttonName }} 
        <slot name="buttonTitle"></slot>
        </button>
    </div>
    
</template>

<script>
export default {
    name: 'CustomButton',
    props: {
        buttonName: String,
        type:String

    },
    methods: {

    }
}
</script>