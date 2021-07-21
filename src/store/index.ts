import { getUserInfo } from "@/api";
import { logout } from "@/auth";
import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

Vue.use(Vuex);

interface State {
  meta: {
    title: string;
    error: string | null;
  };
  user: {
    isInitialized: boolean;
    isLoggedIn: boolean;
    isAdmin: boolean;
    email: string;
    username: string;
  };
}

const storeOptions: StoreOptions<State> = {
  state: {
    meta: {
      title: "",
      error: null,
    },
    user: {
      isInitialized: false,
      isLoggedIn: false,
      isAdmin: false,
      email: "",
      username: "",
    },
  },
  mutations: {
    setTitle(state, title: string) {
      state.meta.title = title;
    },
    setError(state, error: string) {
      state.meta.error = error;
    },
    updateUserInfo(state, newState: State["user"]) {
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
    },
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
    },
  },
  modules: {},
};

const store = new Vuex.Store(storeOptions);

export default store;
