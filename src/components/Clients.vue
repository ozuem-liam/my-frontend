<template>
    <div>
        <table>
            <tr class="t-head">
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Providers</th>
                <th></th>
            </tr>
            <tr v-for="client in allClients" v-bind:key="client._id" class="client">
                <td>{{client.name}}</td>
                <td>{{client.email}}</td>
                <td>{{client.phone}}</td>
                <td>{{client.providers.join(", ")}}</td>
                <td @click="onClick(client)" class="edit">Edit</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import EditClient from '../modals/EditClient.vue'

export default {
    name: "Clients",
    components: {
        EditClient
    },
    methods: {
        ...mapActions(['fetchClientApi', 'selectAClient']),
        onClick(client) {
            this.selectAClient(client)
            this.$emit('link-click');
        },
    },
    computed: {
      ...mapGetters(['allClients'])
    },
    created() {
        this.fetchClientApi();
    }
};
</script>

<style scoped>
    table, td, th {
        border: 1px solid gray;
        text-align: start;
        padding: 5px;
        color: rgb(61, 60, 60);
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }
    .edit {
        color: blue;
        text-decoration: underline;
        cursor: pointer;
    }
    .t-head {
        background: linear-gradient(to top, rgb(236,236,235), rgb(255,255,255));
    }
</style>