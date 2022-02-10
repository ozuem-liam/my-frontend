import axios from "axios";
import { mapActions } from "vuex";

const state = {
  providers: [],
};

const getters = {
  allProviders: (state) => state.providers,
};

const actions = {
  async fetchProviderApi({ commit }) {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API}provider`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    commit("setProviders", response.data.data);
  },

  async addAProvider({ commit }, provider) {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API}provider`,
      {
        provider,
        completed: false
      }
    );

    commit("newProvider", response.data.data);
  },

  async deleteAProvider({ commit }, id) {
    await axios.delete(
      `${import.meta.env.VITE_APP_API}provider/delete/${id}`
    );

    commit("removeProvider", id);
  },
};

const mutations = {
  setProviders: (state, providers) => (state.providers = providers),
  newProvider: (state, provider) => state.providers.unshift(provider),
  removeProvider: (state, id) => state.providers = state.providers.filter((provider) => provider._id !== id),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
