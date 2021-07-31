import "navigator.locks";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./buefy";
Vue.config.productionTip = false;
import VueMeta from "vue-meta";
import { Settings } from "luxon";

Settings.defaultLocale = "ko-KR";
Vue.use(VueMeta);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
