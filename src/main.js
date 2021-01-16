import Vue from "vue";
import App from "./App.vue";
import  firebaseApp  from "./firebase/index";
import router from './router'
import store from './store'

Vue.config.productionTip = false;
Vue.use(firebaseApp);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
