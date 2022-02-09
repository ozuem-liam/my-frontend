<template>
 <div id="app">
     <ClientList @show-edit-client-modal="showEditClientModal" @show-add-client-modal="showAddClientModal" />
     <div v-if="viewAddClientModal">
       <AddClient @show-add-client-modal="showAddClientModal"  />
     </div>
     <div v-if="viewEditClientModal">
       <EditClient @show-edit-client-modal="showEditClientModal" />
     </div>
 </div>
</template>

<script>
  import ClientList from './pages/ClientList.vue'
  import AddClient from './modals/AddClient.vue'
  import EditClient from './modals/EditClient.vue'

  export default {
    name: "app",
    data() {
        return {
            viewAddClientModal: false,
            viewEditClientModal: false
        }
    },
    methods: {
      showAddClientModal() {
        this.viewAddClientModal = !this.viewAddClientModal;
      },
      showEditClientModal() {
        this.viewEditClientModal = !this.viewEditClientModal;
      },
    },
    components: {
      ClientList,
      AddClient,
      EditClient
    },
  }
</script>

<style>

</style>
