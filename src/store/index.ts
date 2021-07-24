import { getBoards, getUserInfo } from "@/api";
import type { Board } from "@/api";
import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

Vue.use(Vuex);

interface State {
  meta: {
    error: Error | null;
  };
  board: Board;
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
      error: null,
    },
    board: {
      id: 0,
      display_name: "",
      name: "",
      is_active: false,
      created_at: "",
      updated_at: "",
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
    setBoard(state, board: Board) {
      state.board = board;
    },
    setError(state, error: Error) {
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
          isAdmin: data.groups.includes("boardmanager"),
          email: data.email,
          username: data.username,
        });
      } catch {
        store.commit("resetUserInfo");
      }
    },
    async fetchBoard(state, boardName: string) {
      const boards = await getBoards();
      const board = boards.find((x) => x.name === boardName);
      if (board) {
        store.commit("setBoard", board);
      } else {
        throw new Error("존재하지 않는 게시판입니다.");
      }
    },
  },
  modules: {},
};

const store = new Vuex.Store(storeOptions);

export default store;
