import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Top10 from "../components/Top10.vue";
import '../axios'

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/top10",
    name: "Top10",
    component: Top10
  },
  {
    path: "/Pizza",
    name: "PizzaLove",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Pizza.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
