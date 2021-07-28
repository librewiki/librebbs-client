import "navigator.locks";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./buefy";
Vue.config.productionTip = false;
import moment from "moment";
import VueMeta from "vue-meta";

moment.locale("ko");
Vue.prototype.$moment = moment;
Vue.use(VueMeta);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
