import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";

Vue.config.productionTip = false;

new Vue({
  beforeCreate: function () {
    Vue.prototype.$authorName = "Anthony";
    Vue.prototype.$authorLastName = "Pillot";
    Vue.prototype.$version = "0.1.0";
  },

  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
