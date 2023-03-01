import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LandingPage from "../views/LandingPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: LandingPage,
  },
  {
    path: "/timetracker",
    component: () => import("../views/TimeTracker.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
