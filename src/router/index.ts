import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const Home = () => import("../views/Home/HomeView.vue");
const Shelf = () => import("../views/Shelf/ShelfView.vue");
const User = () => import("../views/User/UserVIew.vue");
const Login = () => import("../views/User/cpn/UserLogin.vue");
const Regiser = () => import("../views/User/cpn/UserReiser.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/shelf",
    name: "shelf",
    component: Shelf,
  },
  {
    path: "/user",
    name: "user",
    component: User,
    children: [
      {
        path: "",
        name: "redirect",
        redirect: { name: "login" },
      },
      {
        path: "login",
        name: "login",
        component: Login,
      },
      {
        path: "regiser",
        name: "regiser",
        component: Regiser,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
