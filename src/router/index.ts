import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const Home = () => import("../views/Home/HomeView.vue");
const Shelf = () => import("../views/Shelf/ShelfView.vue");

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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
