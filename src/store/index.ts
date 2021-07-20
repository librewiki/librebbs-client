import { getUserInfo } from "@/api";
import Vue from "vue";
import Vuex, { StoreOptions, Store } from "vuex";

Vue.use(Vuex);

interface State {
  user: {
    isInitialized: boolean,
    isLoggedIn: boolean,
    isAdmin: boolean,
    email: string,
    username: string,
  };
}

const storeOptions: StoreOptions<State> = {
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
};

const store = new Vuex.Store(storeOptions);

export default store;
