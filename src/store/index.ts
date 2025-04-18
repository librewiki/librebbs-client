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
    isBlocked: boolean;
    email: string;
    username: string;
  };
  modalError: Error | null;
  canWrite: boolean;
  editor: {
    open: boolean;
    initialValue: string;
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
      isBlocked: false,
      email: "",
      username: "",
    },
    modalError: null,
    canWrite: false,
    editor: {
      open: false,
      initialValue: "",
    },
  },
  mutations: {
    setBoard(state, board: Board) {
      state.board = board;
    },
    setError(state, error: Error) {
      state.meta.error = error;
    },
    setErrormodal(state, error: Error) {
      state.modalError = error;
    },
    setEditorOpen(state, newState: boolean) {
      state.editor.open = newState;
      state.editor.initialValue = "";
    },
    setEditorInitialValue(state, initialValue: string) {
      state.editor.initialValue = initialValue;
    },
    setCanWrite(state, newState: boolean) {
      state.canWrite = newState;
    },
    updateUserInfo(state, newState: State["user"]) {
      state.user = newState;
    },
    resetUserInfo(state) {
      state.user = {
        isInitialized: true,
        isLoggedIn: false,
        isAdmin: false,
        isBlocked: false,
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
          isBlocked: data.blocked,
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
