import axios from "axios";

const state = {
  clients: [],
  client: null,
};

const getters = {
  allClients: (state) => state.clients,
  aClient: (state) => state.client
};

const actions = {
  async fetchClientApi({ commit }) {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API}client`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    commit("setClients", response.data.data);
  },

  async addAClient({ commit }, client) {
    
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API}client`,
      {
        ...client,
        completed: false,
      }
    );

    commit("newClient", response.data.data);
    window.location.reload();
  },

  async editAClient({ commit }, {id, client}) {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API}client/edit/${id}`,
      {
        ...client,
        completed: false,
      }
    );

    commit("editClient", response.data.data);
    window.location.reload();
  },

  async selectAClient({commit}, client) {
    commit("currentClient", client)
  },

  async deleteClient({ commit }, id) {
    await axios.delete(
      `${import.meta.env.VITE_APP_API}client/delete/${id}`
    );

    commit("removeClient", id);
    window.location.reload();
  },
};

const mutations = {
  setClients: (state, clients) => (state.clients = clients),
  newClient: (state, client) => state.clients.unshift(client),
  currentClient: (state, client) => (state.client = client),
  editClient: (state, client) => (state.client = client),
  removeClient: (state, id) => state.clients = state.clients.filter((client) => client._id !== id),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
