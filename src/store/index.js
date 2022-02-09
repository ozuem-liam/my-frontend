import { createStore } from "vuex";
import clients from "./modules/clients"
import providers from "./modules/providers"

export default createStore({
    modules: {
        clients,
        providers
    }
})