import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "*",
    component: () =>
      import(
        /* webpackChunkName: "NotFoundComponent" */ "../views/NotFoundComponent.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "text-red-400 font-bold",
  base: process.env.BASE_URL,
  routes
});

export default router;
