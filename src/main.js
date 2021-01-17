import Vue from "vue";
import App from "./App.vue";
import firebaseApp from "./firebase/index";
import router from "./router";
import store from "./store";
import Slider from "@jeremyhamm/vue-slider";

Vue.use(Slider);

Vue.config.productionTip = false;
Vue.use(firebaseApp);

Vue.directive("scroll", {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

