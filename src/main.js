import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import "bootstrap/dist/css/bootstrap.css";
import feather from "feather-icons";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  mounted() {
    feather.replace();
  }
}).$mount("#app");
