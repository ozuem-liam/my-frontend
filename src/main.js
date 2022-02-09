import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
// import dotenv from 'dotenv';

// dotenv.config();
// createApp(App).use(store).mount('#app')
const app = createApp(App);

app.use(store);

app.mount("#app");
