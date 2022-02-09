<template>
    <button @click="onClick()" v-bind:style="{ background: bcolor, color: tcolor }" class="btn">{{text}}</button>
</template> 

<script>
export default {
 name: "Button",
 props: {
     text: String,
     bcolor: String,
     tcolor: String,
 },
 methods: {
     onClick() {
         this.$emit('btn-click')
     }
 }
}
</script>

<style>
    .btn {
        width: 120px;
        height: 30px;
        margin-right: 5px;
        border-radius: 5px;
    }
</style>