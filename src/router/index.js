import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
  },
  {
    path: "/sign",
    name: "Sign",
    component: () =>
      import(/* webpackChunkName: "Sign" */ "../views/Sign.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },
  {
    path: "/curriculo",
    name: "Curriculo",
    component: () =>
      import(/* webpackChunkName: "Curriculo" */ "../views/Curriculo.vue"),
  },
  {
    path: "/oportunidades",
    name: "Oportunidades",
    component: () =>
      import(/* webpackChunkName: "Oportunidades" */ "../views/Oportunidades.vue"),
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const id = localStorage.getItem("toke-login") || null;
  if (!id && to.name != "Login" && to.name != "Sign") {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
