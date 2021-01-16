import Vue from "vue";
import App from "./App.vue";
import  firebaseApp  from "./firebase/index";

Vue.config.productionTip = false;
Vue.use(firebaseApp);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
