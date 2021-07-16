import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./buefy";
Vue.config.productionTip = false;
import moment from 'moment'

moment.locale('ko')
Vue.prototype.$moment = moment
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
