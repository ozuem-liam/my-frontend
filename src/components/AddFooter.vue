<template>
    <footer>
        <div>
        
        </div>
        <div>
            <Button type="button" @btn-click="$emit('show-add-client-modal')" text="Cancel"/>
            <Button type='submit' text="Add Client"/>
        </div>
    </footer>
</template>

<script>
import Button from "./Button.vue"
export default {
    name: "Footer",
    props: {
        title: String
    },
    components: {
        Button
    }
}
</script>

<style>
 footer {
     display: flex;
     padding: 10px;
     border-top: 1px solid gray;
     justify-content: space-between;
     align-items: center;
     font-family: Arial, Helvetica, sans-serif;
 }
</style>