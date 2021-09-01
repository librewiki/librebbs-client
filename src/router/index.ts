import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/wiki",
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import(/* webpackChunkName: "auth" */ "../views/Auth.vue"),
  },
  {
    path: "/:boardName",
    name: "TopicList",
    component: () =>
      import(/* webpackChunkName: "topic_list" */ "../views/TopicList.vue"),
  },
  {
    path: "/:boardName/:topicId",
    name: "Topic",
    component: () =>
      import(/* webpackChunkName: "topic" */ "../views/Topic.vue"),
  },
  {
    path: "/:boardName/search/:query",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/Search.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  store.commit("setError", null);
  try {
    const promises = [];
    if (!store.state.user.isInitialized && to.name !== "Auth") {
      promises.push(store.dispatch("fetchUserInfo"));
    }
    if (to.params.boardName) {
      promises.push(store.dispatch("fetchBoard", to.params.boardName));
    }
    await Promise.all(promises);
    next();
  } catch (error) {
    store.commit("setError", error);
  }
});

export default router;
