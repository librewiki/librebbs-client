import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import TopicList from "../views/TopicList.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/auth",
    name: "Auth",
    component: () =>
      import(/* webpackChunkName: "auth" */ "../views/Auth.vue"),
  },
  {
    path: "/:boardName",
    name: "TopicList",
    component: TopicList,
  },
  {
    path: "/:boardName/:topicId",
    name: "Topic",
    component: () =>
      import(/* webpackChunkName: "topic" */ "../views/Topic.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  store.commit("setError", null);
  if (!store.state.user.isInitialized && to.name !== "Auth") {
    store.dispatch("fetchUserInfo");
  }
  next();
});

export default router;
