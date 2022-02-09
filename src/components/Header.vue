<template>
    <header>
        <h2>{{ title }}</h2>
        <Button @btn-click="$emit('show-add-client-modal')" text="New Client"/>
    </header>
</template>

<script>
import Button from "./Button.vue"
export default {
    name: "Header",
    props: {
        title: String
    },
    components: {
        Button
    }
}
</script>

<style>
 header {
     display: flex;
     padding: 5px;
     background: rgba(182, 208, 226, 0.2);
     height: 35px;
     color: rgba(65, 105, 225, 0.6
     );
     justify-content: space-between;
     align-items: center;
     font-family: Arial, Helvetica, sans-serif;
 }
</style>