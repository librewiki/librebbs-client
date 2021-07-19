import { getUserInfo } from "@/api";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {
      isInitialized: false,
      isLoggedIn: false,
      isAdmin: false,
      email: "",
      username: "",
    }
  },
  mutations: {
    updateUserInfo(state, newState) {
      state.user = newState;
    },
    resetUserInfo(state) {
      localStorage.removeItem("access_token");
      state.user = {
        isInitialized: true,
        isLoggedIn: false,
        isAdmin: false,
        email: "",
        username: "",
      };
    }
  },
  actions: {
    async fetchUserInfo() {
      try {
        const data = await getUserInfo();
        store.commit("updateUserInfo", {
          isInitialized: true,
          isLoggedIn: true,
          isAdmin: false,
          email: data.email,
          username: data.username,
        });
      } catch {
        store.commit("resetUserInfo");
      }
    }
  },
  modules: {},
});

export default store;
