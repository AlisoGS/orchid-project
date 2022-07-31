import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../layouts/FullView.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("../layouts/BlankView.vue"),
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("../views/LoginView.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
